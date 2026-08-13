interface ButtonPreviewProps {
  text?: string;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: "left" | "center" | "right";
}

function ButtonPreview({
  text = "Button",
  color = "#000000",
  fontSize = 16,
  fontFamily = "Arial",
  fontWeight = 400,
  lineHeight = 1.5,
  letterSpacing = 0,
  textAlign = "center",
}: ButtonPreviewProps) {
  const resolvedFontSize = Math.max(
    11,
    Math.min(
      fontSize,
      32
    )
  );

  const resolvedFontWeight = Math.max(
    100,
    Math.min(
      fontWeight,
      900
    )
  );

  const resolvedLineHeight = Math.max(
    1,
    Math.min(
      lineHeight,
      2.5
    )
  );

  const isLightText =
    color.toLowerCase() ===
      "#ffffff" ||
    color.toLowerCase() ===
      "#fff";

  return (
    <button
      type="button"
      className="button-preview"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        minHeight: "46px",
        maxWidth: "100%",
        boxSizing: "border-box",
        padding: "12px 18px",
        border:
          isLightText
            ? "1px solid rgba(255,255,255,0.18)"
            : "1px solid #ddd6fe",
        borderRadius: "10px",
        background:
          isLightText
            ? "rgba(255,255,255,0.10)"
            : "#7c3aed",
        color,
        fontSize: `${resolvedFontSize}px`,
        fontFamily,
        fontWeight:
          resolvedFontWeight,
        lineHeight:
          resolvedLineHeight,
        letterSpacing: `${letterSpacing}px`,
        textAlign,
        cursor: "pointer",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        boxShadow:
          isLightText
            ? "0 6px 18px rgba(0,0,0,0.08)"
            : "0 8px 20px rgba(124,58,237,0.20)",
        transition:
          "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",
      }}
    >
      <span
        style={{
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {text}
      </span>

      <span
        aria-hidden="true"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: `${Math.max(
            12,
            resolvedFontSize - 1
          )}px`,
          lineHeight: 1,
        }}
      >
        →
      </span>
    </button>
  );
}

export default ButtonPreview;