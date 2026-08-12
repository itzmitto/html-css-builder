import type { ComponentType } from "../types/builder";

interface SidebarProps {
  addComponent: (type: ComponentType) => void;
}

function Sidebar({ addComponent }: SidebarProps) {
  return (
    <aside className="sidebar">
      <h2>Components</h2>

      <button onClick={() => addComponent("Navbar")}>
        Navbar
      </button>

      <button onClick={() => addComponent("Hero")}>
        Hero
      </button>

      <button onClick={() => addComponent("Section")}>
        Section
      </button>

      <button onClick={() => addComponent("Card")}>
        Card
      </button>

      <button onClick={() => addComponent("Footer")}>
        Footer
      </button>

      <hr />

      <button onClick={() => addComponent("Heading")}>
        Heading
      </button>

      <button onClick={() => addComponent("Paragraph")}>
        Paragraph
      </button>

      <button onClick={() => addComponent("Button")}>
        Button
      </button>

      <button onClick={() => addComponent("Container")}>
        Container
      </button>

      <button onClick={() => addComponent("Image")}>
        Image
      </button>
    </aside>
  );
}

export default Sidebar;