interface SectionPreviewProps {
  title?: string;
  content?: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
}

function SectionPreview({
  title = "Section Title",
  content = "Section content...",
  backgroundColor = "#ffffff",
  textColor = "#000000",
  fontFamily = "Arial",
  textAlign = "left",
}: SectionPreviewProps) {
  const alignment =
    textAlign === "left"
      ? "flex-start"
      : textAlign === "right"
      ? "flex-end"
      : "center";

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
          maxWidth: "1100px",
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
              textColor === "#ffffff"
                ? "rgba(255,255,255,0.10)"
                : "rgba(124,58,237,0.09)",
            color:
              textColor === "#ffffff"
                ? "#ffffff"
                : "#7c3aed",
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
            color: textColor,
            fontFamily,
            fontSize: "17px",
            lineHeight: 1.75,
            opacity:
              textColor === "#ffffff"
                ? 0.82
                : 0.68,
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
                textColor === "#ffffff"
                  ? "rgba(255,255,255,0.08)"
                  : "#f8f7fc",
              border:
                textColor === "#ffffff"
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
                background:
                  textColor === "#ffffff"
                    ? "#ffffff"
                    : "#7c3aed",
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
              border: "none",
              borderRadius: "9px",
              background:
                textColor === "#ffffff"
                  ? "#ffffff"
                  : "#7c3aed",
              color:
                textColor === "#ffffff"
                  ? "#111827"
                  : "#ffffff",
              fontFamily,
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow:
                textColor === "#ffffff"
                  ? "0 6px 20px rgba(0,0,0,0.10)"
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
            textColor === "#ffffff"
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
            textColor === "#ffffff"
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid rgba(124,58,237,0.07)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

export default SectionPreview;