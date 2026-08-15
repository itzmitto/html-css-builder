import {
  useState,
  type ChangeEvent,
  type CSSProperties,
} from "react";
import type {
  BuilderComponent,
  BuilderStyles,
  DeviceType,
  NavbarSettings,
  NavbarLink,
  HeroSettings,
  SectionSettings,
  CardSettings,
  FooterSettings,
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
  updateHero: (settings: Partial<HeroSettings>) => void;
  updateSection: (settings: Partial<SectionSettings>) => void;
  updateCard: (settings: Partial<CardSettings>) => void;
  updateFooter: (settings: Partial<FooterSettings>) => void;
  updateImage: (value: string) => void;
  updateImageWidth: (value: number) => void;
  updateImageHeight: (value: number) => void;
  updateImageBorderRadius: (value: number) => void;
  updateStyles: (styles: Partial<BuilderStyles>) => void;
  updateNavbar: (settings: Partial<NavbarSettings>) => void;
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

type ContainerLayout =
  | "vertical"
  | "horizontal"
  | "1-column"
  | "2-columns"
  | "3-columns"
  | "4-columns";

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #2b3445",
  background: "#111827",
  color: "#f8fafc",
  boxSizing: "border-box",
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  resize: "vertical",
  minHeight: "90px",
  fontFamily: "inherit",
};

const selectStyle: CSSProperties = {
  ...inputStyle,
  cursor: "pointer",
};

const colorInputStyle: CSSProperties = {
  width: "100%",
  height: "46px",
  marginTop: "8px",
  padding: "3px",
  border: "1px solid #2b3445",
  borderRadius: "8px",
  background: "#111827",
  cursor: "pointer",
  boxSizing: "border-box",
};

const sectionTitleStyle: CSSProperties = {
  marginTop: "24px",
  marginBottom: "10px",
  color: "#cbd5e1",
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
};

const labelStyle: CSSProperties = {
  display: "block",
  marginTop: "14px",
  marginBottom: "6px",
  color: "#cbd5e1",
  fontSize: "13px",
  fontWeight: 600,
};

const mutedTextStyle: CSSProperties = {
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: 1.5,
};

const fieldRowStyle: CSSProperties = {
  display: "flex",
  gap: "8px",
  alignItems: "center",
};

function getDeviceLabel(device: DeviceType) {
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
  updateHero,
  updateSection,
  updateCard,
  updateFooter,
  updateImage,
  updateImageWidth,
  updateImageHeight,
  updateImageBorderRadius,
  updateStyles,
  updateNavbar,
  moveComponentUp,
  moveComponentDown,
  duplicateComponent,
  deleteComponent,
}: PropertiesProps) {
  const [activeTab, setActiveTab] = useState<PropertyTab>("content");
  const [expandedNavbarLinks, setExpandedNavbarLinks] = useState<Record<string, boolean>>({});
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
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
    event.target.value = "";
  };
  const handleCardImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
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
        updateCard({ imageUrl: reader.result });
      }
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  };
  const baseStyles: BuilderStyles = selectedComponent?.styles ?? {};
  const responsiveStyles = selectedComponent?.responsive?.[device] ?? {};
  const styles: BuilderStyles = {
    ...baseStyles,
    ...responsiveStyles,
  };
  const navbar: NavbarSettings = selectedComponent?.navbar ?? {};
  const hero: HeroSettings = selectedComponent?.hero ?? {};
  const section: SectionSettings = selectedComponent?.section ?? {};
  const card: CardSettings = selectedComponent?.card ?? {};
  const footer: FooterSettings = selectedComponent?.footer ?? {};
  const navbarLinks: NavbarLink[] = navbar.links ?? [];
  const showTypography =
    selectedComponent?.type === "Heading" ||
    selectedComponent?.type === "Paragraph" ||
    selectedComponent?.type === "Button";
  const isLayoutComponent =
    selectedComponent?.type === "Container" ||
    selectedComponent?.type === "Row" ||
    selectedComponent?.type === "Stack";
  const isNavbar = selectedComponent?.type === "Navbar";
  const isHero = selectedComponent?.type === "Hero";
  const isSection = selectedComponent?.type === "Section";
  const isCard = selectedComponent?.type === "Card";
  const isFooter = selectedComponent?.type === "Footer";
  const tabs: { id: PropertyTab; label: string }[] = [
    { id: "content", label: "Content" },
    { id: "layout", label: "Layout" },
    { id: "typography", label: "Type" },
    { id: "appearance", label: "Style" },
    { id: "advanced", label: "Advanced" },
  ];
  const updateNavbarLink = (
    linkId: string,
    updates: Partial<NavbarLink>
  ) => {
    updateNavbar({
      links: navbarLinks.map((link) =>
        link.id === linkId
          ? {
              ...link,
              ...updates,
            }
          : link
      ),
    });
  };
  const addNavbarLink = () => {
    const newLink: NavbarLink = {
      id: crypto.randomUUID(),
      label: "New Link",
      url: "#",
      openInNewTab: false,
    };
    updateNavbar({
      links: [...navbarLinks, newLink],
    });
    setExpandedNavbarLinks((current) => ({
      ...current,
      [newLink.id]: true,
    }));
  };
  const removeNavbarLink = (linkId: string) => {
    updateNavbar({
      links: navbarLinks.filter((link) => link.id !== linkId),
    });
    setExpandedNavbarLinks((current) => {
      const next = { ...current };
      delete next[linkId];
      return next;
    });
  };
  const toggleNavbarLink = (linkId: string) => {
    setExpandedNavbarLinks((current) => ({
      ...current,
      [linkId]: !current[linkId],
    }));
  };
  const moveNavbarLink = (
    linkId: string,
    direction: "up" | "down"
  ) => {
    const index = navbarLinks.findIndex((link) => link.id === linkId);
    if (index === -1) {
      return;
    }
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (
      targetIndex < 0 ||
      targetIndex >= navbarLinks.length
    ) {
      return;
    }
    const updatedLinks = [...navbarLinks];
    const temp = updatedLinks[index];
    updatedLinks[index] = updatedLinks[targetIndex];
    updatedLinks[targetIndex] = temp;
    updateNavbar({
      links: updatedLinks,
    });
  };
  const applyContainerLayout = (layout: ContainerLayout) => {
    if (layout === "vertical") {
      updateStyles({
        display: "flex",
        flexDirection: "column",
        gridColumns: undefined,
        gridGap: undefined,
        gap: 16,
        justifyContent: "flex-start",
        alignItems: "stretch",
      });
      return;
    }
    if (layout === "horizontal") {
      updateStyles({
        display: "flex",
        flexDirection: "row",
        gridColumns: undefined,
        gridGap: undefined,
        gap: 16,
        justifyContent: "flex-start",
        alignItems: "stretch",
      });
      return;
    }
    const columns =
      layout === "1-column"
        ? 1
        : layout === "2-columns"
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
  const getCurrentContainerLayout = (): ContainerLayout => {
    if (!selectedComponent) {
      return "vertical";
    }
    if (
      selectedComponent.type !== "Container" &&
      selectedComponent.type !== "Row" &&
      selectedComponent.type !== "Stack"
    ) {
      return "vertical";
    }
    if (styles.display === "grid") {
      if (styles.gridColumns === 2) {
        return "2-columns";
      }
      if (styles.gridColumns === 3) {
        return "3-columns";
      }
      if (styles.gridColumns === 4) {
        return "4-columns";
      }
      return "1-column";
    }
    if (
      styles.display === "flex" &&
      styles.flexDirection === "row"
    ) {
      return "horizontal";
    }
    return "vertical";
  };
  const renderDeviceInfo = () => (
    <div className="responsive-device-info">
      <span className="responsive-device-label">Responsive</span>
      <strong>{getDeviceLabel(device)}</strong>
      {device !== "desktop" && (
        <span className="responsive-device-description">
          Wijzigingen gelden alleen voor {getDeviceLabel(device)}.
        </span>
      )}
    </div>
  );
  const renderFieldHint = (text: string) => (
    <div
      style={{
        marginTop: "5px",
        ...mutedTextStyle,
      }}
    >
      {text}
    </div>
  );
  const renderAlignmentButtons = (
    current: "left" | "center" | "right",
    onChange: (value: "left" | "center" | "right") => void
  ) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "6px",
        marginTop: "8px",
      }}
    >
      {(["left", "center", "right"] as const).map((alignment) => (
        <button
          key={alignment}
          type="button"
          onClick={() => onChange(alignment)}
          style={{
            padding: "10px 6px",
            border: "1px solid #2b3445",
            borderRadius: "7px",
            background: current === alignment ? "#7c3aed" : "#ffffff",
            color: current === alignment ? "#ffffff" : "#475569",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {alignment.charAt(0).toUpperCase() + alignment.slice(1)}
        </button>
      ))}
    </div>
  );
  const renderNavbarLinks = () => {
    if (!isNavbar) {
      return null;
    }
    return (
      <div style={{ marginTop: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <h4 style={{ margin: 0, color: "#cbd5e1" }}>
            Navigation Links
          </h4>
          <span
            style={{
              padding: "3px 8px",
              borderRadius: "999px",
              background: "rgba(124, 58, 237, 0.14)",
              color: "#7c3aed",
              fontSize: "11px",
              fontWeight: 700,
            }}
          >
            {navbarLinks.length}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {navbarLinks.map((link, index) => {
            const expanded = expandedNavbarLinks[link.id] ?? false;
            return (
              <div
                key={link.id}
                style={{
                  border: "1px solid #2b3445",
                  borderRadius: "10px",
                  background: "#161d2a",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "8px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleNavbarLink(link.id)}
                    style={{
                      width: "28px",
                      height: "28px",
                      border: "none",
                      borderRadius: "6px",
                      background: "#111827",
                      color: "#94a3b8",
                      cursor: "pointer",
                    }}
                  >
                    {expanded ? "▾" : "▸"}
                  </button>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "7px",
                      background: "#7c3aed",
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {index + 1}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        color: "#e5e7eb",
                        fontSize: "13px",
                        fontWeight: 600,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {link.label || "Untitled Link"}
                    </div>
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: "11px",
                        marginTop: "2px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {link.url || "#"}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => moveNavbarLink(link.id, "up")}
                      disabled={index === 0}
                      style={{
                        width: "26px",
                        height: "26px",
                        border: "1px solid #2b3445",
                        borderRadius: "6px",
                        background: "#111827",
                        color: "#94a3b8",
                        cursor: index === 0 ? "default" : "pointer",
                        opacity: index === 0 ? 0.4 : 1,
                      }}
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      onClick={() => moveNavbarLink(link.id, "down")}
                      disabled={index === navbarLinks.length - 1}
                      style={{
                        width: "26px",
                        height: "26px",
                        border: "1px solid #2b3445",
                        borderRadius: "6px",
                        background: "#111827",
                        color: "#94a3b8",
                        cursor:
                          index === navbarLinks.length - 1
                            ? "default"
                            : "pointer",
                        opacity:
                          index === navbarLinks.length - 1
                            ? 0.4
                            : 1,
                      }}
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      onClick={() => removeNavbarLink(link.id)}
                      style={{
                        width: "26px",
                        height: "26px",
                        border: "1px solid #7f1d3d",
                        borderRadius: "6px",
                        background: "#2a1218",
                        color: "#fb7185",
                        cursor: "pointer",
                      }}
                    >
                      ×
                    </button>
                  </div>
                </div>
                {expanded && (
                  <div
                    style={{
                      padding: "12px",
                      borderTop: "1px solid #e2e8f0",
                      background: "#111827",
                    }}
                  >
                    <label style={labelStyle}>Link Text</label>
                    <input
                      type="text"
                      className="property-input"
                      value={link.label}
                      onChange={(e) =>
                        updateNavbarLink(link.id, {
                          label: e.target.value,
                        })
                      }
                      style={inputStyle}
                    />
                    <label style={labelStyle}>URL</label>
                    <input
                      type="text"
                      className="property-input"
                      value={link.url}
                      onChange={(e) =>
                        updateNavbarLink(link.id, {
                          url: e.target.value,
                        })
                      }
                      placeholder="/about"
                      style={inputStyle}
                    />
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "10px",
                        marginTop: "12px",
                        color: "#cbd5e1",
                        fontSize: "13px",
                        cursor: "pointer",
                      }}
                    >
                      <span>Open in new tab</span>
                      <input
                        type="checkbox"
                        checked={link.openInNewTab ?? false}
                        onChange={(e) =>
                          updateNavbarLink(link.id, {
                            openInNewTab: e.target.checked,
                          })
                        }
                      />
                    </label>
                  </div>
                )}
              </div>
            );
          })}
          <button
            type="button"
            onClick={addNavbarLink}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px dashed #8b5cf6",
              borderRadius: "8px",
              background: "rgba(124, 58, 237, 0.08)",
              color: "#7c3aed",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            + Add Navigation Link
          </button>
        </div>
      </div>
    );
  };
  const renderNavbarContent = () => {
    if (!isNavbar) {
      return null;
    }
    const currentAlignment = styles.horizontalAlign ?? "left";
    return (
      <div>
        <h3 className="property-section-title">Navbar</h3>
        <div className="container-info">
          <strong>Navigation Bar</strong>
          <span>Bouw en beheer je navbar direct vanuit de CMS builder.</span>
        </div>
        <h4 style={sectionTitleStyle}>Branding</h4>
        <label style={labelStyle}>Logo Text</label>
        <input
          type="text"
          className="property-input"
          value={
            navbar.logoText ??
            selectedComponent?.text ??
            "Logo"
          }
          onChange={(e) => {
            const value = e.target.value;
            updateText(value);
            updateNavbar({ logoText: value });
          }}
          style={inputStyle}
        />
        <label style={labelStyle}>Logo Size</label>
        <input
          type="number"
          min="10"
          max="80"
          value={navbar.logoSize ?? 20}
          onChange={(e) =>
            updateNavbar({
              logoSize: Number(e.target.value),
            })
          }
          style={inputStyle}
        />
        {renderNavbarLinks()}
        <h4 style={sectionTitleStyle}>Layout</h4>
        <label style={labelStyle}>Navbar Height</label>
        <input
          type="number"
          min="40"
          max="200"
          value={navbar.height ?? styles.height ?? 72}
          onChange={(e) => {
            const value = Number(e.target.value);
            updateNavbar({ height: value });
            updateStyles({
              height: value,
              heightUnit: "px",
            });
          }}
          style={inputStyle}
        />
        <label style={labelStyle}>Horizontal Padding</label>
        <input
          type="number"
          min="0"
          max="100"
          value={navbar.padding ?? styles.paddingLeft ?? 20}
          onChange={(e) => {
            const value = Number(e.target.value);
            updateNavbar({ padding: value });
            updateStyles({
              paddingLeft: value,
              paddingRight: value,
            });
          }}
          style={inputStyle}
        />
        <label style={labelStyle}>Navigation Gap</label>
        <input
          type="number"
          min="0"
          max="100"
          value={navbar.navGap ?? styles.gap ?? 24}
          onChange={(e) => {
            const value = Number(e.target.value);
            updateNavbar({ navGap: value });
            updateStyles({ gap: value });
          }}
          style={inputStyle}
        />
        <label style={labelStyle}>Alignment</label>
        {renderAlignmentButtons(
          currentAlignment,
          (value) => updateStyles({ horizontalAlign: value })
        )}
        <h4 style={sectionTitleStyle}>Border</h4>
        <label style={labelStyle}>Border Width</label>
        <input
          type="number"
          min="0"
          max="20"
          value={navbar.borderWidth ?? styles.borderWidth ?? 1}
          onChange={(e) => {
            const value = Number(e.target.value);
            updateNavbar({ borderWidth: value });
            updateStyles({ borderWidth: value });
          }}
          style={inputStyle}
        />
        <label style={labelStyle}>Border Radius</label>
        <input
          type="number"
          min="0"
          max="100"
          value={navbar.borderRadius ?? styles.borderRadius ?? 10}
          onChange={(e) => {
            const value = Number(e.target.value);
            updateNavbar({ borderRadius: value });
            updateStyles({ borderRadius: value });
          }}
          style={inputStyle}
        />
        <label style={labelStyle}>Border Color</label>
        <input
          type="color"
          value={
            navbar.borderColor ??
            styles.borderColor ??
            "#e4e7ef"
          }
          onChange={(e) => {
            const value = e.target.value;
            updateNavbar({ borderColor: value });
            updateStyles({ borderColor: value });
          }}
          style={colorInputStyle}
        />
        <h4 style={sectionTitleStyle}>Effects</h4>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "12px",
            color: "#cbd5e1",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          <span>Box Shadow</span>
          <input
            type="checkbox"
            checked={Boolean(
              navbar.boxShadow &&
              navbar.boxShadow !== "none"
            )}
            onChange={(e) =>
              updateNavbar({
                boxShadow: e.target.checked
                  ? "0 4px 16px rgba(15, 23, 42, 0.08)"
                  : "none",
              })
            }
          />
        </label>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "15px",
            color: "#cbd5e1",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          <span>Sticky Navbar</span>
          <input
            type="checkbox"
            checked={navbar.sticky ?? false}
            onChange={(e) =>
              updateNavbar({
                sticky: e.target.checked,
              })
            }
          />
        </label>
      </div>
    );
  };
  const renderHeroContent = () => {
    if (!isHero) {
      return null;
    }
    return (
      <div>
        <h3 className="property-section-title">Hero</h3>
        <div className="container-info">
          <strong>Hero Section</strong>
          <span>Beheer content, CTA, breedte, padding en uitlijning.</span>
        </div>
        <h4 style={sectionTitleStyle}>Content</h4>
        <label style={labelStyle}>Heading</label>
        <input
          type="text"
          className="property-input"
          value={
            hero.title ??
            selectedComponent?.heroTitle ??
            "Hero Title"
          }
          onChange={(e) => {
            const value = e.target.value;
            updateHero({ title: value });
            updateHeroTitle(value);
          }}
          style={inputStyle}
        />
        <label style={labelStyle}>Subtitle</label>
        <textarea
          className="property-input"
          rows={4}
          value={
            hero.subtitle ??
            selectedComponent?.heroSubtitle ??
            "Hero Subtitle goes here"
          }
          onChange={(e) => {
            const value = e.target.value;
            updateHero({ subtitle: value });
            updateHeroSubtitle(value);
          }}
          style={textareaStyle}
        />
        <h4 style={sectionTitleStyle}>Call To Action</h4>
        <label style={labelStyle}>Button Text</label>
        <input
          type="text"
          className="property-input"
          value={
            hero.buttonText ??
            selectedComponent?.heroButtonText ??
            "Get Started"
          }
          onChange={(e) => {
            const value = e.target.value;
            updateHero({ buttonText: value });
            updateHeroButtonText(value);
          }}
          style={inputStyle}
        />
        <label style={labelStyle}>Button URL</label>
        <input
          type="text"
          className="property-input"
          value={hero.buttonUrl ?? "#"}
          onChange={(e) =>
            updateHero({
              buttonUrl: e.target.value,
            })
          }
          placeholder="#contact"
          style={inputStyle}
        />
        <label style={labelStyle}>Button Style</label>
        <select
          value={hero.buttonStyle ?? "solid"}
          onChange={(e) =>
            updateHero({
              buttonStyle: e.target.value as
                | "solid"
                | "outline"
                | "ghost",
            })
          }
          style={selectStyle}
        >
          <option value="solid">Solid</option>
          <option value="outline">Outline</option>
          <option value="ghost">Ghost</option>
        </select>
        <h4 style={sectionTitleStyle}>Hero Layout</h4>
        <label style={labelStyle}>Content Width</label>
        <div style={fieldRowStyle}>
          <input
            type="number"
            min="300"
            max="1600"
            value={hero.contentWidth ?? 900}
            onChange={(e) =>
              updateHero({
                contentWidth: Number(e.target.value),
              })
            }
            style={{
              ...inputStyle,
              flex: 1,
            }}
          />
          <select
            value={hero.contentWidthUnit ?? "px"}
            onChange={(e) =>
              updateHero({
                contentWidthUnit: e.target.value as "px" | "%",
              })
            }
            style={{
              ...selectStyle,
              width: "80px",
            }}
          >
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>
        <label style={labelStyle}>Vertical Padding</label>
        <input
          type="range"
          min="20"
          max="200"
          value={hero.verticalPadding ?? styles.paddingTop ?? 80}
          onChange={(e) => {
            const value = Number(e.target.value);
            updateHero({ verticalPadding: value });
            updateStyles({
              paddingTop: value,
              paddingBottom: value,
            });
          }}
          className="property-range"
        />
        <div className="property-value">
          {hero.verticalPadding ?? styles.paddingTop ?? 80}px
        </div>
        <label style={labelStyle}>Text Alignment</label>
        {renderAlignmentButtons(
          hero.textAlign ?? styles.textAlign ?? "center",
          (value) => {
            updateHero({ textAlign: value });
            updateStyles({ textAlign: value });
          }
        )}
      </div>
    );
  };
  const renderSectionContent = () => {
    if (!isSection) {
      return null;
    }
    return (
      <div>
        <h3 className="property-section-title">Section</h3>
        <div className="container-info">
          <strong>Content Section</strong>
          <span>Beheer titel, tekst, breedte en uitlijning.</span>
        </div>
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          className="property-input"
          value={section.title ?? "Section Title"}
          onChange={(e) => {
            const value = e.target.value;
            updateSection({ title: value });
            updateText(value);
          }}
          style={inputStyle}
        />
        <label style={labelStyle}>Content</label>
        <textarea
          className="property-input"
          rows={5}
          value={section.content ?? "Section content goes here."}
          onChange={(e) =>
            updateSection({
              content: e.target.value,
            })
          }
          style={textareaStyle}
        />
        <h4 style={sectionTitleStyle}>Layout</h4>
        <label style={labelStyle}>Content Width</label>
        <div style={fieldRowStyle}>
          <input
            type="number"
            min="300"
            max="1600"
            value={section.contentWidth ?? 1100}
            onChange={(e) =>
              updateSection({
                contentWidth: Number(e.target.value),
              })
            }
            style={{
              ...inputStyle,
              flex: 1,
            }}
          />
          <select
            value={section.contentWidthUnit ?? "px"}
            onChange={(e) =>
              updateSection({
                contentWidthUnit: e.target.value as "px" | "%",
              })
            }
            style={{
              ...selectStyle,
              width: "80px",
            }}
          >
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>
        <label style={labelStyle}>Text Alignment</label>
        {renderAlignmentButtons(
          section.textAlign ?? styles.textAlign ?? "left",
          (value) => {
            updateSection({ textAlign: value });
            updateStyles({ textAlign: value });
          }
        )}
      </div>
    );
  };
  const renderCardContent = () => {
    if (!isCard) {
      return null;
    }
    return (
      <div>
        <h3 className="property-section-title">Card</h3>
        <div className="container-info">
          <strong>Content Card</strong>
          <span>Bouw kaarten met een image, content en CTA.</span>
        </div>
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          className="property-input"
          value={card.title ?? "Card Title"}
          onChange={(e) => {
            const value = e.target.value;
            updateCard({ title: value });
            updateText(value);
          }}
          style={inputStyle}
        />
        <label style={labelStyle}>Description</label>
        <textarea
          className="property-input"
          rows={5}
          value={card.content ?? "Card description goes here."}
          onChange={(e) =>
            updateCard({
              content: e.target.value,
            })
          }
          style={textareaStyle}
        />
        <h4 style={sectionTitleStyle}>CTA</h4>
        <label style={labelStyle}>Button Text</label>
        <input
          type="text"
          className="property-input"
          value={card.buttonText ?? "Learn More"}
          onChange={(e) =>
            updateCard({
              buttonText: e.target.value,
            })
          }
          style={inputStyle}
        />
        <label style={labelStyle}>Button URL</label>
        <input
          type="text"
          className="property-input"
          value={card.buttonUrl ?? "#"}
          onChange={(e) =>
            updateCard({
              buttonUrl: e.target.value,
            })
          }
          placeholder="#contact"
          style={inputStyle}
        />
        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "15px",
            color: "#cbd5e1",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          <span>Show Button</span>
          <input
            type="checkbox"
            checked={card.showButton ?? true}
            onChange={(e) =>
              updateCard({
                showButton: e.target.checked,
              })
            }
          />
        </label>
        <h4 style={sectionTitleStyle}>Media</h4>
        <label style={labelStyle}>Card Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleCardImageUpload}
          className="property-file"
        />
        {card.imageUrl && (
          <img
            src={card.imageUrl}
            alt="Card"
            style={{
              width: "100%",
              height: "140px",
              objectFit: "cover",
              marginTop: "12px",
              borderRadius: "10px",
              display: "block",
              border: "1px solid #2b3445",
            }}
          />
        )}
        <label style={labelStyle}>Card Height</label>
        <input
          type="number"
          min="150"
          max="700"
          value={styles.height ?? 250}
          onChange={(e) =>
            updateStyles({
              height: Number(e.target.value),
              heightUnit: "px",
            })
          }
          style={inputStyle}
        />
        {renderFieldHint(
          "Gebruik Layout en Style voor spacing, borders en colors."
        )}
      </div>
    );
  };
  const renderFooterContent = () => {
    if (!isFooter) {
      return null;
    }
    return (
      <div>
        <h3 className="property-section-title">Footer</h3>
        <div className="container-info">
          <strong>Website Footer</strong>
          <span>Beheer branding, content, copyright en nieuwsbrief.</span>
        </div>
        <h4 style={sectionTitleStyle}>Branding</h4>
        <label style={labelStyle}>Brand Name</label>
        <input
          type="text"
          className="property-input"
          value={footer.brandName ?? "Brand"}
          onChange={(e) =>
            updateFooter({
              brandName: e.target.value,
            })
          }
          style={inputStyle}
        />
        <label style={labelStyle}>Description</label>
        <textarea
          className="property-input"
          rows={5}
          value={
            footer.description ??
            "Build beautiful websites with a flexible and modern visual editor."
          }
          onChange={(e) =>
            updateFooter({
              description: e.target.value,
            })
          }
          style={textareaStyle}
        />
        <label style={labelStyle}>Copyright</label>
        <input
          type="text"
          className="property-input"
          value={footer.copyright ?? "© 2026 Your Company"}
          onChange={(e) =>
            updateFooter({
              copyright: e.target.value,
            })
          }
          style={inputStyle}
        />
        <h4 style={sectionTitleStyle}>Newsletter</h4>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "12px",
            color: "#cbd5e1",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          <span>Show Newsletter</span>
          <input
            type="checkbox"
            checked={footer.showNewsletter ?? false}
            onChange={(e) =>
              updateFooter({
                showNewsletter: e.target.checked,
              })
            }
          />
        </label>
        {footer.showNewsletter && (
          <>
            <label style={labelStyle}>Newsletter Title</label>
            <input
              type="text"
              className="property-input"
              value={footer.newsletterTitle ?? "Stay in the loop"}
              onChange={(e) =>
                updateFooter({
                  newsletterTitle: e.target.value,
                })
              }
              style={inputStyle}
            />
            <label style={labelStyle}>
              Newsletter Description
            </label>
            <textarea
              className="property-input"
              rows={3}
              value={
                footer.newsletterDescription ??
                "Subscribe for updates and new content."
              }
              onChange={(e) =>
                updateFooter({
                  newsletterDescription: e.target.value,
                })
              }
              style={{
                ...textareaStyle,
                minHeight: "75px",
              }}
            />
          </>
        )}
        <h4 style={sectionTitleStyle}>Layout</h4>
        <label style={labelStyle}>Footer Height</label>
        <input
          type="number"
          min="150"
          max="900"
          value={styles.height ?? 360}
          onChange={(e) =>
            updateStyles({
              height: Number(e.target.value),
              heightUnit: "px",
            })
          }
          style={inputStyle}
        />
      </div>
    );
  };
  const renderContainerLayout = () => {
    if (!isLayoutComponent) {
      return null;
    }
    const currentLayout = getCurrentContainerLayout();
    const layouts = [
      {
        value: "vertical" as const,
        icon: "☷",
        label: "Vertical",
      },
      {
        value: "horizontal" as const,
        icon: "☰",
        label: "Horizontal",
      },
      {
        value: "1-column" as const,
        icon: "▤",
        label: "1 Column",
      },
      {
        value: "2-columns" as const,
        icon: "▦",
        label: "2 Columns",
      },
      {
        value: "3-columns" as const,
        icon: "▦",
        label: "3 Columns",
      },
      {
        value: "4-columns" as const,
        icon: "▦",
        label: "4 Columns",
      },
    ];
    return (
      <div className="container-layout-section">
        <h3 className="property-section-title">
          Layout Preset
        </h3>
        <div className="container-layout-grid">
          {layouts.map((layout) => (
            <button
              key={layout.value}
              type="button"
              className={
                currentLayout === layout.value
                  ? "container-layout-button active"
                  : "container-layout-button"
              }
              onClick={() =>
                applyContainerLayout(layout.value)
              }
            >
              <span className="container-layout-icon">
                {layout.icon}
              </span>
              <span>{layout.label}</span>
            </button>
          ))}
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
        {renderNavbarContent()}
        {renderHeroContent()}
        {renderSectionContent()}
        {renderCardContent()}
        {renderFooterContent()}
        {(selectedComponent.type === "Heading" ||
          selectedComponent.type === "Paragraph" ||
          selectedComponent.type === "Button") && (
          <div>
            <h3 className="property-section-title">
              Content
            </h3>
            <label style={labelStyle}>Text</label>
            <input
              className="property-input"
              type="text"
              value={selectedComponent.text ?? ""}
              onChange={(e) =>
                updateText(e.target.value)
              }
              style={inputStyle}
            />
          </div>
        )}
        {selectedComponent.type === "Image" && (
          <div>
            <h3 className="property-section-title">
              Image
            </h3>
            <div className="container-info">
              <strong>Image Element</strong>
              <span>
                Upload en beheer je afbeelding direct vanuit de builder.
              </span>
            </div>
            <label style={labelStyle}>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="property-file"
            />
            <label style={labelStyle}>Width</label>
            <input
              type="range"
              min="10"
              max="100"
              value={selectedComponent.imageWidth ?? 100}
              onChange={(e) =>
                updateImageWidth(Number(e.target.value))
              }
              className="property-range"
            />
            <div className="property-value">
              {selectedComponent.imageWidth ?? 100}%
            </div>
            <label style={labelStyle}>Height</label>
            <input
              type="range"
              min="50"
              max="1000"
              value={selectedComponent.imageHeight ?? 300}
              onChange={(e) =>
                updateImageHeight(Number(e.target.value))
              }
              className="property-range"
            />
            <div className="property-value">
              {selectedComponent.imageHeight ?? 300}px
            </div>
            <label style={labelStyle}>Border Radius</label>
            <input
              type="range"
              min="0"
              max="100"
              value={selectedComponent.imageBorderRadius ?? 8}
              onChange={(e) =>
                updateImageBorderRadius(Number(e.target.value))
              }
              className="property-range"
            />
            <div className="property-value">
              {selectedComponent.imageBorderRadius ?? 8}px
            </div>
            {selectedComponent.imageUrl && (
              <img
                src={selectedComponent.imageUrl}
                alt="Selected"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  marginTop: "15px",
                  borderRadius: "10px",
                  display: "block",
                  border: "1px solid #2b3445",
                }}
              />
            )}
          </div>
        )}
        {selectedComponent.type === "Container" && (
          <div>
            <h3 className="property-section-title">
              Container
            </h3>
            <div className="container-info">
              <strong>Container</strong>
              <span>
                Nieuwe componenten worden toegevoegd wanneer deze
                container geselecteerd is.
              </span>
            </div>
            <label style={labelStyle}>Height</label>
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
                const value = Number(e.target.value);
                updateMinHeight(value);
                updateStyles({
                  height: value,
                  heightUnit: "px",
                });
              }}
              className="property-range"
            />
            <div className="property-value">
              {styles.height ?? selectedComponent.minHeight ?? 300}px
            </div>
            <div className="container-children-info">
              <span className="container-children-count">
                {selectedComponent.children?.length ?? 0}
              </span>
              <div>
                <strong>Children</strong>
                <span>Components inside this container</span>
              </div>
            </div>
          </div>
        )}
        {(selectedComponent.type === "Row" ||
          selectedComponent.type === "Stack") && (
          <div>
            <h3 className="property-section-title">
              {selectedComponent.type}
            </h3>
            <div className="container-info">
              <strong>
                {selectedComponent.type} Layout
              </strong>
              <span>
                Voeg componenten toe terwijl deze layout geselecteerd is.
              </span>
            </div>
            <div className="container-children-info">
              <span className="container-children-count">
                {selectedComponent.children?.length ?? 0}
              </span>
              <div>
                <strong>Children</strong>
                <span>Components inside this layout</span>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  const renderAdvancedTab = () => (
    <div>
      <h3 className="property-section-title">
        Component
      </h3>
      <div className="component-meta">
        <div className="meta-row">
          <span>Type</span>
          <strong>{selectedComponent?.type}</strong>
        </div>
        <div className="meta-row">
          <span>Device</span>
          <strong>{getDeviceLabel(device)}</strong>
        </div>
        <div className="meta-row">
          <span>ID</span>
          <strong className="component-id">
            {selectedComponent?.id}
          </strong>
        </div>
        <div className="meta-row">
          <span>Children</span>
          <strong>
            {selectedComponent?.children?.length ?? 0}
          </strong>
        </div>
      </div>
      <h3 className="property-section-title">
        CSS
      </h3>
      <label style={labelStyle}>Overflow</label>
      <select
        value={styles.overflow ?? "visible"}
        onChange={(e) =>
          updateStyles({
            overflow: e.target.value as
              | "visible"
              | "hidden"
              | "auto",
          })
        }
        style={selectStyle}
      >
        <option value="visible">Visible</option>
        <option value="hidden">Hidden</option>
        <option value="auto">Auto</option>
      </select>
      <label style={labelStyle}>Z-Index</label>
      <input
        type="number"
        value={styles.zIndex ?? 1}
        onChange={(e) =>
          updateStyles({
            zIndex: Number(e.target.value),
          })
        }
        style={inputStyle}
      />
      <h3 className="property-section-title">
        Actions
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
        }}
      >
        <button
          type="button"
          onClick={moveComponentUp}
          className="property-action-button"
        >
          ↑ Move Up
        </button>
        <button
          type="button"
          onClick={moveComponentDown}
          className="property-action-button"
        >
          ↓ Move Down
        </button>
      </div>
      <button
        type="button"
        onClick={duplicateComponent}
        className="property-action-button"
        style={{
          marginTop: "8px",
          width: "100%",
        }}
      >
        Duplicate Component
      </button>
      <button
        type="button"
        onClick={deleteComponent}
        className="property-action-button danger"
        style={{
          marginTop: "8px",
          width: "100%",
        }}
      >
        Delete Component
      </button>
    </div>
  );
  if (!selectedComponent) {
    return (
      <aside className="properties">
        <h2>Properties</h2>
        <div className="no-selection">
          <div className="no-selection-icon">+</div>
          <h3>Geen component geselecteerd</h3>
          <p>
            Selecteer een component op het canvas of in Layers om de
            properties te bekijken.
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
          <h2>{selectedComponent.type}</h2>
        </div>
        <span
          style={{
            padding: "5px 9px",
            borderRadius: "999px",
            background: "rgba(124, 58, 237, 0.14)",
            color: "#7c3aed",
            fontSize: "11px",
            fontWeight: 700,
          }}
        >
          {getDeviceLabel(device)}
        </span>
      </div>
      {renderDeviceInfo()}
      <div className="properties-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={
              activeTab === tab.id
                ? "property-tab active"
                : "property-tab"
            }
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="properties-content">
        {activeTab === "content" && renderContentTab()}
        {activeTab === "layout" && (
          <LayoutProperties
            styles={styles}
            device={device}
            updateStyles={updateStyles}
          />
        )}
        {activeTab === "typography" &&
          (showTypography ? (
            <TypographyProperties
              styles={styles}
              updateStyles={updateStyles}
            />
          ) : (
            <div className="empty-tab">
              <span>
                Typography is beschikbaar voor Heading, Paragraph en Button.
              </span>
            </div>
          ))}
        {activeTab === "appearance" && (
          <AppearanceProperties
            styles={styles}
            updateStyles={updateStyles}
          />
        )}
        {activeTab === "advanced" && renderAdvancedTab()}
      </div>
    </aside>
  );
}

export default Properties;