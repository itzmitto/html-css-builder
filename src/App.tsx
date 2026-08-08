import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import Properties from "./components/Properties";

import type {
  BuilderComponent,
  ComponentType,
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
      minHeight: 300,
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
      <Sidebar addComponent={addComponent} />

      <Canvas
        components={components}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />

      <Properties
        selectedComponent={selectedComponent}
        updateText={updateText}
      />
    </div>
  );
}

export default App;