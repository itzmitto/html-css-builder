import type { BuilderComponent } from "../types/builder";

export function generateHTML(
    components: BuilderComponent[]
) {
    return components
        .map((component) => {
            switch (component.type) {
                case "Navbar":
                    return `
<nav>
  <div>Logo</div>
  <ul>
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
<h1>${component.text}</h1>
`;

                case "Paragraph":
                    return `
<p>${component.text}</p>
`;

                case "Button":
                    return `
<button>${component.text}</button>
`;

                case "Footer":
                    return `
<footer>
  Footer Content
</footer>
`;

                default:
                    return "";
            }
        })
        .join("\n");
}