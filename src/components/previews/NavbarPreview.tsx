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
        backgroundColor,
        color: textColor,
        fontFamily,
      }}
    >
      <div
        className="logo"
        style={{
          color: textColor,
          fontFamily,
        }}
      >
        Logo
      </div>

      <div
        className="nav-links"
        style={{
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