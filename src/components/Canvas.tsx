import { BuilderComponent } from "../types/builder";

interface CanvasProps {
    components: BuilderComponent[];
    selectedId: string | null;
    setSelectedId: (id: string) => void;
}

function Canvas({
    components,
    selectedId,
    setSelectedId,
}: CanvasProps) {
    return (
        <main className="canvas">
            <div className="canvas-header">
                <button>Desktop</button>
                <button>Tablet</button>
                <button>Mobile</button>
            </div>

            <div className="desktop-preview">
                {components.length === 0 && (
                    <div className="empty-state">
                        Voeg componenten toe vanuit de sidebar
                    </div>
                )}

                {components.map((component) => (
                    <div
                        key={component.id}
                        className={
                            selectedId === component.id
                                ? "builder-component selected"
                                : "builder-component"
                        }
                        onClick={() => setSelectedId(component.id)}
                    >
                        {component.type === "Navbar" && (
                            <div className="navbar-preview">
                                <div className="logo">Logo</div>

                                <div className="nav-links">
                                    <span>Home</span>
                                    <span>About</span>
                                    <span>Services</span>
                                    <span>Contact</span>
                                </div>
                            </div>
                        )}

                        {component.type === "Hero" && (
                            <div className="hero-preview">
                                <h1>Hero Title</h1>
                                <p>Hero Subtitle goes here</p>
                                <button>Get Started</button>
                            </div>
                        )}

                        {component.type === "Section" && (
                            <div className="section-preview">
                                <h2>Section Title</h2>
                                <p>Section content...</p>
                            </div>
                        )}

                        {component.type === "Card" && (
                            <div className="card-preview">
                                <h3>Card Title</h3>
                                <p>Card description</p>
                                <button className="button-preview">
                                    Learn More
                                </button>
                            </div>
                        )}

                        {component.type === "Footer" && (
                            <div className="footer-preview">
                                Footer Content
                            </div>
                        )}

                        {component.type === "Heading" && (
                            <h1 className="heading-preview">
                                {component.text}
                            </h1>
                        )}

                        {component.type === "Paragraph" && (
                            <p className="paragraph-preview">
                                {component.text}
                            </p>
                        )}

                        {component.type === "Button" && (
                            <button className="button-preview">
                                {component.text}
                            </button>
                        )}

                        {component.type === "Container" && (
                            <div className="container-preview">
                                Container
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Canvas;