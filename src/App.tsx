import { useState } from "react";
import type { DragEndEvent } from "@dnd-kit/core";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import Properties from "./components/Properties";
import { generateHTML } from "./utils/generateHTML";
import { generateCSS } from "./utils/generateCSS";
import type {
  BuilderComponent,
  ComponentType,
  BuilderStyles,
} from "./types/builder";

function App() {
  const [components, setComponents] = useState<BuilderComponent[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const findComponentById = (
    componentList: BuilderComponent[],
    id: string
  ): BuilderComponent | undefined => {
    for (const component of componentList) {
      if (component.id === id) {
        return component;
      }

      if (component.children?.length) {
        const found = findComponentById(
          component.children,
          id
        );

        if (found) {
          return found;
        }
      }
    }

    return undefined;
  };

  const findParentById = (
    componentList: BuilderComponent[],
    childId: string
  ): BuilderComponent | undefined => {
    for (const component of componentList) {
      if (
        component.children?.some(
          (child) => child.id === childId
        )
      ) {
        return component;
      }

      if (component.children?.length) {
        const found = findParentById(
          component.children,
          childId
        );

        if (found) {
          return found;
        }
      }
    }

    return undefined;
  };

  const isDescendant = (
    component: BuilderComponent,
    id: string
  ): boolean => {
    if (!component.children?.length) {
      return false;
    }

    for (const child of component.children) {
      if (child.id === id) {
        return true;
      }

      if (isDescendant(child, id)) {
        return true;
      }
    }

    return false;
  };

  const selectedComponent = selectedId
    ? findComponentById(
        components,
        selectedId
      )
    : undefined;

  const createDefaultStyles =
    (): BuilderStyles => ({
      width: 100,
      widthUnit: "%",
      height: 300,
      heightUnit: "px",
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      display: "block",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      gap: 0,
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0,
      textAlign: "left",
      borderWidth: 0,
      borderStyle: "none",
      borderColor: "#000000",
      borderRadius: 0,
      opacity: 1,
      overflow: "visible",
      zIndex: 1,
    });

  const createComponent = (
    type: ComponentType
  ): BuilderComponent => {
    return {
      id: crypto.randomUUID(),
      type,
      text: type,
      heroTitle: "Hero Title",
      heroSubtitle: "Hero Subtitle goes here",
      heroButtonText: "Get Started",
      minHeight: 300,
      fontSize: 32,
      color: "#000000",
      backgroundColor: "#ffffff",
      imageUrl: "",
      imageWidth: 100,
      imageHeight: 300,
      imageBorderRadius: 8,
      styles: createDefaultStyles(),
      children: [],
    };
  };

  const updateComponentById = (
    componentList: BuilderComponent[],
    id: string,
    updater: (
      component: BuilderComponent
    ) => BuilderComponent
  ): BuilderComponent[] => {
    return componentList.map((component) => {
      if (component.id === id) {
        return updater(component);
      }

      if (component.children?.length) {
        return {
          ...component,
          children: updateComponentById(
            component.children,
            id,
            updater
          ),
        };
      }

      return component;
    });
  };

  const removeComponentById = (
    componentList: BuilderComponent[],
    id: string
  ): {
    components: BuilderComponent[];
    removed?: BuilderComponent;
  } => {
    for (let index = 0; index < componentList.length; index++) {
      const component = componentList[index];

      if (component.id === id) {
        const updated = [...componentList];
        const [removed] = updated.splice(index, 1);

        return {
          components: updated,
          removed,
        };
      }

      if (component.children?.length) {
        const result = removeComponentById(
          component.children,
          id
        );

        if (result.removed) {
          const updated = [...componentList];

          updated[index] = {
            ...component,
            children: result.components,
          };

          return {
            components: updated,
            removed: result.removed,
          };
        }
      }
    }

    return {
      components: componentList,
    };
  };

  const addComponentToContainer = (
    componentList: BuilderComponent[],
    containerId: string,
    child: BuilderComponent
  ): BuilderComponent[] => {
    return updateComponentById(
      componentList,
      containerId,
      (component) => ({
        ...component,
        children: [
          ...(component.children ?? []),
          child,
        ],
      })
    );
  };

  const insertBeforeComponent = (
    componentList: BuilderComponent[],
    targetId: string,
    componentToInsert: BuilderComponent
  ): BuilderComponent[] => {
    const targetIndex = componentList.findIndex(
      (component) =>
        component.id === targetId
    );

    if (targetIndex !== -1) {
      const updated = [...componentList];

      updated.splice(
        targetIndex,
        0,
        componentToInsert
      );

      return updated;
    }

    return componentList.map((component) => {
      if (component.children?.length) {
        const updatedChildren =
          insertBeforeComponent(
            component.children,
            targetId,
            componentToInsert
          );

        if (
          updatedChildren !==
          component.children
        ) {
          return {
            ...component,
            children: updatedChildren,
          };
        }
      }

      return component;
    });
  };

  const addComponent = (
    type: ComponentType
  ) => {
    const newComponent =
      createComponent(type);

    if (
      selectedComponent?.type ===
      "Container"
    ) {
      setComponents(
        addComponentToContainer(
          components,
          selectedComponent.id,
          newComponent
        )
      );

      setSelectedId(
        newComponent.id
      );

      return;
    }

    setComponents([
      ...components,
      newComponent,
    ]);

    setSelectedId(
      newComponent.id
    );
  };

  const reorderComponents = (
    activeId: string,
    overId: string
  ) => {
    if (activeId === overId) {
      return;
    }

    const activeComponent =
      findComponentById(
        components,
        activeId
      );

    const overComponent =
      findComponentById(
        components,
        overId
      );

    if (
      !activeComponent ||
      !overComponent
    ) {
      return;
    }

    if (
      activeComponent.id ===
      overComponent.id
    ) {
      return;
    }

    if (
      isDescendant(
        activeComponent,
        overId
      )
    ) {
      return;
    }

    const activeParent =
      findParentById(
        components,
        activeId
      );

    const overParent =
      findParentById(
        components,
        overId
      );

    const activeParentId =
      activeParent?.id ?? null;

    const overParentId =
      overParent?.id ?? null;

    // Same parent = normal reorder
    if (
      activeParentId ===
      overParentId
    ) {
      const currentList = activeParent
        ? activeParent.children ?? []
        : components;

      const oldIndex =
        currentList.findIndex(
          (component) =>
            component.id === activeId
        );

      const newIndex =
        currentList.findIndex(
          (component) =>
            component.id === overId
        );

      if (
        oldIndex === -1 ||
        newIndex === -1
      ) {
        return;
      }

      const updatedList = [
        ...currentList,
      ];

      const [movedComponent] =
        updatedList.splice(
          oldIndex,
          1
        );

      updatedList.splice(
        newIndex,
        0,
        movedComponent
      );

      if (activeParent) {
        setComponents(
          updateComponentById(
            components,
            activeParent.id,
            (component) => ({
              ...component,
              children:
                updatedList,
            })
          )
        );
      } else {
        setComponents(
          updatedList
        );
      }

      return;
    }

    // Remove active component first
    const removal =
      removeComponentById(
        components,
        activeId
      );

    if (!removal.removed) {
      return;
    }

    const movedComponent =
      removal.removed;

    let updatedComponents =
      removal.components;

    // Dropping onto a Container
    if (
      overComponent.type ===
      "Container"
    ) {
      updatedComponents =
        addComponentToContainer(
          updatedComponents,
          overId,
          movedComponent
        );

      setComponents(
        updatedComponents
      );

      setSelectedId(
        movedComponent.id
      );

      return;
    }

    // Dropping onto another component
    updatedComponents =
      insertBeforeComponent(
        updatedComponents,
        overId,
        movedComponent
      );

    setComponents(
      updatedComponents
    );

    setSelectedId(
      movedComponent.id
    );
  };

  const handleCanvasDragEnd = (
    event: DragEndEvent
  ) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    reorderComponents(
      String(active.id),
      String(over.id)
    );
  };

  const updateText = (
    value: string
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          text: value,
        })
      )
    );
  };

  const updateFontSize = (
    value: number
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          fontSize: value,
          styles: {
            ...component.styles,
            fontSize: value,
          },
        })
      )
    );
  };

  const updateColor = (
    value: string
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          color: value,
          styles: {
            ...component.styles,
            color: value,
          },
        })
      )
    );
  };

  const updateBackgroundColor = (
    value: string
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          backgroundColor: value,
          styles: {
            ...component.styles,
            backgroundColor: value,
          },
        })
      )
    );
  };

  const updateMinHeight = (
    value: number
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          minHeight: value,
          styles: {
            ...component.styles,
            height: value,
            heightUnit: "px",
          },
        })
      )
    );
  };

  const updateImage = (
    value: string
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          imageUrl: value,
        })
      )
    );
  };

  const updateImageWidth = (
    value: number
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          imageWidth: value,
        })
      )
    );
  };

  const updateImageHeight = (
    value: number
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          imageHeight: value,
        })
      )
    );
  };

  const updateImageBorderRadius = (
    value: number
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          imageBorderRadius: value,
        })
      )
    );
  };

  const updateStyles = (
    updates: Partial<BuilderStyles>
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          styles: {
            ...component.styles,
            ...updates,
          },
        })
      )
    );
  };

  const deleteComponent = () => {
    if (!selectedId) {
      return;
    }

    const result =
      removeComponentById(
        components,
        selectedId
      );

    setComponents(
      result.components
    );

    setSelectedId(null);
  };

  const moveComponentUp = () => {
    if (!selectedId) {
      return;
    }

    const parent =
      findParentById(
        components,
        selectedId
      );

    const list = parent
      ? parent.children ?? []
      : components;

    const index = list.findIndex(
      (component) =>
        component.id === selectedId
    );

    if (index <= 0) {
      return;
    }

    const updatedList = [
      ...list,
    ];

    [
      updatedList[index - 1],
      updatedList[index],
    ] = [
      updatedList[index],
      updatedList[index - 1],
    ];

    if (parent) {
      setComponents(
        updateComponentById(
          components,
          parent.id,
          (component) => ({
            ...component,
            children:
              updatedList,
          })
        )
      );
    } else {
      setComponents(
        updatedList
      );
    }
  };

  const moveComponentDown = () => {
    if (!selectedId) {
      return;
    }

    const parent =
      findParentById(
        components,
        selectedId
      );

    const list = parent
      ? parent.children ?? []
      : components;

    const index = list.findIndex(
      (component) =>
        component.id === selectedId
    );

    if (
      index === -1 ||
      index === list.length - 1
    ) {
      return;
    }

    const updatedList = [
      ...list,
    ];

    [
      updatedList[index + 1],
      updatedList[index],
    ] = [
      updatedList[index],
      updatedList[index + 1],
    ];

    if (parent) {
      setComponents(
        updateComponentById(
          components,
          parent.id,
          (component) => ({
            ...component,
            children:
              updatedList,
          })
        )
      );
    } else {
      setComponents(
        updatedList
      );
    }
  };

  const cloneComponentTree = (
    component: BuilderComponent
  ): BuilderComponent => {
    return {
      ...component,
      id: crypto.randomUUID(),
      styles: component.styles
        ? {
            ...component.styles,
          }
        : undefined,
      children: component.children
        ? component.children.map(
            (child) =>
              cloneComponentTree(
                child
              )
          )
        : [],
    };
  };

  const duplicateComponent = () => {
    if (!selectedId) {
      return;
    }

    const component =
      findComponentById(
        components,
        selectedId
      );

    if (!component) {
      return;
    }

    const duplicatedComponent =
      cloneComponentTree(
        component
      );

    const parent =
      findParentById(
        components,
        selectedId
      );

    if (parent) {
      const children =
        parent.children ?? [];

      const index =
        children.findIndex(
          (child) =>
            child.id === selectedId
        );

      if (index === -1) {
        return;
      }

      const updatedChildren = [
        ...children,
      ];

      updatedChildren.splice(
        index + 1,
        0,
        duplicatedComponent
      );

      setComponents(
        updateComponentById(
          components,
          parent.id,
          (component) => ({
            ...component,
            children:
              updatedChildren,
          })
        )
      );
    } else {
      const index =
        components.findIndex(
          (component) =>
            component.id ===
            selectedId
        );

      if (index === -1) {
        return;
      }

      const updated = [
        ...components,
      ];

      updated.splice(
        index + 1,
        0,
        duplicatedComponent
      );

      setComponents(
        updated
      );
    }

    setSelectedId(
      duplicatedComponent.id
    );
  };

  const updateHeroTitle = (
    value: string
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          heroTitle: value,
        })
      )
    );
  };

  const updateHeroSubtitle = (
    value: string
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          heroSubtitle: value,
        })
      )
    );
  };

  const updateHeroButtonText = (
    value: string
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId || "",
        (component) => ({
          ...component,
          heroButtonText:
            value,
        })
      )
    );
  };

  const downloadFile = (
    filename: string,
    content: string
  ) => {
    const blob = new Blob(
      [content],
      {
        type: "text/plain",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  };

  const exportHTML = () => {
    const html =
      generateHTML(
        components
      );

    downloadFile(
      "index.html",
      html
    );
  };

  const exportCSS = () => {
    const css =
      generateCSS();

    downloadFile(
      "style.css",
      css
    );
  };

  const saveProject = () => {
    localStorage.setItem(
      "website-builder-project",
      JSON.stringify(
        components
      )
    );

    alert(
      "Project opgeslagen!"
    );
  };

  const loadProject = () => {
    const savedProject =
      localStorage.getItem(
        "website-builder-project"
      );

    if (!savedProject) {
      alert(
        "Geen opgeslagen project gevonden"
      );
      return;
    }

    try {
      const parsedProject: BuilderComponent[] =
        JSON.parse(
          savedProject
        );

      setComponents(
        parsedProject
      );

      setSelectedId(null);

      alert(
        "Project geladen!"
      );
    } catch {
      alert(
        "Het opgeslagen project is ongeldig."
      );
    }
  };

  return (
    <div className="editor">
      <Sidebar
        components={components}
        selectedId={selectedId}
        addComponent={addComponent}
        setSelectedId={setSelectedId}
        onDragEnd={
          reorderComponents
        }
      />

      <div className="canvas">
        <div className="canvas-header">
          <button
            onClick={
              exportHTML
            }
          >
            Export HTML
          </button>

          <button
            onClick={
              exportCSS
            }
          >
            Export CSS
          </button>

          <button
            onClick={
              saveProject
            }
          >
            Save Project
          </button>

          <button
            onClick={
              loadProject
            }
          >
            Load Project
          </button>
        </div>

        <Canvas
          components={
            components
          }
          selectedId={
            selectedId
          }
          setSelectedId={
            setSelectedId
          }
          onDragEnd={
            handleCanvasDragEnd
          }
        />
      </div>

      <Properties
        selectedComponent={
          selectedComponent
        }
        updateText={
          updateText
        }
        updateFontSize={
          updateFontSize
        }
        updateColor={
          updateColor
        }
        updateBackgroundColor={
          updateBackgroundColor
        }
        updateMinHeight={
          updateMinHeight
        }
        updateHeroTitle={
          updateHeroTitle
        }
        updateHeroSubtitle={
          updateHeroSubtitle
        }
        updateHeroButtonText={
          updateHeroButtonText
        }
        updateImage={
          updateImage
        }
        updateImageWidth={
          updateImageWidth
        }
        updateImageHeight={
          updateImageHeight
        }
        updateImageBorderRadius={
          updateImageBorderRadius
        }
        updateStyles={
          updateStyles
        }
        moveComponentUp={
          moveComponentUp
        }
        moveComponentDown={
          moveComponentDown
        }
        duplicateComponent={
          duplicateComponent
        }
        deleteComponent={
          deleteComponent
        }
      />
    </div>
  );
}

export default App;