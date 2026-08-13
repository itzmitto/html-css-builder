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

function generateNavbarLinks(
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
    .map(
      (link) =>
        `    <li><a href="${escapeHtml(
          link.url
        )}">${escapeHtml(
          link.label
        )}</a></li>`
    )
    .join("\n");
}

function generateComponentHTML(
  component: BuilderComponent
): string {
  const style =
    getStyleString(
      component.styles
    );

  const styleAttribute =
    style
      ? ` style="${style}"`
      : "";

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
      return `
<nav class="navbar"${styleAttribute}>
  <div class="logo">
    ${escapeHtml(
      component.navbar?.logoText ??
      component.text ??
      "Logo"
    )}
  </div>
  <ul class="nav-links">
${generateNavbarLinks(component)}
  </ul>
</nav>
`;

    case "Hero":
      return `
<section class="hero"${styleAttribute}>
  <h1>${escapeHtml(
    component.heroTitle ??
      "Hero Title"
  )}</h1>
  <p>${escapeHtml(
    component.heroSubtitle ??
      "Hero Subtitle goes here"
  )}</p>
  <button>${escapeHtml(
    component.heroButtonText ??
      "Get Started"
  )}</button>
  ${childrenHTML}
</section>
`;

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
<button
  class="custom-button"${styleAttribute}
>
  ${escapeHtml(
    component.text ??
      "Button"
  )}
</button>
`;

    case "Section":
      return `
<section class="section"${styleAttribute}>
  ${childrenHTML}
</section>
`;

    case "Card":
      return `
<div class="card"${styleAttribute}>
  <h3>Card Title</h3>
  <p>Card Content</p>
  ${childrenHTML}
</div>
`;

    case "Container":
      return `
<div
  class="container"${layoutAttributes}${responsiveAttributes}${styleAttribute}
>
  ${children.length > 0
    ? childrenHTML
    : "Container"}
</div>
`;

    case "Row":
      return `
<div
  class="row"${layoutAttributes}${responsiveAttributes}${styleAttribute}
>
  ${children.length > 0
    ? childrenHTML
    : "Row"}
</div>
`;

    case "Stack":
      return `
<div
  class="stack"${layoutAttributes}${responsiveAttributes}${styleAttribute}
>
  ${children.length > 0
    ? childrenHTML
    : "Stack"}
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
    src="${escapeHtml(
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
      return `
<footer class="footer"${styleAttribute}>
  Footer Content
  ${childrenHTML}
</footer>
`;

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