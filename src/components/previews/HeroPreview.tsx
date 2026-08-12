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
        backgroundColor,
        color: textColor,
        fontFamily,
        textAlign,
      }}
    >
      <h1
        style={{
          color: textColor,
          fontFamily,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          color: textColor,
          fontFamily,
        }}
      >
        {subtitle}
      </p>

      <button
        style={{
          fontFamily,
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default HeroPreview;