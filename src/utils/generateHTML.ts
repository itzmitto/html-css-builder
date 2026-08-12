import type { BuilderComponent } from "../types/builder";

export function generateHTML(
  components: BuilderComponent[]
) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
  <title>Exported Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

${components
  .map((component) => {
    switch (component.type) {
      case "Navbar":
        return `
<nav class="navbar">
  <div class="logo">Logo</div>

  <ul class="nav-links">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
`;

      case "Hero":
        return `
<section
  class="hero"
  style="background-color: ${component.backgroundColor || "#ffffff"};"
>
  <h1>${component.heroTitle}</h1>
  <p>${component.heroSubtitle}</p>
  <button>${component.heroButtonText}</button>
</section>
`;

      case "Heading":
        return `
<h1
  class="heading"
  style="
    font-size: ${component.fontSize || 32}px;
    color: ${component.color || "#000000"};
  "
>
  ${component.text}
</h1>
`;

      case "Paragraph":
        return `
<p
  class="paragraph"
  style="
    font-size: ${component.fontSize || 16}px;
    color: ${component.color || "#000000"};
  "
>
  ${component.text}
</p>
`;

      case "Button":
        return `
<button
  class="custom-button"
  style="
    color: ${component.color || "#000000"};
  "
>
  ${component.text}
</button>
`;

      case "Section":
        return `
<section
  class="section"
  style="
    background-color: ${component.backgroundColor || "#ffffff"};
  "
>
</section>
`;

      case "Card":
        return `
<div
  class="card"
  style="
    background-color: ${component.backgroundColor || "#ffffff"};
  "
>
  Card Content
</div>
`;

      case "Container":
        return `
<div
  class="container"
  style="
    min-height: ${component.minHeight || 300}px;
    background-color: ${component.backgroundColor || "#ffffff"};
  "
>
</div>
`;

      case "Image":
        return component.imageUrl
          ? `
<div class="image-container">
  <img
    class="image"
    src="${component.imageUrl}"
    alt="Website image"
  >
</div>
`
          : `
<div class="image-container">
  <div class="image-placeholder">
    Image
  </div>
</div>
`;

      case "Footer":
        return `
<footer class="footer">
  Footer Content
</footer>
`;

      default:
        return "";
    }
  })
  .join("\n")}

</body>
</html>
`;
}