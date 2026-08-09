interface HeroPreviewProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

function HeroPreview({
  title = "Hero Title",
  subtitle = "Hero Subtitle goes here",
  buttonText = "Get Started",
}: HeroPreviewProps) {
  return (
    <div className="hero-preview">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default HeroPreview;