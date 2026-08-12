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
<section class="hero">
  <h1>${component.heroTitle}</h1>
  <p>${component.heroSubtitle}</p>
  <button>${component.heroButtonText}</button>
</section>
`;

      case "Heading":
        return `
<h1 class="heading">
  ${component.text}
</h1>
`;

      case "Paragraph":
        return `
<p class="paragraph">
  ${component.text}
</p>
`;

      case "Button":
        return `
<button class="custom-button">
  ${component.text}
</button>
`;

      case "Section":
        return `
<section class="section">
</section>
`;

      case "Card":
        return `
<div class="card">
  Card Content
</div>
`;

      case "Container":
        return `
<div class="container">
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