import { useState } from "react";
import "./App.css";

type ComponentType =
  | "Navbar"
  | "Hero"
  | "Section"
  | "Card"
  | "Footer"
  | "Heading"
  | "Paragraph"
  | "Button"
  | "Container";

interface BuilderComponent {
  id: string;
  type: ComponentType;
  text?: string;
}

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
    };

    setComponents([...components, newComponent]);
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
  return (
    <div className="editor">
      <aside className="sidebar">
        <h2>Components</h2>

        <button onClick={() => addComponent("Navbar")}>Navbar</button>
        <button onClick={() => addComponent("Hero")}>Hero</button>
        <button onClick={() => addComponent("Section")}>Section</button>
        <button onClick={() => addComponent("Card")}>Card</button>
        <button onClick={() => addComponent("Footer")}>Footer</button>

        <hr />

        <button onClick={() => addComponent("Heading")}>Heading</button>
        <button onClick={() => addComponent("Paragraph")}>Paragraph</button>
        <button onClick={() => addComponent("Button")}>Button</button>
        <button onClick={() => addComponent("Container")}>Container</button>
      </aside>

      <main className="canvas">
        <div className="canvas-header">
          <button>Desktop</button>
          <button>Tablet</button>
          <button>Mobile</button>
        </div>

        <div className="desktop-preview">
          {components.length === 0 && (
            <div className="empty-state">
              Voeg componenten toe vanuit de sidebar
            </div>
          )}

          {components.map((component) => (
            <div
              key={component.id}
              className={
                selectedId === component.id
                  ? "builder-component selected"
                  : "builder-component"
              }
              onClick={() => setSelectedId(component.id)}
            >
              {component.type === "Navbar" && (
                <div className="navbar-preview">
                  <div className="logo">Logo</div>

                  <div className="nav-links">
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>
                </div>
              )}

              {component.type === "Hero" && (
                <div className="hero-preview">
                  <h1>Hero Title</h1>
                  <p>Hero Subtitle goes here</p>
                  <button>Get Started</button>
                </div>
              )}

              {component.type === "Section" && (
                <div className="section-preview">
                  <h2>Section Title</h2>
                  <p>Section content...</p>
                </div>
              )}

              {component.type === "Card" && (
                <div className="card-preview">
                  <h3>Card Title</h3>

                  <p>
                    This is a card description that can later be edited
                    from the properties panel.
                  </p>

                  <button className="button-preview">
                    Learn More
                  </button>
                </div>
              )}

              {component.type === "Footer" && (
                <div className="footer-preview">
                  Footer Content
                </div>
              )}

              {component.type === "Heading" && (
                <h1 className="heading-preview">
                  {component.text}
                </h1>
              )}

              {component.type === "Paragraph" && (
                <p className="paragraph-preview">
                  {component.text}
                </p>
              )}

              {component.type === "Button" && (
                <button className="button-preview">
                  {component.text}
                </button>
              )}

              {component.type === "Container" && (
                <div className="container-preview">
                  Container (min-height: 300px)
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <aside className="properties">
        <h2>Properties</h2>

        {selectedComponent ? (
          <>
            <p>Type</p>

            <div
              style={{
                background: "#374151",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              {selectedComponent.type}
            </div>

            {(selectedComponent.type === "Heading" ||
              selectedComponent.type === "Paragraph" ||
              selectedComponent.type === "Button") && (
                <>
                  <p>Text</p>

                  <input
                    type="text"
                    value={selectedComponent.text || ""}
                    onChange={(e) => updateText(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginTop: "10px",
                      borderRadius: "8px",
                      border: "none",
                    }}
                  />
                </>
              )}
          </>
        ) : (
          <p>Selecteer een component</p>
        )}
      </aside>
    </div>
  );
}

export default App;