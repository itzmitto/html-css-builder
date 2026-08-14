import type {
  BuilderComponent,
  BuilderStyles,
} from "../types/builder";

function escapeHtml(
  value: string = ""
) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(
  value: string = ""
) {
  return escapeHtml(value);
}

function getStyleString(
  styles?: BuilderStyles
) {
  if (!styles) {
    return "";
  }

  const css: string[] = [];

  if (styles.width !== undefined) {
    css.push(
      `width: ${styles.width}${styles.widthUnit ?? "%"};`
    );
  }

  if (styles.height !== undefined) {
    css.push(
      `height: ${styles.height}${styles.heightUnit ?? "px"};`
    );
  }

  if (
    styles.maxWidth !== undefined &&
    styles.maxWidth > 0
  ) {
    css.push(
      `max-width: ${styles.maxWidth}${styles.maxWidthUnit ?? "px"};`
    );
  }

  if (
    styles.minHeight !== undefined &&
    styles.minHeight > 0
  ) {
    css.push(
      `min-height: ${styles.minHeight}${styles.minHeightUnit ?? "px"};`
    );
  }

  if (styles.marginTop !== undefined) {
    css.push(
      `margin-top: ${styles.marginTop}px;`
    );
  }

  if (styles.marginRight !== undefined) {
    css.push(
      `margin-right: ${styles.marginRight}px;`
    );
  }

  if (styles.marginBottom !== undefined) {
    css.push(
      `margin-bottom: ${styles.marginBottom}px;`
    );
  }

  if (styles.marginLeft !== undefined) {
    css.push(
      `margin-left: ${styles.marginLeft}px;`
    );
  }

  if (styles.paddingTop !== undefined) {
    css.push(
      `padding-top: ${styles.paddingTop}px;`
    );
  }

  if (styles.paddingRight !== undefined) {
    css.push(
      `padding-right: ${styles.paddingRight}px;`
    );
  }

  if (styles.paddingBottom !== undefined) {
    css.push(
      `padding-bottom: ${styles.paddingBottom}px;`
    );
  }

  if (styles.paddingLeft !== undefined) {
    css.push(
      `padding-left: ${styles.paddingLeft}px;`
    );
  }

  if (styles.display !== undefined) {
    css.push(
      `display: ${styles.display};`
    );
  }

  if (
    styles.display === "flex" &&
    styles.flexDirection
  ) {
    css.push(
      `flex-direction: ${styles.flexDirection};`
    );
  }

  if (
    styles.display === "flex" &&
    styles.justifyContent
  ) {
    css.push(
      `justify-content: ${styles.justifyContent};`
    );
  }

  if (
    styles.display === "flex" &&
    styles.alignItems
  ) {
    css.push(
      `align-items: ${styles.alignItems};`
    );
  }

  if (styles.gap !== undefined) {
    css.push(
      `gap: ${styles.gap}px;`
    );
  }

  if (
    styles.display === "grid" &&
    styles.gridColumns !== undefined
  ) {
    css.push(
      `grid-template-columns: repeat(${styles.gridColumns}, minmax(0, 1fr));`
    );
  }

  if (
    styles.display === "grid" &&
    styles.gridGap !== undefined
  ) {
    css.push(
      `column-gap: ${styles.gridGap}px;`
    );

    css.push(
      `row-gap: ${styles.gridGap}px;`
    );
  }

  if (styles.backgroundColor) {
    css.push(
      `background-color: ${styles.backgroundColor};`
    );
  }

  if (styles.color) {
    css.push(
      `color: ${styles.color};`
    );
  }

  if (styles.fontFamily) {
    css.push(
      `font-family: ${styles.fontFamily};`
    );
  }

  if (styles.fontSize !== undefined) {
    css.push(
      `font-size: ${styles.fontSize}px;`
    );
  }

  if (styles.fontWeight !== undefined) {
    css.push(
      `font-weight: ${styles.fontWeight};`
    );
  }

  if (styles.lineHeight !== undefined) {
    css.push(
      `line-height: ${styles.lineHeight};`
    );
  }

  if (
    styles.letterSpacing !== undefined
  ) {
    css.push(
      `letter-spacing: ${styles.letterSpacing}px;`
    );
  }

  if (styles.textAlign) {
    css.push(
      `text-align: ${styles.textAlign};`
    );
  }

  if (styles.borderWidth !== undefined) {
    css.push(
      `border-width: ${styles.borderWidth}px;`
    );
  }

  if (styles.borderStyle) {
    css.push(
      `border-style: ${styles.borderStyle};`
    );
  }

  if (styles.borderColor) {
    css.push(
      `border-color: ${styles.borderColor};`
    );
  }

  if (styles.borderRadius !== undefined) {
    css.push(
      `border-radius: ${styles.borderRadius}px;`
    );
  }

  if (styles.opacity !== undefined) {
    css.push(
      `opacity: ${styles.opacity};`
    );
  }

  if (styles.overflow) {
    css.push(
      `overflow: ${styles.overflow};`
    );
  }

  if (styles.zIndex !== undefined) {
    css.push(
      `z-index: ${styles.zIndex};`
    );
  }

  if (
    styles.horizontalAlign ===
    "center"
  ) {
    css.push(
      `margin-left: auto;`
    );

    css.push(
      `margin-right: auto;`
    );
  }

  if (
    styles.horizontalAlign ===
    "right"
  ) {
    css.push(
      `margin-left: auto;`
    );
  }

  css.push(
    `box-sizing: border-box;`
  );

  return css.join(" ");
}

function getStyleAttribute(
  styles?: BuilderStyles
) {
  const style =
    getStyleString(styles);

  return style
    ? ` style="${escapeAttribute(
        style
      )}"`
    : "";
}

function getLayoutAttributes(
  component: BuilderComponent
) {
  const styles =
    component.styles;

  if (
    component.type !==
      "Container" &&
    component.type !==
      "Row" &&
    component.type !==
      "Stack"
  ) {
    return "";
  }

  if (
    styles?.display ===
    "grid"
  ) {
    const columns =
      styles.gridColumns ??
      1;

    return ` data-layout="grid" data-columns="${columns}"`;
  }

  if (
    component.type ===
    "Row"
  ) {
    return ` data-layout="row"`;
  }

  if (
    component.type ===
    "Stack"
  ) {
    return ` data-layout="stack"`;
  }

  return ` data-layout="vertical"`;
}

function getResponsiveAttributes(
  component: BuilderComponent
) {
  const tabletStyles =
    component.responsive?.tablet;

  const mobileStyles =
    component.responsive?.mobile;

  const attributes: string[] = [];

  if (
    tabletStyles &&
    tabletStyles.display ===
      "grid"
  ) {
    attributes.push(
      `data-tablet-columns="${tabletStyles.gridColumns ?? 1}"`
    );
  }

  if (
    mobileStyles &&
    mobileStyles.display ===
      "grid"
  ) {
    attributes.push(
      `data-mobile-columns="${mobileStyles.gridColumns ?? 1}"`
    );
  }

  return attributes.length > 0
    ? ` ${attributes.join(" ")}`
    : "";
}

function getNavbarLinks(
  component: BuilderComponent
) {
  const links =
    component.navbar?.links ??
    [
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
    ];

  return links
    .map((link) => {
      const target =
        link.openInNewTab
          ? ` target="_blank" rel="noopener noreferrer"`
          : "";

      return `      <li>
        <a href="${escapeAttribute(
          link.url
        )}"${target}>
          ${escapeHtml(
            link.label
          )}
        </a>
      </li>`;
    })
    .join("\n");
}

function generateNavbarHTML(
  component: BuilderComponent,
  styleAttribute: string,
  childrenHTML: string
) {
  const navbar =
    component.navbar;

  const logo =
    navbar?.logoText ??
    component.text ??
    "Logo";

  const linksHTML =
    getNavbarLinks(
      component
    );

  return `
<nav class="navbar"${styleAttribute}>
  <div class="navbar-inner">
    <a
      class="logo"
      href="#"
    >
      ${escapeHtml(logo)}
    </a>
    <ul class="nav-links">
${linksHTML}
    </ul>
    <a
      class="navbar-cta"
      href="#contact"
    >
      Get Started
    </a>
  </div>
  ${childrenHTML}
</nav>
`;
}

function generateHeroHTML(
  component: BuilderComponent,
  styleAttribute: string,
  childrenHTML: string
) {
  const hero =
    component.hero;

  const title =
    hero?.title ??
    component.heroTitle ??
    "Hero Title";

  const subtitle =
    hero?.subtitle ??
    component.heroSubtitle ??
    "Hero Subtitle goes here";

  const buttonText =
    hero?.buttonText ??
    component.heroButtonText ??
    "Get Started";

  const buttonUrl =
    hero?.buttonUrl ??
    "#";

  const buttonStyle =
    hero?.buttonStyle ??
    "solid";

  const contentWidth =
    hero?.contentWidth ??
    900;

  const contentWidthUnit =
    hero?.contentWidthUnit ??
    "px";

  const verticalPadding =
    hero?.verticalPadding ??
    80;

  const textAlign =
    hero?.textAlign ??
    "center";

  return `
<section
  class="hero"
  data-button-style="${buttonStyle}"
  data-text-align="${textAlign}"
  style="--hero-content-width: ${contentWidth}${contentWidthUnit}; --hero-padding-y: ${verticalPadding}px;${styleAttribute.replace(
    /^ style="/,
    ""
  )}"
>
  <div class="hero-content">
    <span class="hero-badge">
      Welcome
    </span>
    <h1>
      ${escapeHtml(title)}
    </h1>
    <p>
      ${escapeHtml(subtitle)}
    </p>
    <div class="hero-actions">
      <a
        class="hero-primary-button"
        href="${escapeAttribute(
          buttonUrl
        )}"
      >
        ${escapeHtml(
          buttonText
        )}
      </a>
      <a
        class="hero-secondary-button"
        href="#"
      >
        Learn More
      </a>
    </div>
  </div>
  <div
    class="hero-decoration hero-decoration-top"
    aria-hidden="true"
  ></div>
  <div
    class="hero-decoration hero-decoration-bottom"
    aria-hidden="true"
  ></div>
  ${childrenHTML}
</section>
`;
}

function generateSectionHTML(
  component: BuilderComponent,
  styleAttribute: string,
  childrenHTML: string
) {
  const section =
    component.section;

  const title =
    section?.title ??
    component.text ??
    "Section Title";

  const content =
    section?.content ??
    "Section content goes here. Add more components inside this section to build your page.";

  const contentWidth =
    section?.contentWidth ??
    1100;

  const contentWidthUnit =
    section?.contentWidthUnit ??
    "px";

  const textAlign =
    section?.textAlign ??
    "left";

  return `
<section
  class="section"
  data-text-align="${textAlign}"
  style="--section-content-width: ${contentWidth}${contentWidthUnit};${styleAttribute.replace(
    /^ style="/,
    ""
  )}"
>
  <div class="section-content">
    <span class="section-badge">
      Section
    </span>
    <h2>
      ${escapeHtml(title)}
    </h2>
    <p>
      ${escapeHtml(content)}
    </p>
    <div class="section-actions">
      <span class="section-feature">
        <span class="section-feature-dot"></span>
        Modern &amp; flexible
      </span>
      <a
        class="section-button"
        href="#"
      >
        Explore
      </a>
    </div>
  </div>
  <div
    class="section-decoration section-decoration-top"
    aria-hidden="true"
  ></div>
  <div
    class="section-decoration section-decoration-bottom"
    aria-hidden="true"
  ></div>
  ${childrenHTML}
</section>
`;
}

function generateCardHTML(
  component: BuilderComponent,
  styleAttribute: string,
  childrenHTML: string
) {
  const card =
    component.card;

  const title =
    card?.title ??
    component.text ??
    "Card Title";

  const content =
    card?.content ??
    "Card description goes here. Create a clean and flexible content block for your website.";

  const buttonText =
    card?.buttonText ??
    "Learn More";

  const buttonUrl =
    card?.buttonUrl ??
    "#";

  const showButton =
    card?.showButton ??
    true;

  const imageUrl =
    card?.imageUrl ??
    "";

  const imageHTML =
    imageUrl
      ? `
    <div class="card-image">
      <img
        src="${escapeAttribute(
          imageUrl
        )}"
        alt="${escapeAttribute(
          title
        )}"
      >
    </div>`
      : "";

  const buttonHTML =
    showButton
      ? `
      <div class="card-actions">
        <span class="card-learn-more">
          Learn more
        </span>
        <a
          class="card-button"
          href="${escapeAttribute(
            buttonUrl
          )}"
        >
          ${escapeHtml(
            buttonText
          )} →
        </a>
      </div>`
      : "";

  return `
<article class="card"${styleAttribute}>
  ${imageHTML}
  <div class="card-topline">
    <span class="card-badge">
      Featured
    </span>
    <span class="card-number">
      01
    </span>
  </div>
  <div class="card-content">
    <h3>
      ${escapeHtml(title)}
    </h3>
    <p>
      ${escapeHtml(content)}
    </p>
  </div>
  <div class="card-tags">
    <span>Modern</span>
    <span>Flexible</span>
  </div>
  ${buttonHTML}
  <div
    class="card-decoration"
    aria-hidden="true"
  ></div>
  ${childrenHTML}
</article>
`;
}

function generateFooterHTML(
  component: BuilderComponent,
  styleAttribute: string,
  childrenHTML: string
) {
  const footer =
    component.footer;

  const brandName =
    footer?.brandName ??
    component.text ??
    "Brand";

  const description =
    footer?.description ??
    "Build beautiful websites with a flexible and modern visual editor.";

  const newsletterTitle =
    footer?.newsletterTitle ??
    "Stay in the loop";

  const newsletterDescription =
    footer?.newsletterDescription ??
    "Subscribe for updates and new content.";

  const copyright =
    footer?.copyright ??
    "© 2026 Brand. All rights reserved.";

  const showNewsletter =
    footer?.showNewsletter ??
    false;

  const newsletterHTML =
    showNewsletter
      ? `
      <div class="footer-newsletter">
        <h4>
          ${escapeHtml(
            newsletterTitle
          )}
        </h4>
        <p>
          ${escapeHtml(
            newsletterDescription
          )}
        </p>
        <div class="footer-newsletter-form">
          <input
            type="email"
            placeholder="Email address"
          >
          <button type="button">
            Join
          </button>
        </div>
      </div>`
      : "";

  const socialLinks = [
    "X",
    "in",
    "GH",
  ];

  return `
<footer class="footer"${styleAttribute}>
  <div class="footer-content">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-title">
          <span class="footer-brand-icon">
            ${escapeHtml(
              brandName
                .charAt(0)
                .toUpperCase()
            )}
          </span>
          <span>
            ${escapeHtml(
              brandName
            )}
          </span>
        </div>
        <p>
          ${escapeHtml(
            description
          )}
        </p>
        <div class="footer-socials">
          ${socialLinks
            .map(
              (social) =>
                `<a href="#" aria-label="${escapeAttribute(
                  social
                )}">${social}</a>`
            )
            .join("")}
        </div>
      </div>

      <div class="footer-column">
        <h4>Product</h4>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Templates</a>
        <a href="#">Integrations</a>
      </div>

      <div class="footer-column">
        <h4>Company</h4>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>

      <div class="footer-column">
        <h4>Resources</h4>
        <a href="#">Documentation</a>
        <a href="#">Help Center</a>
        <a href="#">Community</a>
        <a href="#">Status</a>
      </div>

      ${newsletterHTML}
    </div>

    <div class="footer-divider"></div>

    <div class="footer-bottom">
      <span>
        ${escapeHtml(
          copyright
        )}
      </span>

      <div class="footer-legal">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>

  <div
    class="footer-decoration"
    aria-hidden="true"
  ></div>

  ${childrenHTML}
</footer>
`;
}

function generateComponentHTML(
  component: BuilderComponent
): string {
  const styleAttribute =
    getStyleAttribute(
      component.styles
    );

  const layoutAttributes =
    getLayoutAttributes(
      component
    );

  const responsiveAttributes =
    getResponsiveAttributes(
      component
    );

  const children =
    component.children ?? [];

  const childrenHTML =
    children
      .map((child) =>
        generateComponentHTML(
          child
        )
      )
      .join("\n");

  switch (
    component.type
  ) {
    case "Navbar":
      return generateNavbarHTML(
        component,
        styleAttribute,
        childrenHTML
      );

    case "Hero":
      return generateHeroHTML(
        component,
        styleAttribute,
        childrenHTML
      );

    case "Heading":
      return `
<h1 class="heading"${styleAttribute}>
  ${escapeHtml(
    component.text ??
      "Heading"
  )}
</h1>
`;

    case "Paragraph":
      return `
<p class="paragraph"${styleAttribute}>
  ${escapeHtml(
    component.text ??
      "Paragraph"
  )}
</p>
`;

    case "Button":
      return `
<a
  class="custom-button"
  href="#"
${styleAttribute}
>
  ${escapeHtml(
    component.text ??
      "Button"
  )}
</a>
`;

    case "Section":
      return generateSectionHTML(
        component,
        styleAttribute,
        childrenHTML
      );

    case "Card":
      return generateCardHTML(
        component,
        styleAttribute,
        childrenHTML
      );

    case "Container":
      return `
<div
  class="container"${layoutAttributes}${responsiveAttributes}${styleAttribute}
>
  ${
    children.length > 0
      ? childrenHTML
      : "Container"
  }
</div>
`;

    case "Row":
      return `
<div
  class="row"${layoutAttributes}${responsiveAttributes}${styleAttribute}
>
  ${
    children.length > 0
      ? childrenHTML
      : "Row"
  }
</div>
`;

    case "Stack":
      return `
<div
  class="stack"${layoutAttributes}${responsiveAttributes}${styleAttribute}
>
  ${
    children.length > 0
      ? childrenHTML
      : "Stack"
  }
</div>
`;

    case "Image":
      return component.imageUrl
        ? `
<div
  class="image-container"${styleAttribute}
>
  <img
    class="image"
    src="${escapeAttribute(
      component.imageUrl
    )}"
    alt="Website image"
  >
</div>
`
        : `
<div
  class="image-container"${styleAttribute}
>
  <div class="image-placeholder">
    Image
  </div>
</div>
`;

    case "Footer":
      return generateFooterHTML(
        component,
        styleAttribute,
        childrenHTML
      );

    default:
      return "";
  }
}

export function generateHTML(
  components: BuilderComponent[]
) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
  <title>Exported Website</title>
  <link
    rel="stylesheet"
    href="style.css"
  >
</head>
<body>
${components
  .map((component) =>
    generateComponentHTML(
      component
    )
  )
  .join("\n")}
</body>
</html>`;
}