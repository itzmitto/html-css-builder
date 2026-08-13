import type { CSSProperties } from "react";
import type {
  BuilderComponent,
  BuilderStyles,
  DeviceType,
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
  device?: DeviceType;
}

function getResponsiveStyles(
  component: BuilderComponent,
  device: DeviceType
): BuilderStyles {
  const baseStyles =
    component.styles ?? {};
  if (device === "desktop") {
    return baseStyles;
  }
  const deviceStyles =
    component.responsive?.[device] ?? {};
  return {
    ...baseStyles,
    ...deviceStyles,
  };
}

function getBuilderStyle(
  styles?: BuilderStyles
): CSSProperties {
  if (!styles) {
    return {};
  }
  const maxWidth =
    styles.maxWidth !== undefined &&
    styles.maxWidth > 0
      ? `${styles.maxWidth}${styles.maxWidthUnit ?? "px"}`
      : undefined;
  const minHeight =
    styles.minHeight !== undefined &&
    styles.minHeight > 0
      ? `${styles.minHeight}${styles.minHeightUnit ?? "px"}`
      : undefined;
  const horizontalAlign =
    styles.horizontalAlign ?? "left";
  const horizontalAlignmentStyles: CSSProperties =
    horizontalAlign === "center"
      ? {
          marginLeft: "auto",
          marginRight: "auto",
        }
      : horizontalAlign === "right"
      ? {
          marginLeft: "auto",
          marginRight:
            styles.marginRight !== undefined
              ? `${styles.marginRight}px`
              : "0",
        }
      : {
          marginLeft:
            styles.marginLeft !== undefined
              ? `${styles.marginLeft}px`
              : "0",
          marginRight:
            styles.marginRight !== undefined
              ? `${styles.marginRight}px`
              : "0",
        };
  return {
    width:
      styles.width !== undefined
        ? `${styles.width}${styles.widthUnit ?? "%"}`
        : undefined,
    height:
      styles.height !== undefined
        ? `${styles.height}${styles.heightUnit ?? "px"}`
        : undefined,
    maxWidth,
    minHeight,
    marginTop:
      styles.marginTop !== undefined
        ? `${styles.marginTop}px`
        : undefined,
    marginBottom:
      styles.marginBottom !== undefined
        ? `${styles.marginBottom}px`
        : undefined,
    ...horizontalAlignmentStyles,
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
    flexDirection:
      styles.display === "flex"
        ? styles.flexDirection
        : undefined,
    justifyContent:
      styles.display === "flex"
        ? styles.justifyContent
        : undefined,
    alignItems:
      styles.display === "flex"
        ? styles.alignItems
        : undefined,
    gap:
      styles.gap !== undefined
        ? `${styles.gap}px`
        : undefined,
    gridTemplateColumns:
      styles.display === "grid" &&
      styles.gridColumns !== undefined
        ? `repeat(${styles.gridColumns}, minmax(0, 1fr))`
        : undefined,
    gridGap:
      styles.display === "grid" &&
      styles.gridGap !== undefined
        ? `${styles.gridGap}px`
        : undefined,
    backgroundColor:
      styles.backgroundColor,
    color:
      styles.color,
    fontFamily:
      styles.fontFamily,
    fontSize:
      styles.fontSize !== undefined
        ? `${styles.fontSize}px`
        : undefined,
    fontWeight:
      styles.fontWeight,
    lineHeight:
      styles.lineHeight,
    letterSpacing:
      styles.letterSpacing !== undefined
        ? `${styles.letterSpacing}px`
        : undefined,
    textAlign:
      styles.textAlign,
    borderWidth:
      styles.borderWidth !== undefined
        ? `${styles.borderWidth}px`
        : undefined,
    borderStyle:
      styles.borderStyle,
    borderColor:
      styles.borderColor,
    borderRadius:
      styles.borderRadius !== undefined
        ? `${styles.borderRadius}px`
        : undefined,
    opacity:
      styles.opacity,
    overflow:
      styles.overflow,
    zIndex:
      styles.zIndex,
    boxSizing:
      "border-box",
  };
}

function PreviewRenderer({
  component,
  device = "desktop",
}: PreviewRendererProps) {
  const styles =
    getResponsiveStyles(
      component,
      device
    );
  const builderStyle =
    getBuilderStyle(styles);
  const backgroundColor =
    styles.backgroundColor ||
    component.backgroundColor ||
    "#ffffff";
  const textColor =
    styles.color ||
    component.color ||
    "#000000";
  const fontFamily =
    styles.fontFamily ||
    "Arial";
  const textAlign =
    styles.textAlign ||
    "left";
  const children =
    component.children ?? [];

  const renderChildren = () => {
    if (children.length === 0) {
      return null;
    }
    return children.map(
      (child) => (
        <div
          key={child.id}
          style={{
            width: "100%",
            minWidth: 0,
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <PreviewRenderer
            component={child}
            device={device}
          />
        </div>
      )
    );
  };

  const getLayoutDefaults = () => {
    if (component.type === "Row") {
      return {
        display: "flex" as const,
        flexDirection: "row" as const,
        gap: 16,
      };
    }
    if (component.type === "Stack") {
      return {
        display: "flex" as const,
        flexDirection: "column" as const,
        gap: 16,
      };
    }
    return {
      display:
        styles.display ?? "block",
      flexDirection:
        styles.flexDirection,
      gap:
        styles.gap,
    };
  };

  if (
    component.type === "Container" ||
    component.type === "Row" ||
    component.type === "Stack"
  ) {
    const layoutDefaults =
      getLayoutDefaults();

    const layoutStyle: CSSProperties = {
      ...builderStyle,
      display:
        styles.display ??
        layoutDefaults.display,
      flexDirection:
        styles.display === "flex"
          ? styles.flexDirection ??
            layoutDefaults.flexDirection
          : layoutDefaults.flexDirection,
      gap:
        styles.gap !== undefined
          ? `${styles.gap}px`
          : `${layoutDefaults.gap ?? 0}px`,
      justifyContent:
        styles.display === "flex" ||
        component.type === "Row" ||
        component.type === "Stack"
          ? styles.justifyContent
          : undefined,
      alignItems:
        styles.display === "flex" ||
        component.type === "Row" ||
        component.type === "Stack"
          ? styles.alignItems
          : undefined,
      backgroundColor,
      position: "relative",
      boxSizing: "border-box",
      minWidth: 0,
    };

    if (component.type === "Container") {
      layoutStyle.width =
        styles.width !== undefined
          ? `${styles.width}${styles.widthUnit ?? "%"}`
          : "100%";
    }

    if (
      component.type === "Row" ||
      component.type === "Stack"
    ) {
      layoutStyle.width =
        styles.width !== undefined
          ? `${styles.width}${styles.widthUnit ?? "%"}`
          : "100%";
    }

    const hasChildren =
      children.length > 0;

    return (
      <div style={layoutStyle}>
        {!hasChildren &&
          component.type ===
            "Container" && (
            <ContainerPreview
              minHeight={
                component.minHeight ??
                styles.height
              }
            />
          )}

        {!hasChildren &&
          (component.type ===
            "Row" ||
            component.type ===
              "Stack") && (
            <div
              style={{
                width: "100%",
                minHeight:
                  component.type ===
                  "Row"
                    ? 100
                    : 150,
                display:
                  "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                border:
                  "2px dashed #cbd5e1",
                borderRadius:
                  "8px",
                color:
                  "#64748b",
                fontSize:
                  "13px",
                boxSizing:
                  "border-box",
              }}
            >
              {component.type ===
              "Row"
                ? "Drop components into this Row"
                : "Drop components into this Stack"}
            </div>
          )}

        {hasChildren && (
          <div
            style={{
              width: "100%",
              minWidth: 0,
              boxSizing:
                "border-box",
              display:
                layoutStyle.display,
              flexDirection:
                layoutStyle.flexDirection,
              justifyContent:
                layoutStyle.justifyContent,
              alignItems:
                layoutStyle.alignItems,
              gap:
                layoutStyle.gap,
              gridTemplateColumns:
                styles.display ===
                  "grid" &&
                styles.gridColumns !==
                  undefined
                  ? `repeat(${styles.gridColumns}, minmax(0, 1fr))`
                  : undefined,
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
        position:
          "relative",
        boxSizing:
          "border-box",
        minWidth: 0,
      }}
    >
      {component.type ===
        "Navbar" && (
        <NavbarPreview
          backgroundColor={
            backgroundColor
          }
          textColor={
            textColor
          }
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
          textColor={
            textColor
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
        "Section" && (
        <SectionPreview
          backgroundColor={
            backgroundColor
          }
          textColor={
            textColor
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
        "Card" && (
        <CardPreview
          backgroundColor={
            backgroundColor
          }
          textColor={
            textColor
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
        "Footer" && (
        <FooterPreview
          backgroundColor={
            backgroundColor ||
            "#111827"
          }
          textColor={
            styles.color ||
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
          text={
            component.text
          }
          fontSize={
            styles.fontSize ??
            component.fontSize
          }
          color={
            styles.color ??
            component.color
          }
          fontFamily={
            styles.fontFamily
          }
          fontWeight={
            styles.fontWeight
          }
          lineHeight={
            styles.lineHeight
          }
          letterSpacing={
            styles.letterSpacing
          }
          textAlign={
            styles.textAlign
          }
        />
      )}

      {component.type ===
        "Paragraph" && (
        <ParagraphPreview
          text={
            component.text
          }
          fontSize={
            styles.fontSize ??
            component.fontSize
          }
          color={
            styles.color ??
            component.color
          }
          fontFamily={
            styles.fontFamily
          }
          fontWeight={
            styles.fontWeight
          }
          lineHeight={
            styles.lineHeight
          }
          letterSpacing={
            styles.letterSpacing
          }
          textAlign={
            styles.textAlign
          }
        />
      )}

      {component.type ===
        "Button" && (
        <ButtonPreview
          text={
            component.text
          }
          color={
            styles.color ??
            component.color
          }
          fontSize={
            styles.fontSize
          }
          fontFamily={
            styles.fontFamily
          }
          fontWeight={
            styles.fontWeight
          }
          lineHeight={
            styles.lineHeight
          }
          letterSpacing={
            styles.letterSpacing
          }
          textAlign={
            styles.textAlign
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

      {children.length > 0 && (
        <div
          style={{
            width: "100%",
            marginTop: "8px",
            minWidth: 0,
          }}
        >
          {renderChildren()}
        </div>
      )}
    </div>
  );
}

export default PreviewRenderer;