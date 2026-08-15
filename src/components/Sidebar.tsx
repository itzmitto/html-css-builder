import { useState } from "react";
import type {
  ComponentType,
  BuilderComponent,
} from "../types/builder";

interface SidebarProps {
  components: BuilderComponent[];
  selectedId: string | null;
  addComponent: (type: ComponentType) => void;
  setSelectedId: (id: string) => void;
  onDragEnd: (
    activeId: string,
    overId: string
  ) => void;
}

interface LayerItemProps {
  component: BuilderComponent;
  selectedId: string | null;
  setSelectedId: (id: string) => void;
  onDragEnd: (
    activeId: string,
    overId: string
  ) => void;
  depth?: number;
}

function getLayerIcon(
  type: ComponentType
) {
  switch (type) {
    case "Navbar":
      return "N";
    case "Hero":
      return "◆";
    case "Section":
      return "S";
    case "Card":
      return "C";
    case "Footer":
      return "F";
    case "Heading":
      return "H";
    case "Paragraph":
      return "P";
    case "Button":
      return "B";
    case "Image":
      return "▧";
    case "Container":
      return "▣";
    case "Row":
      return "↔";
    case "Stack":
      return "↕";
    default:
      return "□";
  }
}

function getLayerLabel(
  component: BuilderComponent
) {
  const childCount =
    component.children?.length ?? 0;

  if (
    component.type ===
      "Container" ||
    component.type ===
      "Row" ||
    component.type ===
      "Stack"
  ) {
    return childCount > 0
      ? `${component.type} (${childCount})`
      : component.type;
  }

  if (
    component.type ===
    "Navbar"
  ) {
    return (
      component.navbar
        ?.logoText ??
      component.text ??
      "Navbar"
    );
  }

  if (
    component.type ===
    "Hero"
  ) {
    return (
      component.hero
        ?.title ??
      "Hero"
    );
  }

  if (
    component.type ===
    "Section"
  ) {
    return (
      component.section
        ?.title ??
      component.text ??
      "Section"
    );
  }

  if (
    component.type ===
    "Card"
  ) {
    return (
      component.card
        ?.title ??
      component.text ??
      "Card"
    );
  }

  if (
    component.type ===
    "Footer"
  ) {
    return (
      component.footer
        ?.brandName ??
      component.text ??
      "Footer"
    );
  }

  if (
    component.type ===
      "Heading" ||
    component.type ===
      "Paragraph" ||
    component.type ===
      "Button"
  ) {
    return (
      component.text ??
      component.type
    );
  }

  return component.type;
}

function LayerItem({
  component,
  selectedId,
  setSelectedId,
  onDragEnd,
  depth = 0,
}: LayerItemProps) {
  const hasChildren =
    Boolean(
      component.children?.length
    );

  const [
    expanded,
    setExpanded,
  ] = useState(true);

  const handleSelect = () => {
    setSelectedId(
      component.id
    );
  };

  const handleToggle = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

    setExpanded(
      (current) => !current
    );
  };

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();

    event.dataTransfer.effectAllowed =
      "move";

    event.dataTransfer.setData(
      "componentId",
      component.id
    );

    event.currentTarget.classList.add(
      "layer-dragging"
    );
  };

  const handleDragEnd = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.currentTarget.classList.remove(
      "layer-dragging"
    );
  };

  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    event.dataTransfer.dropEffect =
      "move";
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const activeId =
      event.dataTransfer.getData(
        "componentId"
      );

    if (!activeId) {
      return;
    }

    if (
      activeId ===
      component.id
    ) {
      return;
    }

    onDragEnd(
      activeId,
      component.id
    );
  };

  return (
    <div>
      <div
        draggable
        className={
          selectedId ===
          component.id
            ? "layer-row selected-layer"
            : "layer-row"
        }
        style={{
          paddingLeft: `${
            8 + depth * 16
          }px`,
        }}
        onDragStart={
          handleDragStart
        }
        onDragEnd={
          handleDragEnd
        }
        onDragOver={
          handleDragOver
        }
        onDrop={
          handleDrop
        }
      >
        {hasChildren ? (
          <button
            type="button"
            className="layer-toggle"
            onClick={
              handleToggle
            }
            aria-label={
              expanded
                ? "Collapse layer"
                : "Expand layer"
            }
          >
            {expanded
              ? "▾"
              : "▸"}
          </button>
        ) : (
          <span className="layer-spacer" />
        )}

        <button
          type="button"
          className="layer-item"
          onClick={
            handleSelect
          }
          title={
            getLayerLabel(
              component
            )
          }
        >
          <span className="layer-icon">
            {getLayerIcon(
              component.type
            )}
          </span>

          <span className="layer-label">
            {getLayerLabel(
              component
            )}
          </span>
        </button>
      </div>

      {hasChildren &&
        expanded && (
          <div>
            {component.children!.map(
              (child) => (
                <LayerItem
                  key={
                    child.id
                  }
                  component={
                    child
                  }
                  selectedId={
                    selectedId
                  }
                  setSelectedId={
                    setSelectedId
                  }
                  onDragEnd={
                    onDragEnd
                  }
                  depth={
                    depth + 1
                  }
                />
              )
            )}
          </div>
        )}
    </div>
  );
}

function ComponentButton({
  label,
  type,
  addComponent,
}: {
  label: string;
  type: ComponentType;
  addComponent: (
    type: ComponentType
  ) => void;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        addComponent(type)
      }
    >
      {label}
    </button>
  );
}

function Sidebar({
  components,
  selectedId,
  addComponent,
  setSelectedId,
  onDragEnd,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <h2>
        Components
      </h2>

      <div className="component-group">
        <ComponentButton
          label="Navbar"
          type="Navbar"
          addComponent={
            addComponent
          }
        />

        <ComponentButton
          label="Hero"
          type="Hero"
          addComponent={
            addComponent
          }
        />

        <ComponentButton
          label="Section"
          type="Section"
          addComponent={
            addComponent
          }
        />

        <ComponentButton
          label="Card"
          type="Card"
          addComponent={
            addComponent
          }
        />

        <ComponentButton
          label="Footer"
          type="Footer"
          addComponent={
            addComponent
          }
        />
      </div>

      <hr />

      <div className="component-group">
        <ComponentButton
          label="Heading"
          type="Heading"
          addComponent={
            addComponent
          }
        />

        <ComponentButton
          label="Paragraph"
          type="Paragraph"
          addComponent={
            addComponent
          }
        />

        <ComponentButton
          label="Button"
          type="Button"
          addComponent={
            addComponent
          }
        />

        <ComponentButton
          label="Image"
          type="Image"
          addComponent={
            addComponent
          }
        />
      </div>

      <hr />

      <h2>
        Layout
      </h2>

      <div className="component-group">
        <ComponentButton
          label="Container"
          type="Container"
          addComponent={
            addComponent
          }
        />

        <ComponentButton
          label="Row"
          type="Row"
          addComponent={
            addComponent
          }
        />

        <ComponentButton
          label="Stack"
          type="Stack"
          addComponent={
            addComponent
          }
        />
      </div>

      <hr />

      <h2>
        Layers
      </h2>

      <div className="layers">
        {components.length ===
        0 ? (
          <p
            style={{
              color:
                "#9ca3af",
              fontSize:
                "13px",
              padding:
                "8px",
            }}
          >
            No components
          </p>
        ) : (
          components.map(
            (component) => (
              <LayerItem
                key={
                  component.id
                }
                component={
                  component
                }
                selectedId={
                  selectedId
                }
                setSelectedId={
                  setSelectedId
                }
                onDragEnd={
                  onDragEnd
                }
              />
            )
          )
        )}
      </div>
    </aside>
  );
}

export default Sidebar;