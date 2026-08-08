import { useState } from "react";
import "./App.css";

type ComponentType =
  | "Navbar"
  | "Hero"
  | "Section"
  | "Card"
  | "Footer";

function App() {
  const [components, setComponents] = useState<ComponentType[]>([]);

  const addComponent = (type: ComponentType) => {
    setComponents([...components, type]);
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

          {components.map((component, index) => (
            <div key={index}>
              {component === "Navbar" && (
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

              {component === "Hero" && (
                <div className="hero-preview">
                  <h1>Hero Title</h1>
                  <p>Hero Subtitle goes here</p>
                  <button>Get Started</button>
                </div>
              )}

              {component === "Section" && (
                <div className="section-preview">
                  <h2>Section Title</h2>
                  <p>Section content...</p>
                </div>
              )}

              {component === "Card" && (
                <div className="card-preview">
                  <h3>Card Title</h3>
                  <p>Card description</p>
                </div>
              )}

              {component === "Footer" && (
                <div className="footer-preview">
                  Footer Content
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <aside className="properties">
        <h2>Properties</h2>
        <p>Selecteer straks een component.</p>
      </aside>
    </div>
  );
}

export default App;