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
            <div key={index} className="canvas-block">
              {component}
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