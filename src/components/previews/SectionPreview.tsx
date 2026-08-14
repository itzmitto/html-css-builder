interface SectionPreviewProps {
  title?: string;
  content?: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
  contentWidth?: number;
  contentWidthUnit?: "px" | "%";
}
function SectionPreview({
  title = "Section Title",
  content = "Section content goes here. Add more components inside this section to build your page.",
  backgroundColor = "#ffffff",
  textColor = "#000000",
  fontFamily = "Arial",
  textAlign = "left",
  contentWidth = 1100,
  contentWidthUnit = "px",
}: SectionPreviewProps) {
  const alignment =
    textAlign === "left"
      ? "flex-start"
      : textAlign === "right"
      ? "flex-end"
      : "center";
  const isDark =
    textColor.toLowerCase() === "#ffffff" ||
    textColor.toLowerCase() === "#fff";
  const accentColor =
    isDark
      ? "#ffffff"
      : "#7c3aed";
  const mutedTextColor =
    isDark
      ? "rgba(255,255,255,0.82)"
      : "rgba(15,23,42,0.68)";
  return (
    <section
      className="section-preview"
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        minHeight: "360px",
        backgroundColor,
        color: textColor,
        fontFamily,
        textAlign,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "80px 40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: `${contentWidth}${contentWidthUnit}`,
          marginLeft: "auto",
          marginRight: "auto",
          minWidth: 0,
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: alignment,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px 11px",
            marginBottom: "16px",
            borderRadius: "999px",
            background:
              isDark
                ? "rgba(255,255,255,0.10)"
                : "rgba(124,58,237,0.09)",
            color: accentColor,
            fontSize: "11px",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
          }}
        >
          Section
        </span>
        <h2
          style={{
            width: "100%",
            maxWidth: "850px",
            margin: 0,
            color: textColor,
            fontFamily,
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 750,
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            overflowWrap: "break-word",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            width: "100%",
            maxWidth: "720px",
            marginTop: "18px",
            marginBottom: 0,
            color: mutedTextColor,
            fontFamily,
            fontSize: "17px",
            lineHeight: 1.75,
            overflowWrap: "break-word",
          }}
        >
          {content}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: alignment,
            gap: "10px",
            marginTop: "28px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 14px",
              borderRadius: "10px",
              background:
                isDark
                  ? "rgba(255,255,255,0.08)"
                  : "#f8f7fc",
              border:
                isDark
                  ? "1px solid rgba(255,255,255,0.10)"
                  : "1px solid #ece9f4",
              color: textColor,
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: accentColor,
                opacity: 0.9,
              }}
            />
            <span>
              Modern & flexible
            </span>
          </div>
          <button
            type="button"
            style={{
              minHeight: "42px",
              padding: "10px 18px",
              border:
                isDark
                  ? "1px solid rgba(255,255,255,0.20)"
                  : "1px solid transparent",
              borderRadius: "9px",
              background:
                isDark
                  ? "rgba(255,255,255,0.08)"
                  : "#7c3aed",
              color:
                isDark
                  ? "#ffffff"
                  : "#ffffff",
              fontFamily,
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow:
                isDark
                  ? "none"
                  : "0 6px 20px rgba(124,58,237,0.18)",
            }}
          >
            Explore
          </button>
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-120px",
          right: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            isDark
              ? "rgba(255,255,255,0.05)"
              : "rgba(124,58,237,0.05)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-110px",
          left: "-90px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          border:
            isDark
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid rgba(124,58,237,0.07)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
export default SectionPreview;