import type { BuilderStyles } from "../../types/builder";

interface AppearancePropertiesProps {
  styles: BuilderStyles;
  updateStyles: (
    styles: Partial<BuilderStyles>
  ) => void;
}

function AppearanceProperties({
  styles,
  updateStyles,
}: AppearancePropertiesProps) {
  return (
    <div>
      <h3
        style={{
          marginTop: "25px",
          marginBottom: "15px",
        }}
      >
        Appearance
      </h3>

      <p>Background Color</p>

      <input
        type="color"
        value={
          styles.backgroundColor ?? "#ffffff"
        }
        onChange={(e) =>
          updateStyles({
            backgroundColor: e.target.value,
          })
        }
        style={{
          width: "100%",
          height: "50px",
          marginTop: "8px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      />

      <p style={{ marginTop: "20px" }}>
        Border Width
      </p>

      <input
        type="number"
        min="0"
        max="50"
        value={styles.borderWidth ?? 0}
        onChange={(e) =>
          updateStyles({
            borderWidth: Number(e.target.value),
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "8px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      <p style={{ marginTop: "15px" }}>
        Border Style
      </p>

      <select
        value={
          styles.borderStyle ?? "none"
        }
        onChange={(e) =>
          updateStyles({
            borderStyle:
              e.target.value as
                | "none"
                | "solid"
                | "dashed"
                | "dotted",
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "8px",
          borderRadius: "8px",
          border: "none",
        }}
      >
        <option value="none">
          None
        </option>

        <option value="solid">
          Solid
        </option>

        <option value="dashed">
          Dashed
        </option>

        <option value="dotted">
          Dotted
        </option>
      </select>

      <p style={{ marginTop: "15px" }}>
        Border Color
      </p>

      <input
        type="color"
        value={
          styles.borderColor ?? "#000000"
        }
        onChange={(e) =>
          updateStyles({
            borderColor: e.target.value,
          })
        }
        style={{
          width: "100%",
          height: "50px",
          marginTop: "8px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      />

      <p style={{ marginTop: "15px" }}>
        Border Radius
      </p>

      <input
        type="number"
        min="0"
        max="100"
        value={styles.borderRadius ?? 0}
        onChange={(e) =>
          updateStyles({
            borderRadius: Number(
              e.target.value
            ),
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "8px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      <p style={{ marginTop: "15px" }}>
        Opacity
      </p>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={styles.opacity ?? 1}
        onChange={(e) =>
          updateStyles({
            opacity: Number(
              e.target.value
            ),
          })
        }
        style={{
          width: "100%",
          marginTop: "8px",
        }}
      />

      <p style={{ marginTop: "10px" }}>
        {Math.round(
          (styles.opacity ?? 1) * 100
        )}
        %
      </p>

      <p style={{ marginTop: "15px" }}>
        Overflow
      </p>

      <select
        value={
          styles.overflow ?? "visible"
        }
        onChange={(e) =>
          updateStyles({
            overflow:
              e.target.value as
                | "visible"
                | "hidden"
                | "auto",
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "8px",
          borderRadius: "8px",
          border: "none",
        }}
      >
        <option value="visible">
          Visible
        </option>

        <option value="hidden">
          Hidden
        </option>

        <option value="auto">
          Auto
        </option>
      </select>

      <p style={{ marginTop: "15px" }}>
        Z-Index
      </p>

      <input
        type="number"
        value={styles.zIndex ?? 1}
        onChange={(e) =>
          updateStyles({
            zIndex: Number(
              e.target.value
            ),
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "8px",
          borderRadius: "8px",
          border: "none",
        }}
      />
    </div>
  );
}

export default AppearanceProperties;