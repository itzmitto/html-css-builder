import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import Properties from "./components/Properties";

import { generateHTML } from "./utils/generateHTML";

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
      heroTitle: "Hero Title",
      heroSubtitle: "Hero Subtitle goes here",
      heroButtonText: "Get Started",
      minHeight: 300,
      fontSize: 32,
      color: "#000000",
      backgroundColor: "#ffffff",
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

  const updateColor = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, color: value }
          : component
      )
    );
  };

  const updateBackgroundColor = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, backgroundColor: value }
          : component
      )
    );
  };

  const updateMinHeight = (value: number) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, minHeight: value }
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

  const updateHeroTitle = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, heroTitle: value }
          : component
      )
    );
  };

  const updateHeroSubtitle = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, heroSubtitle: value }
          : component
      )
    );
  };

  const updateHeroButtonText = (value: string) => {
    setComponents(
      components.map((component) =>
        component.id === selectedId
          ? { ...component, heroButtonText: value }
          : component
      )
    );
  };

  const exportHTML = () => {
    const html = generateHTML(components);

    navigator.clipboard.writeText(html);

    alert("HTML gekopieerd!");
  };

  return (
    <div className="editor">
      <Sidebar addComponent={addComponent} />

      <div className="canvas">
        <div className="canvas-header">
          <button onClick={exportHTML}>
            Export HTML
          </button>
        </div>

        <Canvas
          components={components}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>

      <Properties
        selectedComponent={selectedComponent}
        updateText={updateText}
        updateFontSize={updateFontSize}
        updateColor={updateColor}
        updateBackgroundColor={updateBackgroundColor}
        updateMinHeight={updateMinHeight}
        updateHeroTitle={updateHeroTitle}
        updateHeroSubtitle={updateHeroSubtitle}
        updateHeroButtonText={updateHeroButtonText}
        deleteComponent={deleteComponent}
      />
    </div>
  );
}

export default App;