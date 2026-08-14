interface FooterPreviewProps {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
  brandName?: string;
  description?: string;
  newsletterTitle?: string;
  newsletterText?: string;
  copyright?: string;
}
function FooterPreview({
  backgroundColor = "#111827",
  textColor = "#ffffff",
  fontFamily = "Arial",
  textAlign = "center",
  brandName = "Brand",
  description = "Build beautiful websites with a flexible and modern visual editor.",
  newsletterTitle = "Stay in the loop",
  newsletterText = "Get product updates and useful design tips in your inbox.",
  copyright = "© 2026 Brand. All rights reserved.",
}: FooterPreviewProps) {
  const alignment =
    textAlign === "left"
      ? "flex-start"
      : textAlign === "right"
      ? "flex-end"
      : "center";
  const isDark =
    textColor.toLowerCase() === "#ffffff" ||
    textColor.toLowerCase() === "#fff";
  const accentColor =
    isDark
      ? "#ffffff"
      : "#7c3aed";
  const secondaryText =
    isDark
      ? "rgba(255,255,255,0.62)"
      : "rgba(15,23,42,0.58)";
  const subtleBorder =
    isDark
      ? "rgba(255,255,255,0.10)"
      : "rgba(15,23,42,0.10)";
  const surface =
    isDark
      ? "rgba(255,255,255,0.05)"
      : "#ffffff";
  const linkGroups = [
    {
      title: "Product",
      links: [
        "Features",
        "Pricing",
        "Templates",
        "Integrations",
      ],
    },
    {
      title: "Company",
      links: [
        "About",
        "Careers",
        "Blog",
        "Contact",
      ],
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "Help Center",
        "Community",
        "Status",
      ],
    },
  ];
  return (
    <footer
      className="footer-preview"
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        minHeight: "360px",
        padding:
          "56px 40px 24px",
        backgroundColor,
        color: textColor,
        fontFamily,
        textAlign,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(220px, 1.5fr) repeat(3, minmax(120px, 1fr)) minmax(220px, 1.25fr)",
            gap: "34px",
            alignItems: "start",
            textAlign,
          }}
        >
          <div
            style={{
              minWidth: 0,
            }}
          >
            <div
              style={{
                display:
                  "inline-flex",
                alignItems:
                  "center",
                gap: "9px",
                color:
                  textColor,
                fontSize:
                  "22px",
                fontWeight: 800,
                letterSpacing:
                  "-0.03em",
              }}
            >
              <span
                style={{
                  width:
                    "30px",
                  height:
                    "30px",
                  display:
                    "inline-flex",
                  alignItems:
                    "center",
                  justifyContent:
                    "center",
                  borderRadius:
                    "9px",
                  background:
                    accentColor,
                  color:
                    isDark
                      ? "#111827"
                      : "#ffffff",
                  fontSize:
                    "13px",
                  fontWeight: 800,
                }}
              >
                {brandName
                  .charAt(0)
                  .toUpperCase()}
              </span>
              {brandName}
            </div>
            <p
              style={{
                maxWidth:
                  "300px",
                marginTop:
                  "15px",
                color:
                  secondaryText,
                fontSize:
                  "13px",
                lineHeight:
                  1.7,
              }}
            >
              {description}
            </p>
            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "center",
                justifyContent:
                  alignment,
                gap: "8px",
                marginTop:
                  "18px",
              }}
            >
              {[
                "X",
                "in",
                "GH",
              ].map(
                (social) => (
                  <button
                    key={
                      social
                    }
                    type="button"
                    style={{
                      width:
                        "34px",
                      height:
                        "34px",
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      border: `1px solid ${subtleBorder}`,
                      borderRadius:
                        "9px",
                      background:
                        isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(255,255,255,0.8)",
                      color:
                        textColor,
                      fontSize:
                        "11px",
                      fontWeight: 700,
                      cursor:
                        "pointer",
                    }}
                  >
                    {social}
                  </button>
                )
              )}
            </div>
          </div>
          {linkGroups.map(
            (group) => (
              <div
                key={
                  group.title
                }
              >
                <h4
                  style={{
                    margin: 0,
                    marginBottom:
                      "13px",
                    color:
                      textColor,
                    fontSize:
                      "12px",
                    fontWeight: 700,
                    textTransform:
                      "uppercase",
                    letterSpacing:
                      "0.08em",
                  }}
                >
                  {
                    group.title
                  }
                </h4>
                {group.links.map(
                  (item) => (
                    <a
                      key={
                        item
                      }
                      href="#"
                      onClick={(
                        event
                      ) =>
                        event.preventDefault()
                      }
                      style={{
                        display:
                          "block",
                        marginBottom:
                          "9px",
                        color:
                          secondaryText,
                        fontSize:
                          "13px",
                        lineHeight:
                          1.4,
                        textDecoration:
                          "none",
                      }}
                    >
                      {
                        item
                      }
                    </a>
                  )
                )}
              </div>
            )
          )}
          <div
            style={{
              minWidth: 0,
            }}
          >
            <h4
              style={{
                margin: 0,
                marginBottom:
                  "10px",
                color:
                  textColor,
                fontSize:
                  "15px",
                fontWeight: 700,
              }}
            >
              {
                newsletterTitle
              }
            </h4>
            <p
              style={{
                margin: 0,
                color:
                  secondaryText,
                fontSize:
                  "12px",
                lineHeight:
                  1.6,
              }}
            >
              {
                newsletterText
              }
            </p>
            <div
              style={{
                display:
                  "flex",
                width:
                  "100%",
                marginTop:
                  "14px",
                gap: "7px",
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                style={{
                  flex: 1,
                  minWidth: 0,
                  height:
                    "40px",
                  padding:
                    "0 11px",
                  border: `1px solid ${subtleBorder}`,
                  borderRadius:
                    "8px",
                  outline:
                    "none",
                  background:
                    isDark
                      ? "rgba(255,255,255,0.06)"
                      : surface,
                  color:
                    textColor,
                  fontFamily,
                  fontSize:
                    "12px",
                  boxSizing:
                    "border-box",
                }}
              />
              <button
                type="button"
                style={{
                  flexShrink: 0,
                  height:
                    "40px",
                  padding:
                    "0 13px",
                  border:
                    "none",
                  borderRadius:
                    "8px",
                  background:
                    accentColor,
                  color:
                    isDark
                      ? "#111827"
                      : "#ffffff",
                  fontFamily,
                  fontSize:
                    "12px",
                  fontWeight: 700,
                  cursor:
                    "pointer",
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            marginTop:
              "42px",
            marginBottom:
              "18px",
            background:
              subtleBorder,
          }}
        />
        <div
          style={{
            display:
              "flex",
            alignItems:
              "center",
            justifyContent:
              "space-between",
            flexWrap:
              "wrap",
            gap: "10px",
            color:
              secondaryText,
            fontSize:
              "11px",
          }}
        >
          <span>
            {copyright}
          </span>
          <div
            style={{
              display:
                "flex",
              alignItems:
                "center",
              gap: "16px",
            }}
          >
            {[
              "Privacy",
              "Terms",
              "Cookies",
            ].map(
              (item) => (
                <a
                  key={
                    item
                  }
                  href="#"
                  onClick={(
                    event
                  ) =>
                    event.preventDefault()
                  }
                  style={{
                    color:
                      "inherit",
                    textDecoration:
                      "none",
                  }}
                >
                  {
                    item
                  }
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{
          position:
            "absolute",
          width:
            "320px",
          height:
            "320px",
          right:
            "-150px",
          bottom:
            "-170px",
          borderRadius:
            "50%",
          background:
            isDark
              ? "rgba(255,255,255,0.035)"
              : "rgba(124,58,237,0.04)",
          pointerEvents:
            "none",
        }}
      />
    </footer>
  );
}
export default FooterPreview;