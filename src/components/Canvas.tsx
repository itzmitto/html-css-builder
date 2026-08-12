import { useState } from "react";
import type { BuilderComponent } from "../types/builder";
import PreviewRenderer from "./PreviewRenderer";

type Device = "desktop" | "tablet" | "mobile";

interface CanvasProps {
  components: BuilderComponent[];
  selectedId: string | null;
  setSelectedId: (id: string) => void;
}

interface ComponentTreeProps {
  component: BuilderComponent;
  selectedId: string | null;
  setSelectedId: (id: string) => void;
}

function ComponentTree({
  component,
  selectedId,
  setSelectedId,
}: ComponentTreeProps) {
  return (
    <div
      className={
        selectedId === component.id
          ? "builder-component selected"
          : "builder-component"
      }
      onClick={(event) => {
        event.stopPropagation();
        setSelectedId(component.id);
      }}
    >
      <PreviewRenderer component={component} />

      {component.children &&
        component.children.length > 0 && (
          <div className="nested-components">
            {component.children.map(
              (child) => (
                <ComponentTree
                  key={child.id}
                  component={child}
                  selectedId={selectedId}
                  setSelectedId={
                    setSelectedId
                  }
                />
              )
            )}
          </div>
        )}
    </div>
  );
}

function Canvas({
  components,
  selectedId,
  setSelectedId,
}: CanvasProps) {
  const [device, setDevice] =
    useState<Device>("desktop");

  const deviceWidth =
    device === "desktop"
      ? 1440
      : device === "tablet"
      ? 768
      : 375;

  return (
    <main className="canvas">
      <div className="device-switcher">
        <button
          className={
            device === "desktop"
              ? "device-button active"
              : "device-button"
          }
          onClick={() =>
            setDevice("desktop")
          }
        >
          Desktop
        </button>

        <button
          className={
            device === "tablet"
              ? "device-button active"
              : "device-button"
          }
          onClick={() =>
            setDevice("tablet")
          }
        >
          Tablet
        </button>

        <button
          className={
            device === "mobile"
              ? "device-button active"
              : "device-button"
          }
          onClick={() =>
            setDevice("mobile")
          }
        >
          Mobile
        </button>

        <span
          style={{
            marginLeft: "10px",
            color: "#6b7280",
            fontSize: "14px",
            alignSelf: "center",
          }}
        >
          {deviceWidth}px
        </span>
      </div>

      <div className="preview-wrapper">
        <div
          className={`desktop-preview device-${device}`}
          style={{
            width: `${deviceWidth}px`,
          }}
        >
          {components.length === 0 && (
            <div className="empty-state">
              Voeg componenten toe vanuit de sidebar
            </div>
          )}

          {components.map(
            (component) => (
              <ComponentTree
                key={component.id}
                component={component}
                selectedId={selectedId}
                setSelectedId={
                  setSelectedId
                }
              />
            )
          )}
        </div>
      </div>
    </main>
  );
}

export default Canvas;