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
}

function App() {
  const [components, setComponents] = useState<BuilderComponent[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const addComponent = (type: ComponentType) => {
    const newComponent: BuilderComponent = {
      id: crypto.randomUUID(),
      type,
    };

    setComponents([...components, newComponent]);
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
                  <p>Card description</p>
                </div>
              )}

              {component.type === "Footer" && (
                <div className="footer-preview">
                  Footer Content
                </div>
              )}

              {component.type === "Heading" && (
                <h1 className="heading-preview">
                  This is a Heading
                </h1>
              )}

              {component.type === "Paragraph" && (
                <p className="paragraph-preview">
                  This is a paragraph. Later kun je deze tekst aanpassen via
                  het properties panel.
                </p>
              )}

              {component.type === "Button" && (
                <button className="button-preview">
                  Click Me
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

        <p>
          Hier komen straks:
        </p>

        <ul>
          <li>Text</li>
          <li>Font Size</li>
          <li>Color</li>
          <li>Padding</li>
          <li>Margin</li>
          <li>Min Height</li>
          <li>Alignment</li>
        </ul>
      </aside>
    </div>
  );
}

export default App;