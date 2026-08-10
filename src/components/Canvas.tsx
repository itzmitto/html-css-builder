import type { BuilderComponent } from "../types/builder";
import PreviewRenderer from "./PreviewRenderer";

interface CanvasProps {
  components: BuilderComponent[];
  selectedId: string | null;
  setSelectedId: (id: string) => void;
}

function Canvas({
  components,
  selectedId,
  setSelectedId,
}: CanvasProps) {
  return (
    <main className="canvas">
      <div className="device-switcher">
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
            <PreviewRenderer component={component} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Canvas;