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
}