import type { BuilderComponent } from "../types/builder";

interface PropertiesProps {
  selectedComponent?: BuilderComponent;
  updateText: (value: string) => void;
  updateFontSize: (value: number) => void;
  deleteComponent: () => void;
}

function Properties({
  selectedComponent,
  updateText,
  updateFontSize,
  deleteComponent,
}: PropertiesProps) {
  return (
    <aside className="properties">
      <h2>Properties</h2>

      {selectedComponent ? (
        <>
          <p>Type</p>

          <div
            style={{
              background: "#374151",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            {selectedComponent.type}
          </div>

          {(selectedComponent.type === "Heading" ||
            selectedComponent.type === "Paragraph" ||
            selectedComponent.type === "Button") && (
            <>
              <p>Text</p>

              <input
                type="text"
                value={selectedComponent.text || ""}
                onChange={(e) => updateText(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  marginTop: "10px",
                }}
              />
            </>
          )}

          {(selectedComponent.type === "Heading" ||
            selectedComponent.type === "Paragraph") && (
            <>
              <p style={{ marginTop: "20px" }}>
                Font Size
              </p>

              <input
                type="number"
                value={selectedComponent.fontSize || 32}
                onChange={(e) =>
                  updateFontSize(Number(e.target.value))
                }
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  marginTop: "10px",
                }}
              />
            </>
          )}

          <button
            onClick={deleteComponent}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Delete Component
          </button>
        </>
      ) : (
        <p>Selecteer een component</p>
      )}
    </aside>
  );
}

export default Properties;