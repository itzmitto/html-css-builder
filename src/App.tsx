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
      fontSize: 32,
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

  const updateFontSize = (value: number) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, fontSize: value }
          : component
      )
    );
  };

  const deleteComponent = () => {
    setComponents(
      components.filter(
        (component) => component.id !== selectedId
      )
    );

    setSelectedId(null);
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
        updateFontSize={updateFontSize}
        deleteComponent={deleteComponent}
      />
    </div>
  );
}

export default App;