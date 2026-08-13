interface CardPreviewProps {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
}

function CardPreview({
  backgroundColor = "#ffffff",
  textColor = "#000000",
  fontFamily = "Arial",
  textAlign = "left",
}: CardPreviewProps) {
  return (
    <div
      className="card-preview"
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        height: "100%",
        boxSizing: "border-box",
        backgroundColor,
        color: textColor,
        fontFamily,
        textAlign,
        overflow: "hidden",
      }}
    >
      <h3
        style={{
          color: textColor,
          fontFamily,
        }}
      >
        Card Title
      </h3>

      <p
        style={{
          color: textColor,
          fontFamily,
        }}
      >
        Card description
      </p>

      <button
        className="button-preview"
        type="button"
        style={{
          maxWidth: "100%",
          boxSizing: "border-box",
          fontFamily,
        }}
      >
        Learn More
      </button>
    </div>
  );
}

export default CardPreview;