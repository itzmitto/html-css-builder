interface HeroPreviewProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
  buttonUrl?: string;
  buttonStyle?: "solid" | "outline" | "ghost";
  contentWidth?: number;
  contentWidthUnit?: "px" | "%";
  verticalPadding?: number;
}
function HeroPreview({
  title = "Hero Title",
  subtitle = "Hero Subtitle goes here",
  buttonText = "Get Started",
  backgroundColor = "#f8fafc",
  textColor = "#000000",
  fontFamily = "Arial",
  textAlign = "center",
  buttonUrl = "#",
  buttonStyle = "solid",
  contentWidth = 900,
  contentWidthUnit = "px",
  verticalPadding = 80,
}: HeroPreviewProps) {
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
  const secondaryTextColor =
    isDark
      ? "rgba(255,255,255,0.82)"
      : "rgba(15,23,42,0.68)";
  const primaryButtonStyle =
    buttonStyle === "outline"
      ? {
          border:
            isDark
              ? "1px solid rgba(255,255,255,0.35)"
              : "1px solid rgba(124,58,237,0.45)",
          background:
            "transparent",
          color:
            accentColor,
          boxShadow:
            "none",
        }
      : buttonStyle === "ghost"
      ? {
          border:
            "1px solid transparent",
          background:
            isDark
              ? "rgba(255,255,255,0.08)"
              : "rgba(124,58,237,0.08)",
          color:
            accentColor,
          boxShadow:
            "none",
        }
      : {
          border:
            "1px solid transparent",
          background:
            accentColor,
          color:
            isDark
              ? "#111827"
              : "#ffffff",
          boxShadow:
            isDark
              ? "0 8px 24px rgba(0,0,0,0.12)"
              : "0 8px 24px rgba(124,58,237,0.22)",
        };
  return (
    <section
      className="hero-preview"
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        minHeight: `${Math.max(
          260,
          verticalPadding * 2 + 180
        )}px`,
        boxSizing: "border-box",
        backgroundColor,
        color: textColor,
        fontFamily,
        textAlign,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent:
          textAlign === "left"
            ? "flex-start"
            : textAlign === "right"
            ? "flex-end"
            : "center",
        padding: `${verticalPadding}px 40px`,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: `${contentWidth}${contentWidthUnit}`,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: alignment,
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px 12px",
            marginBottom: "18px",
            borderRadius: "999px",
            background:
              isDark
                ? "rgba(255,255,255,0.12)"
                : "rgba(124,58,237,0.10)",
            color:
              accentColor,
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Welcome
        </span>
        <h1
          style={{
            width: "100%",
            maxWidth: "850px",
            margin: 0,
            color: textColor,
            fontFamily,
            fontSize:
              "clamp(38px, 6vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing:
              "-0.04em",
            overflowWrap:
              "break-word",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            width: "100%",
            maxWidth: "680px",
            marginTop: "22px",
            marginBottom: 0,
            color:
              secondaryTextColor,
            fontFamily,
            fontSize: "18px",
            lineHeight: 1.7,
            overflowWrap:
              "break-word",
          }}
        >
          {subtitle}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent:
              alignment,
            gap: "12px",
            marginTop: "30px",
          }}
        >
          <a
            href={buttonUrl}
            onClick={(event) =>
              event.preventDefault()
            }
            style={{
              minHeight: "46px",
              display:
                "inline-flex",
              alignItems:
                "center",
              justifyContent:
                "center",
              padding:
                "12px 22px",
              maxWidth: "100%",
              boxSizing:
                "border-box",
              borderRadius:
                "10px",
              fontFamily,
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: 1.2,
              textDecoration:
                "none",
              cursor:
                "pointer",
              transition:
                "transform 0.15s ease, box-shadow 0.15s ease",
              ...primaryButtonStyle,
            }}
          >
            {buttonText}
          </a>
          <button
            type="button"
            style={{
              minHeight: "46px",
              padding:
                "11px 20px",
              maxWidth: "100%",
              boxSizing:
                "border-box",
              border:
                isDark
                  ? "1px solid rgba(255,255,255,0.28)"
                  : "1px solid #d8dbe5",
              borderRadius:
                "10px",
              background:
                isDark
                  ? "rgba(255,255,255,0.08)"
                  : "#ffffff",
              color:
                textColor,
              fontFamily,
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: 1.2,
              cursor:
                "pointer",
              boxShadow:
                isDark
                  ? "none"
                  : "0 4px 14px rgba(15,23,42,0.06)",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          borderRadius:
            "50%",
          background:
            isDark
              ? "rgba(255,255,255,0.06)"
              : "rgba(124,58,237,0.06)",
          top: "-100px",
          right: "-80px",
          pointerEvents:
            "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius:
            "50%",
          border:
            isDark
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(124,58,237,0.08)",
          bottom: "-70px",
          left: "-60px",
          pointerEvents:
            "none",
        }}
      />
    </section>
  );
}
export default HeroPreview;