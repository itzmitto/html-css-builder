import { BuilderComponent } from "../types/builder";

interface PropertiesProps {
    selectedComponent?: BuilderComponent;
    updateText: (value: string) => void;
}

function Properties({
    selectedComponent,
    updateText,
}: PropertiesProps) {
    return (
        <aside className="properties">
            <h2>Properties</h2>

            {selectedComponent ? (
                <>
                    <p>Type</p>

                    <div
                        style={{
                            background: "#374151",
                            padding: "10px",
                            borderRadius: "8px",
                            marginBottom: "20px",
                        }}
                    >
                        {selectedComponent.type}
                    </div>

                    {(selectedComponent.type === "Heading" ||
                        selectedComponent.type === "Paragraph" ||
                        selectedComponent.type === "Button") && (
                            <>
                                <p>Text</p>

                                <input
                                    type="text"
                                    value={selectedComponent.text || ""}
                                    onChange={(e) =>
                                        updateText(e.target.value)
                                    }
                                />
                            </>
                        )}
                </>
            ) : (
                <p>Selecteer een component</p>
            )}
        </aside>
    );
}

export default Properties;