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
  DeviceType,
  NavbarSettings,
  HeroSettings,
  SectionSettings,
  CardSettings,
  FooterSettings,
} from "./types/builder";

function App() {
  const [components, setComponents] =
    useState<BuilderComponent[]>([]);
  const [selectedId, setSelectedId] =
    useState<string | null>(null);
  const [device, setDevice] =
    useState<DeviceType>("desktop");
  const findComponentById = (
    componentList: BuilderComponent[],
    id: string
  ): BuilderComponent | undefined => {
    for (const component of componentList) {
      if (component.id === id) {
        return component;
      }
      if (component.children?.length) {
        const found =
          findComponentById(
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
          (child) =>
            child.id === childId
        )
      ) {
        return component;
      }
      if (component.children?.length) {
        const found =
          findParentById(
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
      if (
        isDescendant(
          child,
          id
        )
      ) {
        return true;
      }
    }
    return false;
  };
  const isLayoutParent = (
    type: ComponentType
  ): boolean => {
    return (
      type === "Container" ||
      type === "Row" ||
      type === "Stack"
    );
  };
  const selectedComponent =
    selectedId
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
      maxWidth: 0,
      maxWidthUnit: "px",
      minHeight: 0,
      minHeightUnit: "px",
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
      justifyContent:
        "flex-start",
      alignItems:
        "stretch",
      horizontalAlign:
        "left",
      gap: 0,
      gridColumns: 1,
      gridGap: 16,
      backgroundColor:
        "#ffffff",
      color:
        "#000000",
      fontFamily:
        "Arial",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0,
      textAlign: "left",
      borderWidth: 0,
      borderStyle:
        "none",
      borderColor:
        "#000000",
      borderRadius: 0,
      opacity: 1,
      overflow:
        "visible",
      zIndex: 1,
    });
  const createComponentStyles = (
    type: ComponentType
  ): BuilderStyles => {
    const styles =
      createDefaultStyles();
    if (
      type ===
      "Container"
    ) {
      return {
        ...styles,
        height: 300,
        display:
          "block",
        gap: 16,
        gridColumns: 1,
        gridGap: 16,
      };
    }
    if (
      type ===
      "Row"
    ) {
      return {
        ...styles,
        height: 200,
        display:
          "flex",
        flexDirection:
          "row",
        justifyContent:
          "flex-start",
        alignItems:
          "stretch",
        gap: 16,
      };
    }
    if (
      type ===
      "Stack"
    ) {
      return {
        ...styles,
        height: 300,
        display:
          "flex",
        flexDirection:
          "column",
        justifyContent:
          "flex-start",
        alignItems:
          "stretch",
        gap: 16,
      };
    }
    if (
      type ===
      "Card"
    ) {
      return {
        ...styles,
        height: 250,
        display:
          "block",
        width: 100,
        widthUnit:
          "%",
        backgroundColor:
          "#ffffff",
      };
    }
    if (
      type ===
      "Navbar"
    ) {
      return {
        ...styles,
        width: 100,
        widthUnit:
          "%",
        height: 72,
        heightUnit:
          "px",
        paddingTop: 0,
        paddingRight: 20,
        paddingBottom: 0,
        paddingLeft: 20,
        display:
          "flex",
        flexDirection:
          "row",
        justifyContent:
          "space-between",
        alignItems:
          "center",
        gap: 24,
        backgroundColor:
          "#ffffff",
        color:
          "#172033",
        borderWidth: 1,
        borderStyle:
          "solid",
        borderColor:
          "#e4e7ef",
        borderRadius:
          10,
      };
    }
    if (
      type ===
      "Hero"
    ) {
      return {
        ...styles,
        height: 420,
        heightUnit:
          "px",
        backgroundColor:
          "#f8fafc",
        color:
          "#111827",
        paddingTop:
          80,
        paddingBottom:
          80,
        textAlign:
          "center",
      };
    }
    if (
      type ===
      "Section"
    ) {
      return {
        ...styles,
        height: 350,
        heightUnit:
          "px",
        backgroundColor:
          "#ffffff",
        color:
          "#111827",
        paddingTop:
          70,
        paddingBottom:
          70,
        textAlign:
          "left",
      };
    }
    if (
      type ===
      "Footer"
    ) {
      return {
        ...styles,
        height: 360,
        heightUnit:
          "px",
        backgroundColor:
          "#0f172a",
        color:
          "#ffffff",
        paddingTop:
          50,
        paddingBottom:
          50,
        textAlign:
          "center",
      };
    }
    if (
      type ===
      "Heading"
    ) {
      return {
        ...styles,
        height:
          undefined,
        fontSize:
          32,
        fontWeight:
          700,
        lineHeight:
          1.2,
        textAlign:
          "left",
      };
    }
    if (
      type ===
      "Paragraph"
    ) {
      return {
        ...styles,
        height:
          undefined,
        fontSize:
          16,
        fontWeight:
          400,
        lineHeight:
          1.5,
        textAlign:
          "left",
      };
    }
    if (
      type ===
      "Button"
    ) {
      return {
        ...styles,
        height:
          undefined,
        width: undefined,
        widthUnit:
          undefined,
        fontSize:
          16,
        fontWeight:
          600,
      };
    }
    if (
      type ===
      "Image"
    ) {
      return {
        ...styles,
        height:
          undefined,
        backgroundColor:
          "transparent",
      };
    }
    return styles;
  };
  const createDefaultNavbarLinks = () => [
    {
      id: crypto.randomUUID(),
      label: "Home",
      url: "#",
    },
    {
      id: crypto.randomUUID(),
      label: "About",
      url: "#",
    },
    {
      id: crypto.randomUUID(),
      label: "Services",
      url: "#",
    },
    {
      id: crypto.randomUUID(),
      label: "Contact",
      url: "#",
    },
  ];
  const createDefaultHero = (): HeroSettings => ({
    title:
      "Build something amazing",
    subtitle:
      "Create a beautiful website with your visual website builder.",
    buttonText:
      "Get Started",
    buttonUrl:
      "#contact",
    buttonStyle:
      "solid",
    contentWidth:
      900,
    contentWidthUnit:
      "px",
    verticalPadding:
      80,
    textAlign:
      "center",
  });
  const createDefaultSection = (): SectionSettings => ({
    title:
      "Section Title",
    content:
      "Section content goes here. Add more components inside this section to build your page.",
    contentWidth:
      1100,
    contentWidthUnit:
      "px",
    textAlign:
      "left",
  });
  const createDefaultCard = (): CardSettings => ({
    title:
      "Card Title",
    content:
      "Card description goes here.",
    buttonText:
      "Learn More",
    buttonUrl:
      "#",
    showButton:
      true,
    imageUrl:
      "",
  });
  const createDefaultFooter = (): FooterSettings => ({
    brandName:
      "Your Brand",
    description:
      "Build beautiful websites with a flexible and modern visual editor.",
    copyright:
      "© 2026 Your Brand",
    showNewsletter:
      false,
    newsletterTitle:
      "Stay in the loop",
    newsletterDescription:
      "Subscribe for updates and new content.",
  });
  const createComponent = (
    type: ComponentType
  ): BuilderComponent => {
    const styles =
      createComponentStyles(type);
    const navbarSettings:
      NavbarSettings | undefined =
      type === "Navbar"
        ? {
            logoText:
              "Logo",
            logoSize:
              20,
            navGap:
              24,
            height:
              72,
            padding:
              20,
            borderRadius:
              10,
            borderColor:
              "#e4e7ef",
            borderWidth:
              1,
            boxShadow:
              "0 4px 16px rgba(15, 23, 42, 0.06)",
            sticky:
              false,
            links:
              createDefaultNavbarLinks(),
          }
        : undefined;
    const heroSettings:
      HeroSettings | undefined =
      type === "Hero"
        ? createDefaultHero()
        : undefined;
    const sectionSettings:
      SectionSettings | undefined =
      type === "Section"
        ? createDefaultSection()
        : undefined;
    const cardSettings:
      CardSettings | undefined =
      type === "Card"
        ? createDefaultCard()
        : undefined;
    const footerSettings:
      FooterSettings | undefined =
      type === "Footer"
        ? createDefaultFooter()
        : undefined;
    return {
      id: crypto.randomUUID(),
      type,
      text:
        type ===
        "Navbar"
          ? "Logo"
          : type ===
            "Section"
          ? sectionSettings?.title
          : type ===
            "Card"
          ? cardSettings?.title
          : type ===
            "Footer"
          ? footerSettings?.brandName
          : type,
      heroTitle:
        heroSettings?.title ??
        "Hero Title",
      heroSubtitle:
        heroSettings?.subtitle ??
        "Hero Subtitle goes here",
      heroButtonText:
        heroSettings?.buttonText ??
        "Get Started",
      minHeight:
        type ===
        "Container"
          ? 300
          : 0,
      fontSize:
        type ===
        "Navbar"
          ? 16
          : 32,
      color:
        type ===
        "Navbar"
          ? "#172033"
          : type ===
            "Footer"
          ? "#ffffff"
          : "#000000",
      backgroundColor:
        styles.backgroundColor ??
        "#ffffff",
      imageUrl:
        cardSettings?.imageUrl ??
        "",
      imageWidth:
        100,
      imageHeight:
        300,
      imageBorderRadius:
        8,
      navbar:
        navbarSettings,
      hero:
        heroSettings,
      section:
        sectionSettings,
      card:
        cardSettings,
      footer:
        footerSettings,
      styles,
      responsive: {
        desktop: {
          ...styles,
        },
        tablet: {},
        mobile: {},
      },
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
    return componentList.map(
      (component) => {
        if (
          component.id ===
          id
        ) {
          return updater(
            component
          );
        }
        if (
          component.children?.length
        ) {
          return {
            ...component,
            children:
              updateComponentById(
                component.children,
                id,
                updater
              ),
          };
        }
        return component;
      }
    );
  };
  const removeComponentById = (
    componentList: BuilderComponent[],
    id: string
  ): {
    components: BuilderComponent[];
    removed?: BuilderComponent;
  } => {
    for (
      let index = 0;
      index <
      componentList.length;
      index++
    ) {
      const component =
        componentList[index];
      if (
        component.id ===
        id
      ) {
        const updated = [
          ...componentList,
        ];
        const [removed] =
          updated.splice(
            index,
            1
          );
        return {
          components:
            updated,
          removed,
        };
      }
      if (
        component.children?.length
      ) {
        const result =
          removeComponentById(
            component.children,
            id
          );
        if (
          result.removed
        ) {
          const updated = [
            ...componentList,
          ];
          updated[index] = {
            ...component,
            children:
              result.components,
          };
          return {
            components:
              updated,
            removed:
              result.removed,
          };
        }
      }
    }
    return {
      components:
        componentList,
    };
  };
  const addChildToParent = (
    componentList: BuilderComponent[],
    parentId: string,
    child: BuilderComponent
  ): BuilderComponent[] => {
    return updateComponentById(
      componentList,
      parentId,
      (component) => ({
        ...component,
        children: [
          ...(component.children ??
            []),
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
    const targetIndex =
      componentList.findIndex(
        (component) =>
          component.id ===
          targetId
      );
    if (
      targetIndex !==
      -1
    ) {
      const updated = [
        ...componentList,
      ];
      updated.splice(
        targetIndex,
        0,
        componentToInsert
      );
      return updated;
    }
    return componentList.map(
      (component) => {
        if (
          component.children?.length
        ) {
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
              children:
                updatedChildren,
            };
          }
        }
        return component;
      }
    );
  };
  const addComponent = (
    type: ComponentType
  ) => {
    const newComponent =
      createComponent(type);
    if (
      selectedComponent &&
      isLayoutParent(
        selectedComponent.type
      )
    ) {
      const updated =
        addChildToParent(
          components,
          selectedComponent.id,
          newComponent
        );
      setComponents(
        updated
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
    if (
      activeId ===
      overId
    ) {
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
      activeParent?.id ??
      null;
    const overParentId =
      overParent?.id ??
      null;
    if (
      activeParentId ===
      overParentId
    ) {
      const currentList =
        activeParent
          ? activeParent.children ??
            []
          : components;
      const oldIndex =
        currentList.findIndex(
          (component) =>
            component.id ===
            activeId
        );
      const newIndex =
        currentList.findIndex(
          (component) =>
            component.id ===
            overId
        );
      if (
        oldIndex ===
          -1 ||
        newIndex ===
          -1
      ) {
        return;
      }
      const updatedList =
        [...currentList];
      const [
        movedComponent,
      ] =
        updatedList.splice(
          oldIndex,
          1
        );
      updatedList.splice(
        newIndex,
        0,
        movedComponent
      );
      if (
        activeParent
      ) {
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
      setSelectedId(
        activeId
      );
      return;
    }
    const removal =
      removeComponentById(
        components,
        activeId
      );
    if (
      !removal.removed
    ) {
      return;
    }
    const movedComponent =
      removal.removed;
    let updatedComponents =
      removal.components;
    const target =
      findComponentById(
        updatedComponents,
        overId
      );
    if (!target) {
      return;
    }
    if (
      isLayoutParent(
        target.type
      )
    ) {
      updatedComponents =
        addChildToParent(
          updatedComponents,
          target.id,
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
    updatedComponents =
      insertBeforeComponent(
        updatedComponents,
        target.id,
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
    const {
      active,
      over,
    } = event;
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
        selectedId ??
          "",
        (component) => ({
          ...component,
          text:
            value,
          hero:
            component.type ===
            "Hero"
              ? {
                  ...component.hero,
                  title:
                    value,
                }
              : component.hero,
          section:
            component.type ===
            "Section"
              ? {
                  ...component.section,
                  title:
                    value,
                }
              : component.section,
          card:
            component.type ===
            "Card"
              ? {
                  ...component.card,
                  title:
                    value,
                }
              : component.card,
          navbar:
            component.type ===
            "Navbar"
              ? {
                  ...component.navbar,
                  logoText:
                    value,
                  links:
                    component
                      .navbar
                      ?.links ??
                    createDefaultNavbarLinks(),
                }
              : component.navbar,
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
        selectedId ??
          "",
        (component) => {
          if (
            device ===
            "desktop"
          ) {
            return {
              ...component,
              styles: {
                ...component.styles,
                ...updates,
              },
              navbar:
                component.type ===
                "Navbar"
                  ? {
                      ...component.navbar,
                      height:
                        updates.height ??
                        component.navbar
                          ?.height,
                      padding:
                        updates.paddingLeft ??
                        component.navbar
                          ?.padding,
                      navGap:
                        updates.gap ??
                        component.navbar
                          ?.navGap,
                      borderRadius:
                        updates.borderRadius ??
                        component.navbar
                          ?.borderRadius,
                      borderColor:
                        updates.borderColor ??
                        component.navbar
                          ?.borderColor,
                      borderWidth:
                        updates.borderWidth ??
                        component.navbar
                          ?.borderWidth,
                      links:
                        component
                          .navbar
                          ?.links ??
                        createDefaultNavbarLinks(),
                    }
                  : component.navbar,
            };
          }
          return {
            ...component,
            responsive: {
              ...component.responsive,
              [device]: {
                ...component
                  .responsive?.[
                    device
                  ],
                ...updates,
              },
            },
          };
        }
      )
    );
  };
  const updateNavbar = (
    updates: Partial<NavbarSettings>
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId ??
          "",
        (component) => ({
          ...component,
          navbar: {
            ...component.navbar,
            links:
              component
                .navbar
                ?.links ??
              createDefaultNavbarLinks(),
            ...updates,
          },
        })
      )
    );
  };
  const updateHero = (
    updates: Partial<HeroSettings>
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId ??
          "",
        (component) => ({
          ...component,
          hero: {
            ...createDefaultHero(),
            ...component.hero,
            ...updates,
          },
          heroTitle:
            updates.title ??
            component.heroTitle ??
            component.hero?.title ??
            "Hero Title",
          heroSubtitle:
            updates.subtitle ??
            component.heroSubtitle ??
            component.hero?.subtitle ??
            "Hero Subtitle goes here",
          heroButtonText:
            updates.buttonText ??
            component.heroButtonText ??
            component.hero?.buttonText ??
            "Get Started",
        })
      )
    );
  };
  const updateSection = (
    updates: Partial<SectionSettings>
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId ??
          "",
        (component) => ({
          ...component,
          section: {
            ...createDefaultSection(),
            ...component.section,
            ...updates,
          },
          text:
            updates.title ??
            component.text ??
            component.section?.title ??
            "Section Title",
        })
      )
    );
  };
  const updateCard = (
    updates: Partial<CardSettings>
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId ??
          "",
        (component) => ({
          ...component,
          card: {
            ...createDefaultCard(),
            ...component.card,
            ...updates,
          },
          text:
            updates.title ??
            component.text ??
            component.card?.title ??
            "Card Title",
        })
      )
    );
  };
  const updateFooter = (
    updates: Partial<FooterSettings>
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId ??
          "",
        (component) => ({
          ...component,
          footer: {
            ...createDefaultFooter(),
            ...component.footer,
            ...updates,
          },
          text:
            updates.brandName ??
            component.text ??
            component.footer?.brandName ??
            "Your Brand",
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
        selectedId ??
          "",
        (component) => {
          if (
            device ===
            "desktop"
          ) {
            return {
              ...component,
              fontSize:
                value,
              styles: {
                ...component.styles,
                fontSize:
                  value,
              },
            };
          }
          return {
            ...component,
            responsive: {
              ...component.responsive,
              [device]: {
                ...component
                  .responsive?.[
                    device
                  ],
                fontSize:
                  value,
              },
            },
          };
        }
      )
    );
  };
  const updateColor = (
    value: string
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId ??
          "",
        (component) => {
          if (
            device ===
            "desktop"
          ) {
            return {
              ...component,
              color:
                value,
              styles: {
                ...component.styles,
                color:
                  value,
              },
            };
          }
          return {
            ...component,
            responsive: {
              ...component.responsive,
              [device]: {
                ...component
                  .responsive?.[
                    device
                  ],
                color:
                  value,
              },
            },
          };
        }
      )
    );
  };
  const updateBackgroundColor = (
    value: string
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId ??
          "",
        (component) => {
          if (
            device ===
            "desktop"
          ) {
            return {
              ...component,
              backgroundColor:
                value,
              styles: {
                ...component.styles,
                backgroundColor:
                  value,
              },
            };
          }
          return {
            ...component,
            responsive: {
              ...component.responsive,
              [device]: {
                ...component
                  .responsive?.[
                    device
                  ],
                backgroundColor:
                  value,
              },
            },
          };
        }
      )
    );
  };
  const updateMinHeight = (
    value: number
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId ??
          "",
        (component) => {
          if (
            device ===
            "desktop"
          ) {
            return {
              ...component,
              minHeight:
                value,
              styles: {
                ...component.styles,
                height:
                  value,
                heightUnit:
                  "px",
              },
            };
          }
          return {
            ...component,
            responsive: {
              ...component.responsive,
              [device]: {
                ...component
                  .responsive?.[
                    device
                  ],
                height:
                  value,
                heightUnit:
                  "px",
              },
            },
          };
        }
      )
    );
  };
  const updateImage = (
    value: string
  ) => {
    setComponents(
      updateComponentById(
        components,
        selectedId ??
          "",
        (component) => ({
          ...component,
          imageUrl:
            value,
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
        selectedId ??
          "",
        (component) => ({
          ...component,
          imageWidth:
            value,
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
        selectedId ??
          "",
        (component) => ({
          ...component,
          imageHeight:
            value,
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
        selectedId ??
          "",
        (component) => ({
          ...component,
          imageBorderRadius:
            value,
        })
      )
    );
  };
  const deleteComponent = () => {
    if (
      !selectedId
    ) {
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
    setSelectedId(
      null
    );
  };
  const moveComponentUp = () => {
    if (
      !selectedId
    ) {
      return;
    }
    const parent =
      findParentById(
        components,
        selectedId
      );
    const list =
      parent
        ? parent.children ??
          []
        : components;
    const index =
      list.findIndex(
        (component) =>
          component.id ===
          selectedId
      );
    if (
      index <= 0
    ) {
      return;
    }
    const updatedList =
      [...list];
    [
      updatedList[
        index - 1
      ],
      updatedList[
        index
      ],
    ] = [
      updatedList[
        index
      ],
      updatedList[
        index - 1
      ],
    ];
    if (
      parent
    ) {
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
    setSelectedId(
      selectedId
    );
  };
  const moveComponentDown = () => {
    if (
      !selectedId
    ) {
      return;
    }
    const parent =
      findParentById(
        components,
        selectedId
      );
    const list =
      parent
        ? parent.children ??
          []
        : components;
    const index =
      list.findIndex(
        (component) =>
          component.id ===
          selectedId
      );
    if (
      index === -1 ||
      index ===
        list.length - 1
    ) {
      return;
    }
    const updatedList =
      [...list];
    [
      updatedList[
        index + 1
      ],
      updatedList[
        index
      ],
    ] = [
      updatedList[
        index
      ],
      updatedList[
        index + 1
      ],
    ];
    if (
      parent
    ) {
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
    setSelectedId(
      selectedId
    );
  };
  const cloneComponentTree = (
    component: BuilderComponent
  ): BuilderComponent => {
    return {
      ...component,
      id:
        crypto.randomUUID(),
      navbar:
        component.navbar
          ? {
              ...component.navbar,
              links:
                component
                  .navbar
                  .links
                  ? component.navbar.links.map(
                      (link) => ({
                        ...link,
                        id:
                          crypto.randomUUID(),
                      })
                    )
                  : createDefaultNavbarLinks(),
            }
          : undefined,
      hero:
        component.hero
          ? {
              ...component.hero,
            }
          : undefined,
      section:
        component.section
          ? {
              ...component.section,
            }
          : undefined,
      card:
        component.card
          ? {
              ...component.card,
            }
          : undefined,
      footer:
        component.footer
          ? {
              ...component.footer,
            }
          : undefined,
      styles:
        component.styles
          ? {
              ...component.styles,
            }
          : undefined,
      responsive:
        component.responsive
          ? {
              desktop:
                component
                  .responsive
                  .desktop
                  ? {
                      ...component
                        .responsive
                        .desktop,
                    }
                  : undefined,
              tablet:
                component
                  .responsive
                  .tablet
                  ? {
                      ...component
                        .responsive
                        .tablet,
                    }
                  : undefined,
              mobile:
                component
                  .responsive
                  .mobile
                  ? {
                      ...component
                        .responsive
                        .mobile,
                    }
                  : undefined,
            }
          : undefined,
      children:
        component.children
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
    if (
      !selectedId
    ) {
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
    const duplicate =
      cloneComponentTree(
        component
      );
    const parent =
      findParentById(
        components,
        selectedId
      );
    if (
      parent
    ) {
      const children =
        parent.children ??
        [];
      const index =
        children.findIndex(
          (child) =>
            child.id ===
            selectedId
        );
      if (
        index ===
        -1
      ) {
        return;
      }
      const updatedChildren =
        [...children];
      updatedChildren.splice(
        index + 1,
        0,
        duplicate
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
      if (
        index ===
        -1
      ) {
        return;
      }
      const updated =
        [...components];
      updated.splice(
        index + 1,
        0,
        duplicate
      );
      setComponents(
        updated
      );
    }
    setSelectedId(
      duplicate.id
    );
  };
  const updateHeroTitle = (
    value: string
  ) => {
    updateHero({
      title:
        value,
    });
  };
  const updateHeroSubtitle = (
    value: string
  ) => {
    updateHero({
      subtitle:
        value,
    });
  };
  const updateHeroButtonText = (
    value: string
  ) => {
    updateHero({
      buttonText:
        value,
    });
  };
  const downloadFile = (
    filename: string,
    content: string
  ) => {
    const blob =
      new Blob(
        [content],
        {
          type:
            "text/plain",
        }
      );
    const url =
      URL.createObjectURL(
        blob
      );
    const link =
      document.createElement(
        "a"
      );
    link.href =
      url;
    link.download =
      filename;
    link.click();
    URL.revokeObjectURL(
      url
    );
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
    if (
      !savedProject
    ) {
      alert(
        "Geen opgeslagen project gevonden"
      );
      return;
    }
    try {
      const parsedProject:
        BuilderComponent[] =
        JSON.parse(
          savedProject
        );
      const migrateComponent = (
        component: BuilderComponent
      ): BuilderComponent => {
        const migratedChildren =
          component.children?.map(
            migrateComponent
          ) ?? [];
        let migrated =
          {
            ...component,
            children:
              migratedChildren,
          };
        if (
          component.type ===
          "Navbar"
        ) {
          migrated = {
            ...migrated,
            navbar: {
              ...component.navbar,
              logoText:
                component.navbar
                  ?.logoText ??
                component.text ??
                "Logo",
              logoSize:
                component.navbar
                  ?.logoSize ??
                20,
              navGap:
                component.navbar
                  ?.navGap ??
                component.styles
                  ?.gap ??
                24,
              height:
                component.navbar
                  ?.height ??
                component.styles
                  ?.height ??
                72,
              padding:
                component.navbar
                  ?.padding ??
                component.styles
                  ?.paddingLeft ??
                20,
              borderRadius:
                component.navbar
                  ?.borderRadius ??
                component.styles
                  ?.borderRadius ??
                10,
              borderColor:
                component.navbar
                  ?.borderColor ??
                component.styles
                  ?.borderColor ??
                "#e4e7ef",
              borderWidth:
                component.navbar
                  ?.borderWidth ??
                component.styles
                  ?.borderWidth ??
                1,
              boxShadow:
                component.navbar
                  ?.boxShadow ??
                "0 4px 16px rgba(15, 23, 42, 0.06)",
              sticky:
                component.navbar
                  ?.sticky ??
                false,
              links:
                component.navbar
                  ?.links ??
                createDefaultNavbarLinks(),
            },
          };
        }
        if (
          component.type ===
          "Hero"
        ) {
          const defaults =
            createDefaultHero();
          migrated = {
            ...migrated,
            hero: {
              ...defaults,
              ...component.hero,
              title:
                component.hero
                  ?.title ??
                component.heroTitle ??
                defaults.title,
              subtitle:
                component.hero
                  ?.subtitle ??
                component.heroSubtitle ??
                defaults.subtitle,
              buttonText:
                component.hero
                  ?.buttonText ??
                component.heroButtonText ??
                defaults.buttonText,
            },
          };
        }
        if (
          component.type ===
          "Section"
        ) {
          const defaults =
            createDefaultSection();
          migrated = {
            ...migrated,
            section: {
              ...defaults,
              ...component.section,
              title:
                component.section
                  ?.title ??
                component.text ??
                defaults.title,
            },
          };
        }
        if (
          component.type ===
          "Card"
        ) {
          const defaults =
            createDefaultCard();
          migrated = {
            ...migrated,
            card: {
              ...defaults,
              ...component.card,
              title:
                component.card
                  ?.title ??
                component.text ??
                defaults.title,
            },
          };
        }
        if (
          component.type ===
          "Footer"
        ) {
          const defaults =
            createDefaultFooter();
          migrated = {
            ...migrated,
            footer: {
              ...defaults,
              ...component.footer,
              brandName:
                component.footer
                  ?.brandName ??
                component.text ??
                defaults.brandName,
            },
          };
        }
        return migrated;
      };
      const migratedProject =
        parsedProject.map(
          migrateComponent
        );
      setComponents(
        migratedProject
      );
      setSelectedId(
        null
      );
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
        components={
          components
        }
        selectedId={
          selectedId
        }
        addComponent={
          addComponent
        }
        setSelectedId={
          setSelectedId
        }
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
          device={
            device
          }
          setDevice={
            setDevice
          }
        />
      </div>
      <Properties
        selectedComponent={
          selectedComponent
        }
        device={
          device
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
        updateHero={
          updateHero
        }
        updateSection={
          updateSection
        }
        updateCard={
          updateCard
        }
        updateFooter={
          updateFooter
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
        updateNavbar={
          updateNavbar
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