import { useState } from "react";
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

  const selectedComponent = components.find(
    (component) => component.id === selectedId
  );

  const addComponent = (type: ComponentType) => {
    const newComponent: BuilderComponent = {
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
      styles: {
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
      },
    };

    setComponents([...components, newComponent]);
    setSelectedId(newComponent.id);
  };

  const updateText = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, text: value }
          : component
      )
    );
  };

  const updateFontSize = (value: number) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? {
              ...component,
              fontSize: value,
              styles: {
                ...component.styles,
                fontSize: value,
              },
            }
          : component
      )
    );
  };

  const updateColor = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? {
              ...component,
              color: value,
              styles: {
                ...component.styles,
                color: value,
              },
            }
          : component
      )
    );
  };

  const updateBackgroundColor = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? {
              ...component,
              backgroundColor: value,
              styles: {
                ...component.styles,
                backgroundColor: value,
              },
            }
          : component
      )
    );
  };

  const updateMinHeight = (value: number) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? {
              ...component,
              minHeight: value,
              styles: {
                ...component.styles,
                height: value,
                heightUnit: "px",
              },
            }
          : component
      )
    );
  };

  const updateImage = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, imageUrl: value }
          : component
      )
    );
  };

  const updateImageWidth = (value: number) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, imageWidth: value }
          : component
      )
    );
  };

  const updateImageHeight = (value: number) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, imageHeight: value }
          : component
      )
    );
  };

  const updateImageBorderRadius = (value: number) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? {
              ...component,
              imageBorderRadius: value,
            }
          : component
      )
    );
  };

  const updateStyles = (
    updates: Partial<BuilderStyles>
  ) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? {
              ...component,
              styles: {
                ...component.styles,
                ...updates,
              },
            }
          : component
      )
    );
  };

  const deleteComponent = () => {
    setComponents(
      components.filter(
        (component) => component.id !== selectedId
      )
    );

    setSelectedId(null);
  };

  const moveComponentUp = () => {
    const index = components.findIndex(
      (component) => component.id === selectedId
    );

    if (index <= 0) return;

    const updated = [...components];

    [updated[index - 1], updated[index]] = [
      updated[index],
      updated[index - 1],
    ];

    setComponents(updated);
  };

  const moveComponentDown = () => {
    const index = components.findIndex(
      (component) => component.id === selectedId
    );

    if (
      index === -1 ||
      index === components.length - 1
    ) {
      return;
    }

    const updated = [...components];

    [updated[index + 1], updated[index]] = [
      updated[index],
      updated[index + 1],
    ];

    setComponents(updated);
  };

  const duplicateComponent = () => {
    const component = components.find(
      (component) => component.id === selectedId
    );

    if (!component) return;

    const duplicatedComponent: BuilderComponent = {
      ...component,
      id: crypto.randomUUID(),
      styles: component.styles
        ? { ...component.styles }
        : undefined,
    };

    const index = components.findIndex(
      (component) => component.id === selectedId
    );

    if (index === -1) return;

    const updated = [...components];

    updated.splice(index + 1, 0, duplicatedComponent);

    setComponents(updated);
    setSelectedId(duplicatedComponent.id);
  };

  const updateHeroTitle = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, heroTitle: value }
          : component
      )
    );
  };

  const updateHeroSubtitle = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, heroSubtitle: value }
          : component
      )
    );
  };

  const updateHeroButtonText = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? {
              ...component,
              heroButtonText: value,
            }
          : component
      )
    );
  };

  const downloadFile = (
    filename: string,
    content: string
  ) => {
    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  };

  const exportHTML = () => {
    const html = generateHTML(components);
    downloadFile("index.html", html);
  };

  const exportCSS = () => {
    const css = generateCSS();
    downloadFile("style.css", css);
  };

  const saveProject = () => {
    localStorage.setItem(
      "website-builder-project",
      JSON.stringify(components)
    );

    alert("Project opgeslagen!");
  };

  const loadProject = () => {
    const savedProject = localStorage.getItem(
      "website-builder-project"
    );

    if (!savedProject) {
      alert("Geen opgeslagen project gevonden");
      return;
    }

    try {
      const parsedProject: BuilderComponent[] =
        JSON.parse(savedProject);

      setComponents(parsedProject);
      setSelectedId(null);

      alert("Project geladen!");
    } catch {
      alert("Het opgeslagen project is ongeldig.");
    }
  };

  return (
    <div className="editor">
      <Sidebar addComponent={addComponent} />

      <div className="canvas">
        <div className="canvas-header">
          <button onClick={exportHTML}>
            Export HTML
          </button>

          <button onClick={exportCSS}>
            Export CSS
          </button>

          <button onClick={saveProject}>
            Save Project
          </button>

          <button onClick={loadProject}>
            Load Project
          </button>
        </div>

        <Canvas
          components={components}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>

      <Properties
        selectedComponent={selectedComponent}
        updateText={updateText}
        updateFontSize={updateFontSize}
        updateColor={updateColor}
        updateBackgroundColor={updateBackgroundColor}
        updateMinHeight={updateMinHeight}
        updateHeroTitle={updateHeroTitle}
        updateHeroSubtitle={updateHeroSubtitle}
        updateHeroButtonText={updateHeroButtonText}
        updateImage={updateImage}
        updateImageWidth={updateImageWidth}
        updateImageHeight={updateImageHeight}
        updateImageBorderRadius={updateImageBorderRadius}
        updateStyles={updateStyles}
        moveComponentUp={moveComponentUp}
        moveComponentDown={moveComponentDown}
        duplicateComponent={duplicateComponent}
        deleteComponent={deleteComponent}
      />
    </div>
  );
}

export default App;