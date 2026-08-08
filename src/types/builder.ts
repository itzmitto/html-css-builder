export type ComponentType =
  | "Navbar"
  | "Hero"
  | "Section"
  | "Card"
  | "Footer"
  | "Heading"
  | "Paragraph"
  | "Button"
  | "Container";

export interface BuilderComponent {
  id: string;
  type: ComponentType;
  text?: string;
  minHeight?: number;
}