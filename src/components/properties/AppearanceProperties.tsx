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

  const colorInputStyle = {
    width: "100%",
    height: "46px",
    marginTop: "8px",
    padding: "3px",
    border: "none",
    borderRadius: "8px",
    background: "#ffffff",
    cursor: "pointer",
    boxSizing: "border-box" as const,
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

  return (
    <div>
      <h3 className="property-section-title">
        Appearance
      </h3>

      <h4 style={sectionTitleStyle}>
        Background
      </h4>

      <label style={labelStyle}>
        Background Color
      </label>

      <input
        type="color"
        value={
          styles.backgroundColor ??
          "#ffffff"
        }
        onChange={(e) =>
          updateStyles({
            backgroundColor:
              e.target.value,
          })
        }
        style={colorInputStyle}
      />

      <label style={labelStyle}>
        Text Color
      </label>

      <input
        type="color"
        value={
          styles.color ??
          "#000000"
        }
        onChange={(e) =>
          updateStyles({
            color:
              e.target.value,
          })
        }
        style={colorInputStyle}
      />

      <h4 style={sectionTitleStyle}>
        Border
      </h4>

      <label style={labelStyle}>
        Border Width
      </label>

      <input
        type="number"
        min="0"
        max="50"
        value={
          styles.borderWidth ??
          0
        }
        onChange={(e) =>
          updateStyles({
            borderWidth:
              Math.max(
                0,
                Number(
                  e.target.value
                )
              ),
          })
        }
        style={inputStyle}
      />

      <label style={labelStyle}>
        Border Style
      </label>

      <select
        value={
          styles.borderStyle ??
          "none"
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
        style={selectStyle}
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

      <label style={labelStyle}>
        Border Color
      </label>

      <input
        type="color"
        value={
          styles.borderColor ??
          "#e5e7eb"
        }
        onChange={(e) =>
          updateStyles({
            borderColor:
              e.target.value,
          })
        }
        style={colorInputStyle}
      />

      <label style={labelStyle}>
        Border Radius
      </label>

      <input
        type="number"
        min="0"
        max="200"
        value={
          styles.borderRadius ??
          0
        }
        onChange={(e) =>
          updateStyles({
            borderRadius:
              Math.max(
                0,
                Number(
                  e.target.value
                )
              ),
          })
        }
        style={inputStyle}
      />

      <div style={valueStyle}>
        {styles.borderRadius ??
          0}
        px
      </div>

      <h4 style={sectionTitleStyle}>
        Effects
      </h4>

      <label style={labelStyle}>
        Opacity
      </label>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={
          styles.opacity ?? 1
        }
        onChange={(e) =>
          updateStyles({
            opacity:
              Number(
                e.target.value
              ),
          })
        }
        style={{
          width: "100%",
          marginTop: "10px",
          cursor: "pointer",
        }}
      />

      <div style={valueStyle}>
        {Math.round(
          (styles.opacity ?? 1) *
            100
        )}
        %
      </div>

      <label style={labelStyle}>
        Overflow
      </label>

      <select
        value={
          styles.overflow ??
          "visible"
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
        style={selectStyle}
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

      <label style={labelStyle}>
        Z-Index
      </label>

      <input
        type="number"
        value={
          styles.zIndex ?? 1
        }
        onChange={(e) =>
          updateStyles({
            zIndex:
              Number(
                e.target.value
              ),
          })
        }
        style={inputStyle}
      />

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
              backgroundColor:
                "#ffffff",
              color:
                "#111827",
              borderWidth: 1,
              borderStyle:
                "solid",
              borderColor:
                "#e5e7eb",
              borderRadius:
                12,
              opacity: 1,
            })
          }
          style={{
            padding: "10px",
            border:
              "1px solid #374151",
            borderRadius: "8px",
            background:
              "#111827",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Clean
        </button>

        <button
          type="button"
          onClick={() =>
            updateStyles({
              backgroundColor:
                "#f8fafc",
              color:
                "#111827",
              borderWidth: 1,
              borderStyle:
                "solid",
              borderColor:
                "#e2e8f0",
              borderRadius:
                16,
              opacity: 1,
            })
          }
          style={{
            padding: "10px",
            border:
              "1px solid #374151",
            borderRadius: "8px",
            background:
              "#111827",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Soft
        </button>

        <button
          type="button"
          onClick={() =>
            updateStyles({
              backgroundColor:
                "#7c3aed",
              color:
                "#ffffff",
              borderWidth: 0,
              borderStyle:
                "none",
              borderRadius:
                14,
              opacity: 1,
            })
          }
          style={{
            padding: "10px",
            border:
              "1px solid #374151",
            borderRadius: "8px",
            background:
              "#111827",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Accent
        </button>

        <button
          type="button"
          onClick={() =>
            updateStyles({
              backgroundColor:
                "#0f172a",
              color:
                "#ffffff",
              borderWidth: 1,
              borderStyle:
                "solid",
              borderColor:
                "#1e293b",
              borderRadius:
                14,
              opacity: 1,
            })
          }
          style={{
            padding: "10px",
            border:
              "1px solid #374151",
            borderRadius: "8px",
            background:
              "#111827",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Dark
        </button>
      </div>
    </div>
  );
}

export default AppearanceProperties;