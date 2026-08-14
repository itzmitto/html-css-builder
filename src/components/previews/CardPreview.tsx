interface CardPreviewProps {
  title?: string;
  content?: string;
  buttonText?: string;
  buttonUrl?: string;
  showButton?: boolean;
  imageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
}
function CardPreview({
  title = "Card Title",
  content = "Card description goes here. Create a clean and flexible content block for your website.",
  buttonText = "Learn More",
  buttonUrl = "#",
  showButton = true,
  imageUrl = "",
  backgroundColor = "#ffffff",
  textColor = "#000000",
  fontFamily = "Arial",
  textAlign = "left",
}: CardPreviewProps) {
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
      ? "rgba(255,255,255,0.78)"
      : "rgba(15,23,42,0.62)";
  return (
    <article
      className="card-preview"
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        minHeight: "280px",
        height: "100%",
        boxSizing: "border-box",
        padding: "24px",
        backgroundColor,
        color: textColor,
        fontFamily,
        textAlign,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {imageUrl && (
        <div
          style={{
            width: "100%",
            height: "170px",
            marginBottom: "20px",
            borderRadius: "12px",
            overflow: "hidden",
            background:
              isDark
                ? "rgba(255,255,255,0.06)"
                : "#f5f3fa",
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:
            textAlign === "right"
              ? "flex-end"
              : textAlign === "center"
              ? "center"
              : "space-between",
          gap: "10px",
          width: "100%",
          marginBottom: "18px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px 9px",
            borderRadius: "999px",
            background:
              isDark
                ? "rgba(255,255,255,0.10)"
                : "rgba(124,58,237,0.09)",
            color: accentColor,
            fontSize: "10px",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Featured
        </span>
        <span
          style={{
            color: textColor,
            fontSize: "11px",
            fontWeight: 600,
            opacity:
              isDark
                ? 0.65
                : 0.45,
          }}
        >
          01
        </span>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: alignment,
        }}
      >
        <h3
          style={{
            width: "100%",
            margin: 0,
            color: textColor,
            fontFamily,
            fontSize: "24px",
            fontWeight: 750,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            overflowWrap: "break-word",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            width: "100%",
            maxWidth: "520px",
            margin: "12px 0 0",
            color: mutedTextColor,
            fontFamily,
            fontSize: "14px",
            lineHeight: 1.7,
            overflowWrap: "break-word",
          }}
        >
          {content}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:
            textAlign === "right"
              ? "flex-end"
              : textAlign === "center"
              ? "center"
              : "flex-start",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "22px",
        }}
      >
        <span
          style={{
            padding: "7px 10px",
            borderRadius: "8px",
            background:
              isDark
                ? "rgba(255,255,255,0.07)"
                : "#f7f5fb",
            border:
              isDark
                ? "1px solid rgba(255,255,255,0.09)"
                : "1px solid #ece9f4",
            color: textColor,
            fontSize: "11px",
            fontWeight: 600,
          }}
        >
          Modern
        </span>
        <span
          style={{
            padding: "7px 10px",
            borderRadius: "8px",
            background:
              isDark
                ? "rgba(255,255,255,0.07)"
                : "#f7f5fb",
            border:
              isDark
                ? "1px solid rgba(255,255,255,0.09)"
                : "1px solid #ece9f4",
            color: textColor,
            fontSize: "11px",
            fontWeight: 600,
          }}
        >
          Flexible
        </span>
      </div>
      {showButton && (
        <div
          style={{
            marginTop: "auto",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent:
              textAlign === "right"
                ? "flex-end"
                : textAlign === "center"
                ? "center"
                : "space-between",
            gap: "12px",
            width: "100%",
          }}
        >
          <span
            style={{
              color: textColor,
              fontSize: "12px",
              fontWeight: 600,
              opacity:
                isDark
                  ? 0.58
                  : 0.48,
            }}
          >
            Learn more
          </span>
          <a
            href={buttonUrl}
            onClick={(event) =>
              event.preventDefault()
            }
            className="button-preview"
            style={{
              minHeight: "40px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "100%",
              boxSizing: "border-box",
              padding: "9px 15px",
              border:
                isDark
                  ? "1px solid rgba(255,255,255,0.10)"
                  : "1px solid #e5e1ee",
              borderRadius: "9px",
              background:
                isDark
                  ? "rgba(255,255,255,0.09)"
                  : "#ffffff",
              color: textColor,
              fontFamily,
              fontSize: "12px",
              fontWeight: 700,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {buttonText} →
          </a>
        </div>
      )}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "160px",
          height: "160px",
          right: "-70px",
          top: "-70px",
          borderRadius: "50%",
          background:
            isDark
              ? "rgba(255,255,255,0.04)"
              : "rgba(124,58,237,0.045)",
          pointerEvents: "none",
        }}
      />
    </article>
  );
}
export default CardPreview;