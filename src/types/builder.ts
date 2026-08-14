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
  | "Row"
  | "Stack"
  | "Image";

export type DeviceType =
  | "desktop"
  | "tablet"
  | "mobile";

export interface BuilderStyles {
  width?: number;
  widthUnit?: "%" | "px";
  height?: number;
  heightUnit?: "%" | "px";
  maxWidth?: number;
  maxWidthUnit?: "%" | "px";
  minHeight?: number;
  minHeightUnit?: "%" | "px";
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
  horizontalAlign?: "left" | "center" | "right";
  gap?: number;
  gridColumns?: number;
  gridGap?: number;
  backgroundColor?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: "left" | "center" | "right";
  borderWidth?: number;
  borderStyle?:
    | "none"
    | "solid"
    | "dashed"
    | "dotted";
  borderColor?: string;
  borderRadius?: number;
  opacity?: number;
  overflow?:
    | "visible"
    | "hidden"
    | "auto";
  zIndex?: number;
}

export interface ResponsiveStyles {
  desktop?: BuilderStyles;
  tablet?: Partial<BuilderStyles>;
  mobile?: Partial<BuilderStyles>;
}

export interface NavbarLink {
  id: string;
  label: string;
  url: string;
  openInNewTab?: boolean;
}

export interface NavbarSettings {
  logoText?: string;
  logoSize?: number;
  navGap?: number;
  height?: number;
  padding?: number;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  boxShadow?: string;
  sticky?: boolean;
  links?: NavbarLink[];
}

export interface HeroSettings {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  buttonStyle?:
    | "solid"
    | "outline"
    | "ghost";
  contentWidth?: number;
  contentWidthUnit?: "px" | "%";
  verticalPadding?: number;
  textAlign?:
    | "left"
    | "center"
    | "right";
}

export interface SectionSettings {
  title?: string;
  content?: string;
  contentWidth?: number;
  contentWidthUnit?: "px" | "%";
  textAlign?:
    | "left"
    | "center"
    | "right";
}

export interface CardSettings {
  title?: string;
  content?: string;
  buttonText?: string;
  buttonUrl?: string;
  showButton?: boolean;
  imageUrl?: string;
  textAlign?:
    | "left"
    | "center"
    | "right";
}

export interface FooterSettings {
  brandName?: string;
  description?: string;
  copyright?: string;
  showNewsletter?: boolean;
  newsletterTitle?: string;
  newsletterDescription?: string;
  textAlign?:
    | "left"
    | "center"
    | "right";
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
  navbar?: NavbarSettings;
  hero?: HeroSettings;
  section?: SectionSettings;
  card?: CardSettings;
  footer?: FooterSettings;
  styles?: BuilderStyles;
  responsive?: ResponsiveStyles;
  children?: BuilderComponent[];
}