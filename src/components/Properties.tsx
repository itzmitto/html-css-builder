import type { BuilderComponent } from "../types/builder";

interface PropertiesProps {
  selectedComponent?: BuilderComponent;
  updateText: (value: string) => void;
  updateFontSize: (value: number) => void;
  updateColor: (value: string) => void;
  updateBackgroundColor: (value: string) => void;
  updateMinHeight: (value: number) => void;

  updateHeroTitle: (value: string) => void;
  updateHeroSubtitle: (value: string) => void;
  updateHeroButtonText: (value: string) => void;

  deleteComponent: () => void;
}

function Properties({
  selectedComponent,
  updateText,
  updateFontSize,
  updateColor,
  updateBackgroundColor,
  updateMinHeight,
  updateHeroTitle,
  updateHeroSubtitle,
  updateHeroButtonText,
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
              <p style={{ marginTop: "20px" }}>Font Size</p>

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

          {(selectedComponent.type === "Heading" ||
            selectedComponent.type === "Paragraph" ||
            selectedComponent.type === "Button") && (
            <>
              <p style={{ marginTop: "20px" }}>Text Color</p>

              <input
                type="color"
                value={selectedComponent.color || "#000000"}
                onChange={(e) =>
                  updateColor(e.target.value)
                }
                style={{
                  width: "100%",
                  height: "50px",
                  marginTop: "10px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              />
            </>
          )}

          {(selectedComponent.type === "Hero" ||
            selectedComponent.type === "Section" ||
            selectedComponent.type === "Card" ||
            selectedComponent.type === "Container") && (
            <>
              <p style={{ marginTop: "20px" }}>
                Background Color
              </p>

              <input
                type="color"
                value={
                  selectedComponent.backgroundColor ||
                  "#ffffff"
                }
                onChange={(e) =>
                  updateBackgroundColor(e.target.value)
                }
                style={{
                  width: "100%",
                  height: "50px",
                  marginTop: "10px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              />
            </>
          )}

          {selectedComponent.type === "Hero" && (
            <>
              <p style={{ marginTop: "20px" }}>
                Hero Title
              </p>

              <input
                type="text"
                value={selectedComponent.heroTitle || ""}
                onChange={(e) =>
                  updateHeroTitle(e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  marginTop: "10px",
                }}
              />

              <p style={{ marginTop: "20px" }}>
                Hero Subtitle
              </p>

              <input
                type="text"
                value={selectedComponent.heroSubtitle || ""}
                onChange={(e) =>
                  updateHeroSubtitle(e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  marginTop: "10px",
                }}
              />

              <p style={{ marginTop: "20px" }}>
                Hero Button Text
              </p>

              <input
                type="text"
                value={
                  selectedComponent.heroButtonText || ""
                }
                onChange={(e) =>
                  updateHeroButtonText(e.target.value)
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

          {selectedComponent.type === "Container" && (
            <>
              <p style={{ marginTop: "20px" }}>
                Container Height
              </p>

              <input
                type="range"
                min="100"
                max="1000"
                value={selectedComponent.minHeight || 300}
                onChange={(e) =>
                  updateMinHeight(Number(e.target.value))
                }
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
              />

              <p style={{ marginTop: "10px" }}>
                {selectedComponent.minHeight || 300}px
              </p>
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