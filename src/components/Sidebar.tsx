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
  onDragEnd: (activeId: string, overId: string) => void;
}

interface LayerItemProps {
  component: BuilderComponent;
  selectedId: string | null;
  setSelectedId: (id: string) => void;
  depth?: number;
}

function LayerItem({
  component,
  selectedId,
  setSelectedId,
  depth = 0,
}: LayerItemProps) {
  const hasChildren =
    !!component.children?.length;

  const [expanded, setExpanded] =
    useState(true);

  const handleSelect = () => {
    setSelectedId(component.id);
  };

  const handleToggle = (
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <div>
      <div
        draggable
        className={
          selectedId === component.id
            ? "layer-row selected-layer"
            : "layer-row"
        }
        style={{
          paddingLeft: `${8 + depth * 16}px`,
        }}
        onDragStart={(event) => {
          event.dataTransfer.setData(
            "componentId",
            component.id
          );
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDrop={(event) => {
          event.preventDefault();

          const activeId =
            event.dataTransfer.getData(
              "componentId"
            );

          const overId = component.id;

          if (!activeId) return;
          if (activeId === overId) return;

          window.dispatchEvent(
            new CustomEvent(
              "builder-layer-drop",
              {
                detail: {
                  activeId,
                  overId,
                },
              }
            )
          );
        }}
      >
        {hasChildren ? (
          <button
            className="layer-toggle"
            onClick={handleToggle}
          >
            {expanded ? "▾" : "▸"}
          </button>
        ) : (
          <span className="layer-spacer" />
        )}

        <button
          className="layer-item"
          onClick={handleSelect}
        >
          <span className="layer-icon">
            {component.type === "Container"
              ? "▣"
              : component.type ===
                "Heading"
              ? "H"
              : component.type ===
                "Paragraph"
              ? "P"
              : component.type ===
                "Button"
              ? "B"
              : component.type === "Image"
              ? "▧"
              : "□"}
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
                  key={child.id}
                  component={child}
                  selectedId={selectedId}
                  setSelectedId={
                    setSelectedId
                  }
                  depth={depth + 1}
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
}: SidebarProps) {
  useState(() => {
    const handleLayerDrop = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent<{
          activeId: string;
          overId: string;
        }>;

      window.dispatchEvent(
        new CustomEvent(
          "builder-layer-reorder",
          {
            detail: customEvent.detail,
          }
        )
      );
    };

    return () => {
      window.removeEventListener(
        "builder-layer-drop",
        handleLayerDrop
      );
    };
  });

  return (
    <aside className="sidebar">
      <h2>Components</h2>

      <div className="component-group">
        <button
          onClick={() =>
            addComponent("Navbar")
          }
        >
          Navbar
        </button>

        <button
          onClick={() =>
            addComponent("Hero")
          }
        >
          Hero
        </button>

        <button
          onClick={() =>
            addComponent("Section")
          }
        >
          Section
        </button>

        <button
          onClick={() =>
            addComponent("Card")
          }
        >
          Card
        </button>

        <button
          onClick={() =>
            addComponent("Footer")
          }
        >
          Footer
        </button>
      </div>

      <hr />

      <div className="component-group">
        <button
          onClick={() =>
            addComponent("Heading")
          }
        >
          Heading
        </button>

        <button
          onClick={() =>
            addComponent("Paragraph")
          }
        >
          Paragraph
        </button>

        <button
          onClick={() =>
            addComponent("Button")
          }
        >
          Button
        </button>

        <button
          onClick={() =>
            addComponent("Container")
          }
        >
          Container
        </button>

        <button
          onClick={() =>
            addComponent("Image")
          }
        >
          Image
        </button>
      </div>

      <hr />

      <h2>Layers</h2>

      <div className="layers">
        {components.length === 0 ? (
          <p
            style={{
              color: "#9ca3af",
              fontSize: "13px",
            }}
          >
            No components
          </p>
        ) : (
          components.map(
            (component) => (
              <LayerItem
                key={component.id}
                component={component}
                selectedId={selectedId}
                setSelectedId={
                  setSelectedId
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