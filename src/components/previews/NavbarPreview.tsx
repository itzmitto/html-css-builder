interface NavbarPreviewProps {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
}

function NavbarPreview({
  backgroundColor = "#ffffff",
  textColor = "#000000",
  fontFamily = "Arial",
  textAlign = "left",
}: NavbarPreviewProps) {
  return (
    <nav
      className="navbar-preview"
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        backgroundColor,
        color: textColor,
        fontFamily,
        overflow: "hidden",
      }}
    >
      <div
        className="logo"
        style={{
          color: textColor,
          fontFamily,
          minWidth: 0,
        }}
      >
        Logo
      </div>

      <div
        className="nav-links"
        style={{
          minWidth: 0,
          maxWidth: "100%",
          justifyContent:
            textAlign === "center"
              ? "center"
              : textAlign === "right"
              ? "flex-end"
              : "flex-start",
        }}
      >
        <span
          style={{
            color: textColor,
            fontFamily,
          }}
        >
          Home
        </span>

        <span
          style={{
            color: textColor,
            fontFamily,
          }}
        >
          About
        </span>

        <span
          style={{
            color: textColor,
            fontFamily,
          }}
        >
          Services
        </span>

        <span
          style={{
            color: textColor,
            fontFamily,
          }}
        >
          Contact
        </span>
      </div>
    </nav>
  );
}

export default NavbarPreview;