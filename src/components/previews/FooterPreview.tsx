interface FooterPreviewProps {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
}

function FooterPreview({
  backgroundColor = "#111827",
  textColor = "#ffffff",
  fontFamily = "Arial",
  textAlign = "center",
}: FooterPreviewProps) {
  return (
    <footer
      className="footer-preview"
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
      Footer Content
    </footer>
  );
}

export default FooterPreview;