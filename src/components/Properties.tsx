import type { ChangeEvent } from "react";
import type {
  BuilderComponent,
  BuilderStyles,
} from "../types/builder";
import LayoutProperties from "./properties/LayoutProperties";
import TypographyProperties from "./properties/TypographyProperties";

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
  updateImage: (value: string) => void;
  updateImageWidth: (value: number) => void;
  updateImageHeight: (value: number) => void;
  updateImageBorderRadius: (value: number) => void;
  updateStyles: (styles: Partial<BuilderStyles>) => void;
  moveComponentUp: () => void;
  moveComponentDown: () => void;
  duplicateComponent: () => void;
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
  updateImage,
  updateImageWidth,
  updateImageHeight,
  updateImageBorderRadius,
  updateStyles,
  moveComponentUp,
  moveComponentDown,
  duplicateComponent,
  deleteComponent,
}: PropertiesProps) {
  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Selecteer een afbeelding.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        updateImage(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const styles: BuilderStyles =
    selectedComponent?.styles ?? {};

  const showTypography =
    selectedComponent?.type === "Heading" ||
    selectedComponent?.type === "Paragraph" ||
    selectedComponent?.type === "Button";

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

          <LayoutProperties
            styles={styles}
            updateStyles={updateStyles}
          />

          {showTypography && (
            <TypographyProperties
              styles={styles}
              updateStyles={updateStyles}
            />
          )}

          {(selectedComponent.type === "Heading" ||
            selectedComponent.type === "Paragraph" ||
            selectedComponent.type === "Button") && (
            <>
              <h3
                style={{
                  marginTop: "25px",
                  marginBottom: "15px",
                }}
              >
                Content
              </h3>

              <p>Text</p>

              <input
                type="text"
                value={selectedComponent.text || ""}
                onChange={(e) =>
                  updateText(e.target.value)
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

          {(selectedComponent.type === "Hero" ||
            selectedComponent.type === "Section" ||
            selectedComponent.type === "Card" ||
            selectedComponent.type === "Container") && (
            <>
              <h3
                style={{
                  marginTop: "25px",
                  marginBottom: "15px",
                }}
              >
                Background
              </h3>

              <p>Background Color</p>

              <input
                type="color"
                value={
                  selectedComponent.backgroundColor ||
                  styles.backgroundColor ||
                  "#ffffff"
                }
                onChange={(e) =>
                  updateBackgroundColor(
                    e.target.value
                  )
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
              <h3
                style={{
                  marginTop: "25px",
                  marginBottom: "15px",
                }}
              >
                Hero
              </h3>

              <p>Hero Title</p>

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
                value={
                  selectedComponent.heroSubtitle || ""
                }
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
              <h3
                style={{
                  marginTop: "25px",
                  marginBottom: "15px",
                }}
              >
                Container
              </h3>

              <p>Container Height</p>

              <input
                type="range"
                min="100"
                max="1000"
                value={
                  selectedComponent.minHeight ||
                  styles.height ||
                  300
                }
                onChange={(e) => {
                  const value = Number(
                    e.target.value
                  );

                  updateMinHeight(value);
                  updateStyles({
                    height: value,
                    heightUnit: "px",
                  });
                }}
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
              />

              <p style={{ marginTop: "10px" }}>
                {selectedComponent.minHeight ||
                  styles.height ||
                  300}
                px
              </p>
            </>
          )}

          {selectedComponent.type === "Image" && (
            <>
              <h3
                style={{
                  marginTop: "25px",
                  marginBottom: "15px",
                }}
              >
                Image
              </h3>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{
                  width: "100%",
                  marginTop: "10px",
                  color: "white",
                }}
              />

              <p style={{ marginTop: "20px" }}>
                Image Width
              </p>

              <input
                type="range"
                min="10"
                max="100"
                value={
                  selectedComponent.imageWidth || 100
                }
                onChange={(e) =>
                  updateImageWidth(
                    Number(e.target.value)
                  )
                }
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
              />

              <p style={{ marginTop: "10px" }}>
                {selectedComponent.imageWidth || 100}%
              </p>

              <p style={{ marginTop: "20px" }}>
                Image Height
              </p>

              <input
                type="range"
                min="50"
                max="1000"
                value={
                  selectedComponent.imageHeight || 300
                }
                onChange={(e) =>
                  updateImageHeight(
                    Number(e.target.value)
                  )
                }
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
              />

              <p style={{ marginTop: "10px" }}>
                {selectedComponent.imageHeight ||
                  300}
                px
              </p>

              <p style={{ marginTop: "20px" }}>
                Border Radius
              </p>

              <input
                type="range"
                min="0"
                max="100"
                value={
                  selectedComponent.imageBorderRadius ||
                  8
                }
                onChange={(e) =>
                  updateImageBorderRadius(
                    Number(e.target.value)
                  )
                }
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
              />

              <p style={{ marginTop: "10px" }}>
                {selectedComponent.imageBorderRadius ||
                  8}
                px
              </p>

              {selectedComponent.imageUrl && (
                <img
                  src={selectedComponent.imageUrl}
                  alt="Selected"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    marginTop: "15px",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              )}
            </>
          )}

          <div
            style={{
              borderTop: "1px solid #374151",
              marginTop: "25px",
              paddingTop: "20px",
            }}
          >
            <button
              onClick={moveComponentUp}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Move Up
            </button>

            <button
              onClick={moveComponentDown}
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Move Down
            </button>

            <button
              onClick={duplicateComponent}
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Duplicate Component
            </button>

            <button
              onClick={deleteComponent}
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Delete Component
            </button>
          </div>
        </>
      ) : (
        <p>Selecteer een component</p>
      )}
    </aside>
  );
}

export default Properties;