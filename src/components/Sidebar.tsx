import type { ComponentType, BuilderComponent } from "../types/builder";

interface SidebarProps {
  components: BuilderComponent[];
  selectedId: string | null;
  addComponent: (type: ComponentType) => void;
  setSelectedId: (id: string) => void;
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
  return (
    <div>
      <button
        className={
          selectedId === component.id
            ? "layer-item selected-layer"
            : "layer-item"
        }
        style={{
          paddingLeft: `${12 + depth * 16}px`,
        }}
        onClick={() =>
          setSelectedId(component.id)
        }
      >
        {component.children &&
        component.children.length > 0
          ? "▾"
          : "•"}{" "}
        {component.type}
      </button>

      {component.children &&
        component.children.length > 0 && (
          <div>
            {component.children.map(
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
  return (
    <aside className="sidebar">
      <h2>Components</h2>

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

      <hr />

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
          components.map((component) => (
            <LayerItem
              key={component.id}
              component={component}
              selectedId={selectedId}
              setSelectedId={
                setSelectedId
              }
            />
          ))
        )}
      </div>
    </aside>
  );
}

export default Sidebar;