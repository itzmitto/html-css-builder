interface HeroPreviewProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
}

function HeroPreview({
  title = "Hero Title",
  subtitle = "Hero Subtitle goes here",
  buttonText = "Get Started",
  backgroundColor = "#f8fafc",
  textColor = "#000000",
  fontFamily = "Arial",
  textAlign = "center",
}: HeroPreviewProps) {
  return (
    <div
      className="hero-preview"
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        backgroundColor,
        color: textColor,
        fontFamily,
        textAlign,
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          color: textColor,
          fontFamily,
          maxWidth: "100%",
          overflowWrap: "break-word",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          color: textColor,
          fontFamily,
          maxWidth: "100%",
          overflowWrap: "break-word",
        }}
      >
        {subtitle}
      </p>

      <button
        type="button"
        style={{
          maxWidth: "100%",
          boxSizing: "border-box",
          fontFamily,
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default HeroPreview;