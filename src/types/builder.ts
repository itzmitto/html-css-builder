export type ComponentType =
  | "Navbar"
  | "Hero"
  | "Section"
  | "Card"
  | "Footer"
  | "Heading"
  | "Paragraph"
  | "Button"
  | "Container"
  | "Image";

export interface BuilderStyles {
  width?: number;
  widthUnit?: "%" | "px";
  height?: number;
  heightUnit?: "%" | "px";
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  display?: "block" | "flex" | "grid";
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch";
  gap?: number;
  backgroundColor?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: "left" | "center" | "right";
  borderWidth?: number;
  borderStyle?: "none" | "solid" | "dashed" | "dotted";
  borderColor?: string;
  borderRadius?: number;
  opacity?: number;
  overflow?: "visible" | "hidden" | "auto";
  zIndex?: number;
}

export interface BuilderComponent {
  id: string;
  type: ComponentType;
  text?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroButtonText?: string;
  minHeight?: number;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageBorderRadius?: number;
  styles?: BuilderStyles;
}