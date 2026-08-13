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
    case "Container":
      return "▣";
    case "Row":
      return "↔";
    case "Stack":
      return "↕";
    case "Heading":
      return "H";
    case "Paragraph":
      return "P";
    case "Button":
      return "B";
    case "Image":
      return "▧";
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
    default:
      return "□";
  }
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
    event.dataTransfer.effectAllowed =
      "move";

    event.dataTransfer.setData(
      "componentId",
      component.id
    );
  };

  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

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
      activeId === component.id
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
        onDragOver={
          handleDragOver
        }
        onDrop={handleDrop}
      >
        {hasChildren ? (
          <button
            type="button"
            className="layer-toggle"
            onClick={
              handleToggle
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
        >
          <span className="layer-icon">
            {getLayerIcon(
              component.type
            )}
          </span>

          <span>
            {component.type}
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
        <button
          type="button"
          onClick={() =>
            addComponent(
              "Navbar"
            )
          }
        >
          Navbar
        </button>

        <button
          type="button"
          onClick={() =>
            addComponent(
              "Hero"
            )
          }
        >
          Hero
        </button>

        <button
          type="button"
          onClick={() =>
            addComponent(
              "Section"
            )
          }
        >
          Section
        </button>

        <button
          type="button"
          onClick={() =>
            addComponent(
              "Card"
            )
          }
        >
          Card
        </button>

        <button
          type="button"
          onClick={() =>
            addComponent(
              "Footer"
            )
          }
        >
          Footer
        </button>
      </div>

      <hr />

      <div className="component-group">
        <button
          type="button"
          onClick={() =>
            addComponent(
              "Heading"
            )
          }
        >
          Heading
        </button>

        <button
          type="button"
          onClick={() =>
            addComponent(
              "Paragraph"
            )
          }
        >
          Paragraph
        </button>

        <button
          type="button"
          onClick={() =>
            addComponent(
              "Button"
            )
          }
        >
          Button
        </button>

        <button
          type="button"
          onClick={() =>
            addComponent(
              "Image"
            )
          }
        >
          Image
        </button>
      </div>

      <hr />

      <h2>
        Layout
      </h2>

      <div className="component-group">
        <button
          type="button"
          onClick={() =>
            addComponent(
              "Container"
            )
          }
        >
          Container
        </button>

        <button
          type="button"
          onClick={() =>
            addComponent(
              "Row"
            )
          }
        >
          Row
        </button>

        <button
          type="button"
          onClick={() =>
            addComponent(
              "Stack"
            )
          }
        >
          Stack
        </button>
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