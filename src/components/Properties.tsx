import {
  useState,
  type ChangeEvent,
} from "react";
import type {
  BuilderComponent,
  BuilderStyles,
  DeviceType,
} from "../types/builder";
import LayoutProperties from "./properties/LayoutProperties";
import TypographyProperties from "./properties/TypographyProperties";
import AppearanceProperties from "./properties/AppearanceProperties";

interface PropertiesProps {
  selectedComponent?: BuilderComponent;
  device: DeviceType;
  updateText: (value: string) => void;
  updateFontSize: (value: number) => void;
  updateColor: (value: string) => void;
  updateBackgroundColor: (value: string) => void;
  updateMinHeight: (value: number) => void;
  updateHeroTitle: (value: string) => void;
  updateHeroSubtitle: (value: string) => void;
  updateHeroButtonText: (value: string) => void;
  updateImage: (value: string) => void;
  updateImageWidth: (value: number) => void;
  updateImageHeight: (value: number) => void;
  updateImageBorderRadius: (value: number) => void;
  updateStyles: (
    styles: Partial<BuilderStyles>
  ) => void;
  moveComponentUp: () => void;
  moveComponentDown: () => void;
  duplicateComponent: () => void;
  deleteComponent: () => void;
}

type PropertyTab =
  | "content"
  | "layout"
  | "typography"
  | "appearance"
  | "advanced";

function getDeviceLabel(
  device: DeviceType
) {
  if (device === "desktop") {
    return "Desktop";
  }

  if (device === "tablet") {
    return "Tablet";
  }

  return "Mobile";
}

function Properties({
  selectedComponent,
  device,
  updateText,
  updateFontSize,
  updateColor,
  updateBackgroundColor,
  updateMinHeight,
  updateHeroTitle,
  updateHeroSubtitle,
  updateHeroButtonText,
  updateImage,
  updateImageWidth,
  updateImageHeight,
  updateImageBorderRadius,
  updateStyles,
  moveComponentUp,
  moveComponentDown,
  duplicateComponent,
  deleteComponent,
}: PropertiesProps) {
  const [activeTab, setActiveTab] =
    useState<PropertyTab>("content");

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Selecteer een afbeelding.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        updateImage(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const baseStyles: BuilderStyles =
    selectedComponent?.styles ?? {};

  const responsiveStyles =
    selectedComponent?.responsive?.[device] ??
    {};

  const styles: BuilderStyles = {
    ...baseStyles,
    ...responsiveStyles,
  };

  const showTypography =
    selectedComponent?.type === "Heading" ||
    selectedComponent?.type === "Paragraph" ||
    selectedComponent?.type === "Button";

  const tabs: {
    id: PropertyTab;
    label: string;
  }[] = [
    {
      id: "content",
      label: "Content",
    },
    {
      id: "layout",
      label: "Layout",
    },
    {
      id: "typography",
      label: "Type",
    },
    {
      id: "appearance",
      label: "Style",
    },
    {
      id: "advanced",
      label: "Advanced",
    },
  ];

  const applyContainerLayout = (
    layout:
      | "vertical"
      | "horizontal"
      | "2-columns"
      | "3-columns"
      | "4-columns"
  ) => {
    if (layout === "vertical") {
      updateStyles({
        display: "flex",
        flexDirection: "column",
        gridColumns: undefined,
        gap: 16,
      });

      return;
    }

    if (layout === "horizontal") {
      updateStyles({
        display: "flex",
        flexDirection: "row",
        gridColumns: undefined,
        gap: 16,
      });

      return;
    }

    const columns =
      layout === "2-columns"
        ? 2
        : layout === "3-columns"
        ? 3
        : 4;

    updateStyles({
      display: "grid",
      gridColumns: columns,
      gridGap: 16,
      gap: 16,
      flexDirection: undefined,
      justifyContent: undefined,
      alignItems: undefined,
    });
  };

  const getCurrentContainerLayout = () => {
    if (
      selectedComponent?.type !==
      "Container"
    ) {
      return "vertical";
    }

    if (
      styles.display === "grid"
    ) {
      if (
        styles.gridColumns === 2
      ) {
        return "2-columns";
      }

      if (
        styles.gridColumns === 3
      ) {
        return "3-columns";
      }

      if (
        styles.gridColumns === 4
      ) {
        return "4-columns";
      }

      return "3-columns";
    }

    if (
      styles.display === "flex" &&
      styles.flexDirection ===
        "row"
    ) {
      return "horizontal";
    }

    return "vertical";
  };

  const renderDeviceInfo = () => {
    return (
      <div className="responsive-device-info">
        <span className="responsive-device-label">
          Responsive
        </span>

        <strong>
          {getDeviceLabel(device)}
        </strong>

        {device !== "desktop" && (
          <span className="responsive-device-description">
            Wijzigingen gelden alleen voor{" "}
            {getDeviceLabel(device)}.
          </span>
        )}
      </div>
    );
  };

  const renderContainerLayout = () => {
    if (
      selectedComponent?.type !==
      "Container"
    ) {
      return null;
    }

    const currentLayout =
      getCurrentContainerLayout();

    return (
      <div className="container-layout-section">
        <h3 className="property-section-title">
          Container Layout
        </h3>

        <div className="container-layout-grid">
          <button
            type="button"
            className={
              currentLayout === "vertical"
                ? "container-layout-button active"
                : "container-layout-button"
            }
            onClick={() =>
              applyContainerLayout(
                "vertical"
              )
            }
          >
            <span className="container-layout-icon">
              ☷
            </span>
            <span>Vertical</span>
          </button>

          <button
            type="button"
            className={
              currentLayout === "horizontal"
                ? "container-layout-button active"
                : "container-layout-button"
            }
            onClick={() =>
              applyContainerLayout(
                "horizontal"
              )
            }
          >
            <span className="container-layout-icon">
              ☰
            </span>
            <span>Horizontal</span>
          </button>

          <button
            type="button"
            className={
              currentLayout === "2-columns"
                ? "container-layout-button active"
                : "container-layout-button"
            }
            onClick={() =>
              applyContainerLayout(
                "2-columns"
              )
            }
          >
            <span className="container-layout-icon">
              ▦
            </span>
            <span>2 Columns</span>
          </button>

          <button
            type="button"
            className={
              currentLayout === "3-columns"
                ? "container-layout-button active"
                : "container-layout-button"
            }
            onClick={() =>
              applyContainerLayout(
                "3-columns"
              )
            }
          >
            <span className="container-layout-icon">
              ▦
            </span>
            <span>3 Columns</span>
          </button>

          <button
            type="button"
            className={
              currentLayout === "4-columns"
                ? "container-layout-button active"
                : "container-layout-button"
            }
            onClick={() =>
              applyContainerLayout(
                "4-columns"
              )
            }
          >
            <span className="container-layout-icon">
              ▦
            </span>
            <span>4 Columns</span>
          </button>
        </div>
      </div>
    );
  };

  const renderContentTab = () => {
    if (!selectedComponent) {
      return null;
    }

    return (
      <>
        {renderContainerLayout()}

        {(selectedComponent.type ===
          "Heading" ||
          selectedComponent.type ===
            "Paragraph" ||
          selectedComponent.type ===
            "Button") && (
          <div>
            <h3 className="property-section-title">
              Content
            </h3>

            <label className="property-label">
              Text
            </label>

            <input
              className="property-input"
              type="text"
              value={
                selectedComponent.text ??
                ""
              }
              onChange={(e) =>
                updateText(
                  e.target.value
                )
              }
            />
          </div>
        )}

        {selectedComponent.type ===
          "Hero" && (
          <div>
            <h3 className="property-section-title">
              Hero Content
            </h3>

            <label className="property-label">
              Hero Title
            </label>

            <input
              className="property-input"
              type="text"
              value={
                selectedComponent.heroTitle ??
                ""
              }
              onChange={(e) =>
                updateHeroTitle(
                  e.target.value
                )
              }
            />

            <label className="property-label">
              Hero Subtitle
            </label>

            <input
              className="property-input"
              type="text"
              value={
                selectedComponent.heroSubtitle ??
                ""
              }
              onChange={(e) =>
                updateHeroSubtitle(
                  e.target.value
                )
              }
            />

            <label className="property-label">
              Hero Button Text
            </label>

            <input
              className="property-input"
              type="text"
              value={
                selectedComponent.heroButtonText ??
                ""
              }
              onChange={(e) =>
                updateHeroButtonText(
                  e.target.value
                )
              }
            />
          </div>
        )}

        {selectedComponent.type ===
          "Image" && (
          <div>
            <h3 className="property-section-title">
              Image
            </h3>

            <label className="property-label">
              Upload Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageUpload
              }
              className="property-file"
            />

            <label className="property-label">
              Width
            </label>

            <input
              type="range"
              min="10"
              max="100"
              value={
                selectedComponent.imageWidth ??
                100
              }
              onChange={(e) =>
                updateImageWidth(
                  Number(
                    e.target.value
                  )
                )
              }
              className="property-range"
            />

            <div className="property-value">
              {selectedComponent.imageWidth ??
                100}
              %
            </div>

            <label className="property-label">
              Height
            </label>

            <input
              type="range"
              min="50"
              max="1000"
              value={
                selectedComponent.imageHeight ??
                300
              }
              onChange={(e) =>
                updateImageHeight(
                  Number(
                    e.target.value
                  )
                )
              }
              className="property-range"
            />

            <div className="property-value">
              {selectedComponent.imageHeight ??
                300}
              px
            </div>

            <label className="property-label">
              Border Radius
            </label>

            <input
              type="range"
              min="0"
              max="100"
              value={
                selectedComponent.imageBorderRadius ??
                8
              }
              onChange={(e) =>
                updateImageBorderRadius(
                  Number(
                    e.target.value
                  )
                )
              }
              className="property-range"
            />

            <div className="property-value">
              {selectedComponent.imageBorderRadius ??
                8}
              px
            </div>

            {selectedComponent.imageUrl && (
              <img
                src={
                  selectedComponent.imageUrl
                }
                alt="Selected"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  marginTop: "15px",
                  borderRadius: "8px",
                  display:
                    "block",
                }}
              />
            )}
          </div>
        )}

        {selectedComponent.type ===
          "Container" && (
          <div>
            <h3 className="property-section-title">
              Container
            </h3>

            <div className="container-info">
              <strong>
                Container
              </strong>

              <span>
                Nieuwe componenten worden
                aan deze container
                toegevoegd wanneer deze
                geselecteerd is.
              </span>
            </div>

            <label className="property-label">
              Height
            </label>

            <input
              type="range"
              min="100"
              max="1000"
              value={
                styles.height ??
                selectedComponent.minHeight ??
                300
              }
              onChange={(e) => {
                const value =
                  Number(
                    e.target.value
                  );

                updateMinHeight(
                  value
                );

                updateStyles({
                  height:
                    value,
                  heightUnit:
                    "px",
                });
              }}
              className="property-range"
            />

            <div className="property-value">
              {styles.height ??
                selectedComponent.minHeight ??
                300}
              px
            </div>

            <div className="container-children-info">
              <span className="container-children-count">
                {selectedComponent.children?.length ??
                  0}
              </span>

              <div>
                <strong>
                  Children
                </strong>

                <span>
                  Components inside this
                  container
                </span>
              </div>
            </div>
          </div>
        )}

        {(selectedComponent.type ===
          "Navbar" ||
          selectedComponent.type ===
            "Section" ||
          selectedComponent.type ===
            "Card" ||
          selectedComponent.type ===
            "Footer") && (
          <div className="empty-tab">
            <span>
              Dit component gebruikt
              voornamelijk de Layout,
              Type en Style instellingen.
            </span>
          </div>
        )}
      </>
    );
  };

  const renderAdvancedTab = () => {
    return (
      <div>
        <h3 className="property-section-title">
          CSS
        </h3>

        <label className="property-label">
          Overflow
        </label>

        <select
          value={
            styles.overflow ??
            "visible"
          }
          onChange={(e) =>
            updateStyles({
              overflow:
                e.target.value as
                  | "visible"
                  | "hidden"
                  | "auto",
            })
          }
          className="property-input"
        >
          <option value="visible">
            Visible
          </option>

          <option value="hidden">
            Hidden
          </option>

          <option value="auto">
            Auto
          </option>
        </select>

        <label className="property-label">
          Z-Index
        </label>

        <input
          type="number"
          value={
            styles.zIndex ?? 1
          }
          onChange={(e) =>
            updateStyles({
              zIndex: Number(
                e.target.value
              ),
            })
          }
          className="property-input"
        />

        <h3 className="property-section-title">
          Component
        </h3>

        <div className="component-meta">
          <div className="meta-row">
            <span>
              Type
            </span>

            <strong>
              {
                selectedComponent?.type
              }
            </strong>
          </div>

          <div className="meta-row">
            <span>
              Device
            </span>

            <strong>
              {getDeviceLabel(
                device
              )}
            </strong>
          </div>

          <div className="meta-row">
            <span>
              ID
            </span>

            <strong className="component-id">
              {
                selectedComponent?.id
              }
            </strong>
          </div>

          <div className="meta-row">
            <span>
              Children
            </span>

            <strong>
              {selectedComponent?.children?.length ??
                0}
            </strong>
          </div>
        </div>

        <h3 className="property-section-title">
          Actions
        </h3>

        <button
          type="button"
          onClick={
            moveComponentUp
          }
          className="property-action-button"
        >
          Move Up
        </button>

        <button
          type="button"
          onClick={
            moveComponentDown
          }
          className="property-action-button"
        >
          Move Down
        </button>

        <button
          type="button"
          onClick={
            duplicateComponent
          }
          className="property-action-button"
        >
          Duplicate Component
        </button>

        <button
          type="button"
          onClick={
            deleteComponent
          }
          className="property-action-button danger"
        >
          Delete Component
        </button>
      </div>
    );
  };

  if (
    !selectedComponent
  ) {
    return (
      <aside className="properties">
        <h2>
          Properties
        </h2>

        <div className="no-selection">
          <div className="no-selection-icon">
            +
          </div>

          <h3>
            Geen component
            geselecteerd
          </h3>

          <p>
            Selecteer een
            component op het
            canvas of in Layers
            om de properties te
            bekijken.
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="properties">
      <div className="properties-header">
        <div>
          <span className="properties-label">
            Selected
          </span>

          <h2>
            {
              selectedComponent.type
            }
          </h2>
        </div>
      </div>

      {renderDeviceInfo()}

      <div className="properties-tabs">
        {tabs.map(
          (tab) => (
            <button
              key={tab.id}
              type="button"
              className={
                activeTab ===
                tab.id
                  ? "property-tab active"
                  : "property-tab"
              }
              onClick={() =>
                setActiveTab(
                  tab.id
                )
              }
            >
              {tab.label}
            </button>
          )
        )}
      </div>

      <div className="properties-content">
        {activeTab ===
          "content" &&
          renderContentTab()}

        {activeTab ===
          "layout" && (
          <LayoutProperties
            styles={
              styles
            }
            updateStyles={
              updateStyles
            }
          />
        )}

        {activeTab ===
          "typography" &&
          (showTypography ? (
            <TypographyProperties
              styles={
                styles
              }
              updateStyles={
                updateStyles
              }
            />
          ) : (
            <div className="empty-tab">
              <span>
                Typography is
                beschikbaar
                voor Heading,
                Paragraph en
                Button.
              </span>
            </div>
          ))}

        {activeTab ===
          "appearance" && (
          <AppearanceProperties
            styles={
              styles
            }
            updateStyles={
              updateStyles
            }
          />
        )}

        {activeTab ===
          "advanced" &&
          renderAdvancedTab()}
      </div>
    </aside>
  );
}

export default Properties;