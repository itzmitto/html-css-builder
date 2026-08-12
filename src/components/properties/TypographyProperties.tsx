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

      <h4
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          color: "#d1d5db",
        }}
      >
        Font
      </h4>

      <p>Font Family</p>

      <select
        value={
          styles.fontFamily ??
          "Arial"
        }
        onChange={(e) =>
          updateStyles({
            fontFamily:
              e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "8px",
          borderRadius: "8px",
          border: "none",
          fontFamily:
            styles.fontFamily ??
            "Arial",
        }}
      >
        <option
          value="Arial"
          style={{
            fontFamily: "Arial",
          }}
        >
          Arial
        </option>

        <option
          value="Helvetica"
          style={{
            fontFamily:
              "Helvetica",
          }}
        >
          Helvetica
        </option>

        <option
          value="Verdana"
          style={{
            fontFamily:
              "Verdana",
          }}
        >
          Verdana
        </option>

        <option
          value="Tahoma"
          style={{
            fontFamily:
              "Tahoma",
          }}
        >
          Tahoma
        </option>

        <option
          value="Trebuchet MS"
          style={{
            fontFamily:
              "Trebuchet MS",
          }}
        >
          Trebuchet MS
        </option>

        <option
          value="Georgia"
          style={{
            fontFamily:
              "Georgia",
          }}
        >
          Georgia
        </option>

        <option
          value="Times New Roman"
          style={{
            fontFamily:
              "Times New Roman",
          }}
        >
          Times New Roman
        </option>

        <option
          value="Courier New"
          style={{
            fontFamily:
              "Courier New",
          }}
        >
          Courier New
        </option>

        <option
          value="system-ui"
          style={{
            fontFamily:
              "system-ui",
          }}
        >
          System UI
        </option>
      </select>

      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          background: "#111827",
          borderRadius: "8px",
          color: "#e5e7eb",
          fontFamily:
            styles.fontFamily ??
            "Arial",
          fontSize: "20px",
        }}
      >
        Aa Bb Cc 123
      </div>

      <p
        style={{
          marginTop: "20px",
        }}
      >
        Font Size
      </p>

      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <input
          type="number"
          min="1"
          max="200"
          value={
            styles.fontSize ?? 16
          }
          onChange={(e) =>
            updateStyles({
              fontSize:
                Number(
                  e.target.value
                ),
            })
          }
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <span
          style={{
            color: "#9ca3af",
            fontSize: "13px",
          }}
        >
          px
        </span>
      </div>

      <p
        style={{
          marginTop: "15px",
        }}
      >
        Font Weight
      </p>

      <select
        value={
          styles.fontWeight ?? 400
        }
        onChange={(e) =>
          updateStyles({
            fontWeight:
              Number(
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

      <h4
        style={{
          marginTop: "25px",
          marginBottom: "10px",
          color: "#d1d5db",
        }}
      >
        Spacing
      </h4>

      <p>Line Height</p>

      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <input
          type="number"
          min="0.5"
          max="5"
          step="0.1"
          value={
            styles.lineHeight ?? 1.5
          }
          onChange={(e) =>
            updateStyles({
              lineHeight:
                Number(
                  e.target.value
                ),
            })
          }
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <span
          style={{
            color: "#9ca3af",
            fontSize: "13px",
          }}
        >
          unitless
        </span>
      </div>

      <p
        style={{
          marginTop: "15px",
        }}
      >
        Letter Spacing
      </p>

      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <input
          type="number"
          min="-10"
          max="50"
          step="0.5"
          value={
            styles.letterSpacing ?? 0
          }
          onChange={(e) =>
            updateStyles({
              letterSpacing:
                Number(
                  e.target.value
                ),
            })
          }
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <span
          style={{
            color: "#9ca3af",
            fontSize: "13px",
          }}
        >
          px
        </span>
      </div>

      <h4
        style={{
          marginTop: "25px",
          marginBottom: "10px",
          color: "#d1d5db",
        }}
      >
        Alignment
      </h4>

      <p>Text Align</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3, 1fr)",
          gap: "6px",
          marginTop: "8px",
        }}
      >
        <button
          type="button"
          onClick={() =>
            updateStyles({
              textAlign: "left",
            })
          }
          style={{
            padding: "10px 6px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            background:
              styles.textAlign ===
              "left"
                ? "#2563eb"
                : "#374151",
            color: "white",
          }}
        >
          Left
        </button>

        <button
          type="button"
          onClick={() =>
            updateStyles({
              textAlign: "center",
            })
          }
          style={{
            padding: "10px 6px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            background:
              styles.textAlign ===
              "center"
                ? "#2563eb"
                : "#374151",
            color: "white",
          }}
        >
          Center
        </button>

        <button
          type="button"
          onClick={() =>
            updateStyles({
              textAlign: "right",
            })
          }
          style={{
            padding: "10px 6px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            background:
              styles.textAlign ===
              "right"
                ? "#2563eb"
                : "#374151",
            color: "white",
          }}
        >
          Right
        </button>
      </div>
    </div>
  );
}

export default TypographyProperties;