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
  const alignment =
    textAlign === "left"
      ? "flex-start"
      : textAlign === "right"
      ? "flex-end"
      : "center";

  const secondaryText =
    textColor === "#ffffff"
      ? "rgba(255,255,255,0.62)"
      : textColor;

  const subtleBorder =
    textColor === "#ffffff"
      ? "rgba(255,255,255,0.10)"
      : "rgba(15,23,42,0.10)";

  return (
    <footer
      className="footer-preview"
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        minHeight: "360px",
        padding: "52px 40px 24px",
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
              "minmax(220px, 1.5fr) repeat(3, minmax(120px, 1fr)) minmax(220px, 1.3fr)",
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
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
                color: textColor,
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "28px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  background:
                    textColor === "#ffffff"
                      ? "#ffffff"
                      : "#7c3aed",
                  color:
                    textColor === "#ffffff"
                      ? "#111827"
                      : "#ffffff",
                  fontSize: "13px",
                  fontWeight: 800,
                }}
              >
                A
              </span>
              Brand
            </div>

            <p
              style={{
                maxWidth: "300px",
                marginTop: "15px",
                color: secondaryText,
                fontSize: "13px",
                lineHeight: 1.7,
              }}
            >
              Build beautiful websites with a
              flexible and modern visual editor.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent:
                  alignment,
                gap: "8px",
                marginTop: "18px",
              }}
            >
              {[
                "X",
                "in",
                "GH",
              ].map((social) => (
                <button
                  key={social}
                  type="button"
                  style={{
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${subtleBorder}`,
                    borderRadius: "9px",
                    background:
                      textColor === "#ffffff"
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(255,255,255,0.7)",
                    color: textColor,
                    fontSize: "11px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                margin: 0,
                marginBottom: "13px",
                color: textColor,
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Product
            </h4>

            {[
              "Features",
              "Pricing",
              "Templates",
              "Integrations",
            ].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "block",
                  marginBottom: "9px",
                  color: secondaryText,
                  fontSize: "13px",
                  lineHeight: 1.4,
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4
              style={{
                margin: 0,
                marginBottom: "13px",
                color: textColor,
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Company
            </h4>

            {[
              "About",
              "Careers",
              "Blog",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "block",
                  marginBottom: "9px",
                  color: secondaryText,
                  fontSize: "13px",
                  lineHeight: 1.4,
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4
              style={{
                margin: 0,
                marginBottom: "13px",
                color: textColor,
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Resources
            </h4>

            {[
              "Documentation",
              "Help Center",
              "Community",
              "Status",
            ].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "block",
                  marginBottom: "9px",
                  color: secondaryText,
                  fontSize: "13px",
                  lineHeight: 1.4,
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div
            style={{
              minWidth: 0,
            }}
          >
            <h4
              style={{
                margin: 0,
                marginBottom: "10px",
                color: textColor,
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Stay in the loop
            </h4>

            <p
              style={{
                margin: 0,
                color: secondaryText,
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              Get product updates and useful
              design tips in your inbox.
            </p>

            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "14px",
                gap: "7px",
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: "40px",
                  padding: "0 11px",
                  border: `1px solid ${subtleBorder}`,
                  borderRadius: "8px",
                  outline: "none",
                  background:
                    textColor === "#ffffff"
                      ? "rgba(255,255,255,0.06)"
                      : "#ffffff",
                  color: textColor,
                  fontFamily,
                  fontSize: "12px",
                  boxSizing:
                    "border-box",
                }}
              />

              <button
                type="button"
                style={{
                  flexShrink: 0,
                  height: "40px",
                  padding: "0 13px",
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
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
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
            marginTop: "42px",
            marginBottom: "18px",
            background: subtleBorder,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            color: secondaryText,
            fontSize: "11px",
          }}
        >
          <span>
            © 2026 Brand. All rights reserved.
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Privacy
            </a>

            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Terms
            </a>

            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          right: "-150px",
          bottom: "-170px",
          borderRadius: "50%",
          background:
            textColor === "#ffffff"
              ? "rgba(255,255,255,0.035)"
              : "rgba(124,58,237,0.04)",
          pointerEvents: "none",
        }}
      />
    </footer>
  );
}

export default FooterPreview;