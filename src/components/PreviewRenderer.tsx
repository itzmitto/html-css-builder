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
    backgroundColor:
      styles.backgroundColor,
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
    boxSizing: "border-box",
  };
}

function PreviewRenderer({
  component,
}: PreviewRendererProps) {
  const styles =
    component.styles;

  const builderStyle =
    getBuilderStyle(styles);

  const backgroundColor =
    styles?.backgroundColor ||
    component.backgroundColor;

  const textColor =
    styles?.color ||
    component.color ||
    "#000000";

  const fontFamily =
    styles?.fontFamily ||
    "Arial";

  const textAlign =
    styles?.textAlign ||
    "left";

  const children =
    component.children ?? [];

  const renderChildren =
    () => {
      if (
        children.length === 0
      ) {
        return null;
      }

      return children.map(
        (child) => (
          <div
            key={child.id}
            style={{
              width: "100%",
              boxSizing:
                "border-box",
              position:
                "relative",
            }}
          >
            <PreviewRenderer
              component={child}
            />
          </div>
        )
      );
    };

  if (
    component.type ===
    "Container"
  ) {
    return (
      <div
        style={{
          ...builderStyle,
          width:
            builderStyle.width ??
            "100%",
          minHeight:
            builderStyle.height ??
            `${component.minHeight ?? 300}px`,
          backgroundColor:
            backgroundColor ||
            "#ffffff",
          position:
            "relative",
          boxSizing:
            "border-box",
        }}
      >
        {children.length ===
        0 ? (
          <ContainerPreview
            minHeight={
              component.minHeight ??
              styles?.height
            }
          />
        ) : (
          <div
            style={{
              width: "100%",
              minHeight:
                "100%",
              display:
                styles?.display ??
                "block",
              flexDirection:
                styles?.flexDirection,
              justifyContent:
                styles?.justifyContent,
              alignItems:
                styles?.alignItems,
              gap:
                styles?.gap !==
                undefined
                  ? `${styles.gap}px`
                  : undefined,
              boxSizing:
                "border-box",
            }}
          >
            {renderChildren()}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        ...builderStyle,
        position: "relative",
        boxSizing:
          "border-box",
      }}
    >
      {component.type ===
        "Navbar" && (
        <NavbarPreview
          backgroundColor={
            backgroundColor ||
            "#ffffff"
          }
          textColor={textColor}
          fontFamily={
            fontFamily
          }
          textAlign={
            textAlign
          }
        />
      )}

      {component.type ===
        "Hero" && (
        <HeroPreview
          title={
            component.heroTitle
          }
          subtitle={
            component.heroSubtitle
          }
          buttonText={
            component.heroButtonText
          }
          backgroundColor={
            backgroundColor ||
            "#f8fafc"
          }
          textColor={textColor}
          fontFamily={
            fontFamily
          }
          textAlign={
            textAlign as
              | "left"
              | "center"
              | "right"
          }
        />
      )}

      {component.type ===
        "Section" && (
        <SectionPreview
          backgroundColor={
            backgroundColor ||
            "#ffffff"
          }
          textColor={textColor}
          fontFamily={
            fontFamily
          }
          textAlign={
            textAlign as
              | "left"
              | "center"
              | "right"
          }
        />
      )}

      {component.type ===
        "Card" && (
        <CardPreview
          backgroundColor={
            backgroundColor ||
            "#ffffff"
          }
          textColor={textColor}
          fontFamily={
            fontFamily
          }
          textAlign={
            textAlign as
              | "left"
              | "center"
              | "right"
          }
        />
      )}

      {component.type ===
        "Footer" && (
        <FooterPreview
          backgroundColor={
            backgroundColor ||
            "#111827"
          }
          textColor={
            styles?.color ||
            "#ffffff"
          }
          fontFamily={
            fontFamily
          }
          textAlign={
            textAlign as
              | "left"
              | "center"
              | "right"
          }
        />
      )}

      {component.type ===
        "Heading" && (
        <HeadingPreview
          text={component.text}
          fontSize={
            styles?.fontSize ??
            component.fontSize
          }
          color={
            styles?.color ??
            component.color
          }
          fontFamily={
            styles?.fontFamily
          }
          fontWeight={
            styles?.fontWeight
          }
          lineHeight={
            styles?.lineHeight
          }
          letterSpacing={
            styles?.letterSpacing
          }
          textAlign={
            styles?.textAlign
          }
        />
      )}

      {component.type ===
        "Paragraph" && (
        <ParagraphPreview
          text={component.text}
          fontSize={
            styles?.fontSize ??
            component.fontSize
          }
          color={
            styles?.color ??
            component.color
          }
          fontFamily={
            styles?.fontFamily
          }
          fontWeight={
            styles?.fontWeight
          }
          lineHeight={
            styles?.lineHeight
          }
          letterSpacing={
            styles?.letterSpacing
          }
          textAlign={
            styles?.textAlign
          }
        />
      )}

      {component.type ===
        "Button" && (
        <ButtonPreview
          text={component.text}
          color={
            styles?.color ??
            component.color
          }
          fontSize={
            styles?.fontSize
          }
          fontFamily={
            styles?.fontFamily
          }
          fontWeight={
            styles?.fontWeight
          }
          lineHeight={
            styles?.lineHeight
          }
          letterSpacing={
            styles?.letterSpacing
          }
          textAlign={
            styles?.textAlign
          }
        />
      )}

      {component.type ===
        "Image" && (
        <ImagePreview
          imageUrl={
            component.imageUrl
          }
          width={
            component.imageWidth
          }
          height={
            component.imageHeight
          }
          borderRadius={
            component.imageBorderRadius
          }
        />
      )}
    </div>
  );
}

export default PreviewRenderer;