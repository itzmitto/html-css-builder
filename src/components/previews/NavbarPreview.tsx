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
  ctaText?: string;
  ctaUrl?: string;
  showCta?: boolean;
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
    },
  ],
  ctaText = "Get Started",
  ctaUrl = "#",
  showCta = true,
}: NavbarPreviewProps) {
  const navAlignment =
    textAlign === "center"
      ? "center"
      : textAlign === "right"
      ? "flex-end"
      : "flex-start";

  const isDark =
    textColor.toLowerCase() === "#ffffff" ||
    textColor.toLowerCase() === "#fff";

  const primaryButtonBackground =
    isDark
      ? "#ffffff"
      : "#7c3aed";

  const primaryButtonColor =
    isDark
      ? "#111827"
      : "#ffffff";

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
      <a
        href="#"
        onClick={(event) =>
          event.preventDefault()
        }
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
          textDecoration: "none",
          cursor: "pointer",
          maxWidth: "35%",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {logoText}
      </a>

      <div
        className="nav-links"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: navAlignment,
          gap: `${navGap}px`,
          minWidth: 0,
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        {links.length > 0 ? (
          links.map((link) => (
            <a
              key={link.id}
              href={link.url || "#"}
              target={
                link.openInNewTab
                  ? "_blank"
                  : undefined
              }
              rel={
                link.openInNewTab
                  ? "noreferrer"
                  : undefined
              }
              onClick={(event) => {
                event.preventDefault();
              }}
              style={{
                color: textColor,
                fontFamily,
                fontSize: "14px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                cursor: "pointer",
                opacity: 0.78,
                textDecoration: "none",
                transition:
                  "opacity 0.15s ease, transform 0.15s ease",
              }}
            >
              {link.label ||
                "Untitled"}
            </a>
          ))
        ) : (
          <span
            style={{
              color: textColor,
              opacity: 0.45,
              fontSize: "13px",
              fontFamily,
            }}
          >
            No navigation links
          </span>
        )}
      </div>

      {showCta && (
        <a
          href={ctaUrl || "#"}
          onClick={(event) =>
            event.preventDefault()
          }
          style={{
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "38px",
            padding: "9px 15px",
            border: "none",
            borderRadius: "8px",
            background:
              primaryButtonBackground,
            color:
              primaryButtonColor,
            fontFamily,
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
            textDecoration: "none",
            transition:
              "transform 0.15s ease, opacity 0.15s ease",
          }}
        >
          {ctaText}
        </a>
      )}
    </nav>
  );
}

export default NavbarPreview;