import type { BuilderComponent } from "../types/builder";

import NavbarPreview from "./previews/NavbarPreview";
import HeroPreview from "./previews/HeroPreview";
import SectionPreview from "./previews/SectionPreview";
import CardPreview from "./previews/CardPreview";
import FooterPreview from "./previews/FooterPreview";
import HeadingPreview from "./previews/HeadingPreview";
import ParagraphPreview from "./previews/ParagraphPreview";
import ButtonPreview from "./previews/ButtonPreview";
import ContainerPreview from "./previews/ContainerPreview";

interface PreviewRendererProps {
  component: BuilderComponent;
}

function PreviewRenderer({
  component,
}: PreviewRendererProps) {

  switch (component.type) {
    case "Navbar":
      return <NavbarPreview />;

    case "Hero":
      return (
        <HeroPreview
          title={component.heroTitle}
          subtitle={component.heroSubtitle}
          buttonText={component.heroButtonText}
          backgroundColor={component.backgroundColor}
        />
      );

    case "Section":
      return <SectionPreview />;

    case "Card":
      return <CardPreview />;

    case "Footer":
      return <FooterPreview />;

    case "Heading":
      return (
        <HeadingPreview
          text={component.text}
          fontSize={component.fontSize}
          color={component.color}
        />
      );

    case "Paragraph":
      return (
        <ParagraphPreview
          text={component.text}
          fontSize={component.fontSize}
          color={component.color}
        />
      );

    case "Button":
      return (
        <ButtonPreview
          text={component.text}
          color={component.color}
        />
      );

    case "Container":
      return (
        <ContainerPreview
          minHeight={component.minHeight}
        />
      );

    default:
      return null;
  }
}

export default PreviewRenderer;