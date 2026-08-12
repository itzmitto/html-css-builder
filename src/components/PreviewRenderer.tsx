import type { CSSProperties } from "react";
import type {
  BuilderComponent,
  BuilderStyles,
} from "../types/builder";
import NavbarPreview from "./previews/NavbarPreview";
import HeroPreview from "./previews/HeroPreview";
import SectionPreview from "./previews/SectionPreview";
import CardPreview from "./previews/CardPreview";
import FooterPreview from "./previews/FooterPreview";
import HeadingPreview from "./previews/HeadingPreview";
import ParagraphPreview from "./previews/ParagraphPreview";
import ButtonPreview from "./previews/ButtonPreview";
import ContainerPreview from "./previews/ContainerPreview";
import ImagePreview from "./previews/ImagePreview";

interface PreviewRendererProps {
  component: BuilderComponent;
}

function getBuilderStyle(
  styles?: BuilderStyles
): CSSProperties {
  if (!styles) {
    return {};
  }

  return {
    width:
      styles.width !== undefined
        ? `${styles.width}${styles.widthUnit ?? "%"}`
        : undefined,
    height:
      styles.height !== undefined
        ? `${styles.height}${styles.heightUnit ?? "px"}`
        : undefined,
    marginTop:
      styles.marginTop !== undefined
        ? `${styles.marginTop}px`
        : undefined,
    marginRight:
      styles.marginRight !== undefined
        ? `${styles.marginRight}px`
        : undefined,
    marginBottom:
      styles.marginBottom !== undefined
        ? `${styles.marginBottom}px`
        : undefined,
    marginLeft:
      styles.marginLeft !== undefined
        ? `${styles.marginLeft}px`
        : undefined,
    paddingTop:
      styles.paddingTop !== undefined
        ? `${styles.paddingTop}px`
        : undefined,
    paddingRight:
      styles.paddingRight !== undefined
        ? `${styles.paddingRight}px`
        : undefined,
    paddingBottom:
      styles.paddingBottom !== undefined
        ? `${styles.paddingBottom}px`
        : undefined,
    paddingLeft:
      styles.paddingLeft !== undefined
        ? `${styles.paddingLeft}px`
        : undefined,
    display: styles.display,
    flexDirection: styles.flexDirection,
    justifyContent: styles.justifyContent,
    alignItems: styles.alignItems,
    gap:
      styles.gap !== undefined
        ? `${styles.gap}px`
        : undefined,
    backgroundColor: styles.backgroundColor,
    color: styles.color,
    fontFamily: styles.fontFamily,
    fontSize:
      styles.fontSize !== undefined
        ? `${styles.fontSize}px`
        : undefined,
    fontWeight: styles.fontWeight,
    lineHeight: styles.lineHeight,
    letterSpacing:
      styles.letterSpacing !== undefined
        ? `${styles.letterSpacing}px`
        : undefined,
    textAlign: styles.textAlign,
    borderWidth:
      styles.borderWidth !== undefined
        ? `${styles.borderWidth}px`
        : undefined,
    borderStyle: styles.borderStyle,
    borderColor: styles.borderColor,
    borderRadius:
      styles.borderRadius !== undefined
        ? `${styles.borderRadius}px`
        : undefined,
    opacity: styles.opacity,
    overflow: styles.overflow,
    zIndex: styles.zIndex,
  };
}

function PreviewRenderer({
  component,
}: PreviewRendererProps) {
  const builderStyle = getBuilderStyle(
    component.styles
  );

  return (
    <div
      style={{
        ...builderStyle,
        minHeight:
          component.type === "Container"
            ? undefined
            : builderStyle.height,
      }}
    >
      {component.type === "Navbar" && (
        <NavbarPreview />
      )}

      {component.type === "Hero" && (
        <HeroPreview
          title={component.heroTitle}
          subtitle={component.heroSubtitle}
          buttonText={component.heroButtonText}
          backgroundColor={
            component.backgroundColor
          }
        />
      )}

      {component.type === "Section" && (
        <SectionPreview />
      )}

      {component.type === "Card" && (
        <CardPreview />
      )}

      {component.type === "Footer" && (
        <FooterPreview />
      )}

      {component.type === "Heading" && (
        <HeadingPreview
          text={component.text}
          fontSize={component.fontSize}
          color={component.color}
        />
      )}

      {component.type === "Paragraph" && (
        <ParagraphPreview
          text={component.text}
          fontSize={component.fontSize}
          color={component.color}
        />
      )}

      {component.type === "Button" && (
        <ButtonPreview
          text={component.text}
          color={component.color}
        />
      )}

      {component.type === "Container" && (
        <ContainerPreview
          minHeight={
            component.minHeight
          }
        />
      )}

      {component.type === "Image" && (
        <ImagePreview
          imageUrl={component.imageUrl}
        />
      )}
    </div>
  );
}

export default PreviewRenderer;