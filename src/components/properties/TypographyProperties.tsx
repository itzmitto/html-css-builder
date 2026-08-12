import type { BuilderStyles } from "../../types/builder";

interface TypographyPropertiesProps {
  styles: BuilderStyles;
  updateStyles: (
    styles: Partial<BuilderStyles>
  ) => void;
}

function TypographyProperties({
  styles,
  updateStyles,
}: TypographyPropertiesProps) {
  return (
    <div>
      <h3
        style={{
          marginTop: "25px",
          marginBottom: "15px",
        }}
      >
        Typography
      </h3>

      <p>Font Family</p>

      <select
        value={styles.fontFamily ?? "Arial"}
        onChange={(e) =>
          updateStyles({
            fontFamily: e.target.value,
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
        <option value="Arial">
          Arial
        </option>

        <option value="Helvetica">
          Helvetica
        </option>

        <option value="Verdana">
          Verdana
        </option>

        <option value="Tahoma">
          Tahoma
        </option>

        <option value="Trebuchet MS">
          Trebuchet MS
        </option>

        <option value="Georgia">
          Georgia
        </option>

        <option value="Times New Roman">
          Times New Roman
        </option>

        <option value="Courier New">
          Courier New
        </option>

        <option value="system-ui">
          System UI
        </option>
      </select>

      <p style={{ marginTop: "15px" }}>
        Font Size
      </p>

      <input
        type="number"
        min="1"
        max="200"
        value={styles.fontSize ?? 16}
        onChange={(e) =>
          updateStyles({
            fontSize: Number(e.target.value),
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
        Font Weight
      </p>

      <select
        value={styles.fontWeight ?? 400}
        onChange={(e) =>
          updateStyles({
            fontWeight: Number(e.target.value),
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
        <option value="100">
          100 - Thin
        </option>

        <option value="200">
          200 - Extra Light
        </option>

        <option value="300">
          300 - Light
        </option>

        <option value="400">
          400 - Normal
        </option>

        <option value="500">
          500 - Medium
        </option>

        <option value="600">
          600 - Semi Bold
        </option>

        <option value="700">
          700 - Bold
        </option>

        <option value="800">
          800 - Extra Bold
        </option>

        <option value="900">
          900 - Black
        </option>
      </select>

      <p style={{ marginTop: "15px" }}>
        Line Height
      </p>

      <input
        type="number"
        min="0.5"
        max="5"
        step="0.1"
        value={styles.lineHeight ?? 1.5}
        onChange={(e) =>
          updateStyles({
            lineHeight: Number(e.target.value),
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
        Letter Spacing
      </p>

      <input
        type="number"
        min="-10"
        max="50"
        step="0.5"
        value={styles.letterSpacing ?? 0}
        onChange={(e) =>
          updateStyles({
            letterSpacing: Number(e.target.value),
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
        Text Align
      </p>

      <select
        value={styles.textAlign ?? "left"}
        onChange={(e) =>
          updateStyles({
            textAlign: e.target.value as
              | "left"
              | "center"
              | "right",
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
        <option value="left">
          Left
        </option>

        <option value="center">
          Center
        </option>

        <option value="right">
          Right
        </option>
      </select>
    </div>
  );
}

export default TypographyProperties;