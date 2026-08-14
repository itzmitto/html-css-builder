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
    const inputStyle = {
      width: "100%",
      padding: "10px",
      marginTop: "8px",
      borderRadius: "8px",
      border: "none",
      boxSizing: "border-box" as const,
    };

    const selectStyle = {
      ...inputStyle,
      background: "#ffffff",
      color: "#111827",
    };

    const sectionTitleStyle = {
      marginTop: "25px",
      marginBottom: "12px",
      color: "#d1d5db",
      fontSize: "13px",
      fontWeight: 700,
      textTransform: "uppercase" as const,
      letterSpacing: "0.06em",
    };

    const labelStyle = {
      display: "block",
      marginTop: "14px",
      color: "#d1d5db",
      fontSize: "13px",
    };

    const valueStyle = {
      marginTop: "7px",
      color: "#9ca3af",
      fontSize: "12px",
    };

    const textAlign =
      styles.textAlign ?? "left";

    const fontFamily =
      styles.fontFamily ?? "Arial";

    const fontSize =
      styles.fontSize ?? 16;

    const fontWeight =
      styles.fontWeight ?? 400;

    const lineHeight =
      styles.lineHeight ?? 1.5;

    const letterSpacing =
      styles.letterSpacing ?? 0;

    return (
      <div>
        <h3 className="property-section-title">
          Typography
        </h3>

        <h4 style={sectionTitleStyle}>
          Font
        </h4>

        <label style={labelStyle}>
          Font Family
        </label>

        <select
          value={fontFamily}
          onChange={(e) =>
            updateStyles({
              fontFamily:
                e.target.value,
            })
          }
          style={{
            ...selectStyle,
            fontFamily,
          }}
        >
          <option
            value="Arial"
            style={{
              fontFamily:
                "Arial",
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

          <option
            value="Inter, system-ui, sans-serif"
            style={{
              fontFamily:
                "Inter, system-ui, sans-serif",
            }}
          >
            Inter
          </option>

          <option
            value="Roboto, system-ui, sans-serif"
            style={{
              fontFamily:
                "Roboto, system-ui, sans-serif",
            }}
          >
            Roboto
          </option>

          <option
            value="Poppins, system-ui, sans-serif"
            style={{
              fontFamily:
                "Poppins, system-ui, sans-serif",
            }}
          >
            Poppins
          </option>
        </select>

        <div
          style={{
            marginTop: "10px",
            padding: "12px",
            background: "#111827",
            border:
              "1px solid #374151",
            borderRadius: "8px",
            color: "#e5e7eb",
            fontFamily,
            fontSize: "20px",
            fontWeight,
            lineHeight,
            letterSpacing:
              `${letterSpacing}px`,
            overflow: "hidden",
          }}
        >
          Aa Bb Cc 123
        </div>

        <label style={labelStyle}>
          Font Size
        </label>

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
            value={fontSize}
            onChange={(e) =>
              updateStyles({
                fontSize:
                  Math.max(
                    1,
                    Number(
                      e.target.value
                    )
                  ),
              })
            }
            style={{
              ...inputStyle,
              marginTop: 0,
              flex: 1,
            }}
          />

          <span
            style={{
              color: "#9ca3af",
              fontSize: "13px",
              minWidth: "24px",
            }}
          >
            px
          </span>
        </div>

        <div style={valueStyle}>
          {fontSize}px
        </div>

        <label style={labelStyle}>
          Font Weight
        </label>

        <select
          value={fontWeight}
          onChange={(e) =>
            updateStyles({
              fontWeight:
                Number(
                  e.target.value
                ),
            })
          }
          style={selectStyle}
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

        <h4 style={sectionTitleStyle}>
          Spacing
        </h4>

        <label style={labelStyle}>
          Line Height
        </label>

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
            value={lineHeight}
            onChange={(e) =>
              updateStyles({
                lineHeight:
                  Math.max(
                    0.5,
                    Number(
                      e.target.value
                    )
                  ),
              })
            }
            style={{
              ...inputStyle,
              marginTop: 0,
              flex: 1,
            }}
          />

          <span
            style={{
              color: "#9ca3af",
              fontSize: "13px",
              minWidth: "55px",
            }}
          >
            ratio
          </span>
        </div>

        <div style={valueStyle}>
          {lineHeight}
        </div>

        <label style={labelStyle}>
          Letter Spacing
        </label>

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
            value={letterSpacing}
            onChange={(e) =>
              updateStyles({
                letterSpacing:
                  Number(
                    e.target.value
                  ),
              })
            }
            style={{
              ...inputStyle,
              marginTop: 0,
              flex: 1,
            }}
          />

          <span
            style={{
              color: "#9ca3af",
              fontSize: "13px",
              minWidth: "24px",
            }}
          >
            px
          </span>
        </div>

        <div style={valueStyle}>
          {letterSpacing}px
        </div>

        <h4 style={sectionTitleStyle}>
          Alignment
        </h4>

        <label style={labelStyle}>
          Text Align
        </label>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, 1fr)",
            gap: "6px",
            marginTop: "8px",
          }}
        >
          {(
            [
              "left",
              "center",
              "right",
            ] as const
          ).map((alignment) => (
            <button
              key={alignment}
              type="button"
              onClick={() =>
                updateStyles({
                  textAlign:
                    alignment,
                })
              }
              style={{
                padding:
                  "10px 6px",
                border: "none",
                borderRadius:
                  "7px",
                cursor:
                  "pointer",
                background:
                  textAlign ===
                  alignment
                    ? "#7c3aed"
                    : "#374151",
                color:
                  "#ffffff",
                transition:
                  "background 0.15s ease",
              }}
            >
              {alignment
                .charAt(0)
                .toUpperCase() +
                alignment.slice(1)}
            </button>
          ))}
        </div>

        <h4 style={sectionTitleStyle}>
          Quick Presets
        </h4>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2, 1fr)",
            gap: "8px",
            marginTop: "10px",
          }}
        >
          <button
            type="button"
            onClick={() =>
              updateStyles({
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: 0,
              })
            }
            style={{
              padding: "10px",
              border:
                "1px solid #374151",
              borderRadius: "8px",
              background:
                "#111827",
              color:
                "#ffffff",
              cursor:
                "pointer",
              fontSize:
                "12px",
            }}
          >
            Body
          </button>

          <button
            type="button"
            onClick={() =>
              updateStyles({
                fontSize: 20,
                fontWeight: 500,
                lineHeight: 1.4,
                letterSpacing: 0,
              })
            }
            style={{
              padding: "10px",
              border:
                "1px solid #374151",
              borderRadius: "8px",
              background:
                "#111827",
              color:
                "#ffffff",
              cursor:
                "pointer",
              fontSize:
                "12px",
            }}
          >
            Medium
          </button>

          <button
            type="button"
            onClick={() =>
              updateStyles({
                fontSize: 32,
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing:
                  -0.5,
              })
            }
            style={{
              padding: "10px",
              border:
                "1px solid #374151",
              borderRadius: "8px",
              background:
                "#111827",
              color:
                "#ffffff",
              cursor:
                "pointer",
              fontSize:
                "12px",
            }}
          >
            Heading
          </button>

          <button
            type="button"
            onClick={() =>
              updateStyles({
                fontSize: 48,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing:
                  -1,
              })
            }
            style={{
              padding: "10px",
              border:
                "1px solid #374151",
              borderRadius: "8px",
              background:
                "#111827",
              color:
                "#ffffff",
              cursor:
                "pointer",
              fontSize:
                "12px",
            }}
          >
            Display
          </button>
        </div>
      </div>
    );
  }

  export default TypographyProperties;