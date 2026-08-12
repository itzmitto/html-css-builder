import type { BuilderComponent } from "../types/builder";
import PreviewRenderer from "./PreviewRenderer";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface CanvasProps {
  components: BuilderComponent[];
  selectedId: string | null;
  setSelectedId: (id: string) => void;
  onDragEnd: (event: any) => void;
}

function Canvas({
  components,
  selectedId,
  setSelectedId,
  onDragEnd,
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

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            items={components.map(
              (component) => component.id
            )}
            strategy={verticalListSortingStrategy}
          >
            {components.map((component) => (
              <div
                key={component.id}
                className={
                  selectedId === component.id
                    ? "builder-component selected"
                    : "builder-component"
                }
                onClick={() =>
                  setSelectedId(component.id)
                }
              >
                <PreviewRenderer component={component} />
              </div>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </main>
  );
}

export default Canvas;