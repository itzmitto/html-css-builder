import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import Properties from "./components/Properties";

import { generateHTML } from "./utils/generateHTML";
import { generateCSS } from "./utils/generateCSS";

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

  const moveComponentUp = () => {
    const index = components.findIndex(
      (component) => component.id === selectedId
    );

    if (index <= 0) return;

    const updated = [...components];

    [updated[index - 1], updated[index]] = [
      updated[index],
      updated[index - 1],
    ];

    setComponents(updated);
  };

  const moveComponentDown = () => {
    const index = components.findIndex(
      (component) => component.id === selectedId
    );

    if (
      index === -1 ||
      index === components.length - 1
    ) {
      return;
    }

    const updated = [...components];

    [updated[index + 1], updated[index]] = [
      updated[index],
      updated[index + 1],
    ];

    setComponents(updated);
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
  const downloadFile = (
    filename: string,
    content: string
  ) => {
    const blob = new Blob(
      [content],
      {
        type: "text/plain",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = filename;

    a.click();

    URL.revokeObjectURL(url);
  };
  const exportHTML = () => {
    const html = generateHTML(components);

    downloadFile(
      "index.html",
      html
    );
  };

  const exportCSS = () => {
    const css = generateCSS();

    downloadFile(
      "style.css",
      css
    );
  };

  const saveProject = () => {
    localStorage.setItem(
      "website-builder-project",
      JSON.stringify(components)
    );

    alert("Project opgeslagen!");
  };

  const loadProject = () => {
    const savedProject = localStorage.getItem(
      "website-builder-project"
    );

    if (!savedProject) {
      alert("Geen opgeslagen project gevonden");
      return;
    }

    setComponents(JSON.parse(savedProject));

    alert("Project geladen!");
  };

  return (
    <div className="editor">
      <Sidebar addComponent={addComponent} />

      <div className="canvas">
        <div className="canvas-header">
          <button onClick={exportHTML}>
            Export HTML
          </button>

          <button onClick={exportCSS}>
            Export CSS
          </button>

          <button onClick={saveProject}>
            Save Project
          </button>

          <button onClick={loadProject}>
            Load Project
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
        moveComponentUp={moveComponentUp}
        moveComponentDown={moveComponentDown}
        deleteComponent={deleteComponent}
      />
    </div>
  );
}

export default App;