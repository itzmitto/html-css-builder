import type { NavbarLink } from "../../types/builder";

interface NavbarPreviewProps {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
  logoText?: string;
  logoSize?: number;
  navGap?: number;
  height?: number;
  padding?: number;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  boxShadow?: string;
  sticky?: boolean;
  links?: NavbarLink[];
}

function NavbarPreview({
  backgroundColor = "#ffffff",
  textColor = "#000000",
  fontFamily = "Arial",
  textAlign = "left",
  logoText = "Logo",
  logoSize = 20,
  navGap = 24,
  height = 72,
  padding = 20,
  borderRadius = 10,
  borderColor = "#e4e7ef",
  borderWidth = 1,
  boxShadow = "0 4px 16px rgba(15, 23, 42, 0.06)",
  sticky = false,
  links = [
    {
      id: "home",
      label: "Home",
      url: "#",
    },
    {
      id: "about",
      label: "About",
      url: "#",
    },
    {
      id: "services",
      label: "Services",
      url: "#",
    },
    {
      id: "contact",
      label: "Contact",
      url: "#",
    },
  ],
}: NavbarPreviewProps) {
  const navAlignment =
    textAlign === "center"
      ? "center"
      : textAlign === "right"
      ? "flex-end"
      : "flex-start";

  return (
    <nav
      className="navbar-preview"
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        minHeight: `${height}px`,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: `${navGap}px`,
        padding: `0 ${padding}px`,
        backgroundColor,
        color: textColor,
        fontFamily,
        border:
          borderWidth > 0
            ? `${borderWidth}px solid ${borderColor}`
            : "none",
        borderRadius: `${borderRadius}px`,
        boxShadow:
          boxShadow &&
          boxShadow !== "none"
            ? boxShadow
            : "none",
        overflow: "hidden",
        position: sticky
          ? "sticky"
          : "relative",
        top: sticky
          ? 0
          : undefined,
        zIndex: sticky
          ? 100
          : undefined,
      }}
    >
      <div
        className="logo"
        style={{
          flexShrink: 0,
          minWidth: 0,
          color: textColor,
          fontFamily,
          fontSize: `${logoSize}px`,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        {logoText}
      </div>

      <div
        className="nav-links"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: navAlignment,
          gap: `${navGap}px`,
          minWidth: 0,
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            onClick={(event) =>
              event.preventDefault()
            }
            style={{
              color: textColor,
              fontFamily,
              fontSize: "14px",
              fontWeight: 500,
              whiteSpace: "nowrap",
              cursor: "pointer",
              opacity: 0.8,
              textDecoration:
                "none",
              transition:
                "opacity 0.15s ease, color 0.15s ease",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        style={{
          flexShrink: 0,
          padding: "9px 15px",
          border: "none",
          borderRadius: "8px",
          background:
            textColor === "#ffffff"
              ? "#ffffff"
              : "#7c3aed",
          color:
            textColor === "#ffffff"
              ? "#111827"
              : "#ffffff",
          fontFamily,
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        Get Started
      </button>
    </nav>
  );
}

export default NavbarPreview;