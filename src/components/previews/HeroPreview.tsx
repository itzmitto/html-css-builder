interface HeroPreviewProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundColor?: string;
}

function HeroPreview({
  title = "Hero Title",
  subtitle = "Hero Subtitle goes here",
  buttonText = "Get Started",
  backgroundColor = "#f8fafc",
}: HeroPreviewProps) {
  return (
    <div
      className="hero-preview"
      style={{
        backgroundColor,
      }}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default HeroPreview;