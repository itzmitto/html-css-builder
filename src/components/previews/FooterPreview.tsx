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
        backgroundColor,
        color: textColor,
        fontFamily,
        textAlign,
      }}
    >
      Footer Content
    </footer>
  );
}

export default FooterPreview;