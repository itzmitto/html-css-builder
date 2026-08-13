import type { DragEndEvent } from "@dnd-kit/core";
import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type {
  BuilderComponent,
  DeviceType,
} from "../types/builder";
import PreviewRenderer from "./PreviewRenderer";

interface CanvasProps {
  components: BuilderComponent[];
  selectedId: string | null;
  setSelectedId: (id: string) => void;
  onDragEnd: (event: DragEndEvent) => void;
  device: DeviceType;
  setDevice: (device: DeviceType) => void;
}

interface SortableComponentProps {
  component: BuilderComponent;
  selectedId: string | null;
  setSelectedId: (id: string) => void;
}

function SortableComponent({
  component,
  selectedId,
  setSelectedId,
}: SortableComponentProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: component.id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={
        selectedId === component.id
          ? "builder-component selected"
          : "builder-component"
      }
      onClick={(event) => {
        event.stopPropagation();
        setSelectedId(component.id);
      }}
      {...attributes}
    >
      <div
        className="drag-handle"
        {...listeners}
        title="Sleep component"
      >
        ⋮⋮
      </div>
      <PreviewRenderer
        component={component}
      />
    </div>
  );
}

function Canvas({
  components,
  selectedId,
  setSelectedId,
  onDragEnd,
  device,
  setDevice,
}: CanvasProps) {
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
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={onDragEnd}
          >
            <SortableContext
              items={components.map(
                (component) =>
                  component.id
              )}
              strategy={
                verticalListSortingStrategy
              }
            >
              {components.map(
                (component) => (
                  <SortableComponent
                    key={component.id}
                    component={component}
                    selectedId={selectedId}
                    setSelectedId={
                      setSelectedId
                    }
                  />
                )
              )}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </main>
  );
}

export default Canvas;