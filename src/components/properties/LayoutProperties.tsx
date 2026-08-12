import type { BuilderStyles } from "../../types/builder";

interface LayoutPropertiesProps {
  styles: BuilderStyles;
  updateStyles: (styles: Partial<BuilderStyles>) => void;
}

interface BoxModelProps {
  title: string;
  top: number;
  right: number;
  bottom: number;
  left: number;
  onChange: (
    property:
      | "top"
      | "right"
      | "bottom"
      | "left",
    value: number
  ) => void;
}

function BoxModel({
  title,
  top,
  right,
  bottom,
  left,
  onChange,
}: BoxModelProps) {
  return (
    <div style={{ marginTop: "15px" }}>
      <h4 style={{ marginBottom: "10px" }}>
        {title}
      </h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr 1fr",
          gridTemplateRows:
            "1fr 1fr 1fr",
          gap: "6px",
          background: "#111827",
          padding: "8px",
          borderRadius: "10px",
        }}
      >
        <div />

        <input
          type="number"
          value={top}
          onChange={(e) =>
            onChange(
              "top",
              Number(e.target.value)
            )
          }
          placeholder="Top"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "none",
            textAlign: "center",
          }}
        />

        <div />

        <input
          type="number"
          value={left}
          onChange={(e) =>
            onChange(
              "left",
              Number(e.target.value)
            )
          }
          placeholder="Left"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "none",
            textAlign: "center",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
            fontSize: "12px",
            border:
              "1px dashed #4b5563",
            borderRadius: "6px",
            minHeight: "36px",
          }}
        >
          BOX
        </div>

        <input
          type="number"
          value={right}
          onChange={(e) =>
            onChange(
              "right",
              Number(e.target.value)
            )
          }
          placeholder="Right"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "none",
            textAlign: "center",
          }}
        />

        <div />

        <input
          type="number"
          value={bottom}
          onChange={(e) =>
            onChange(
              "bottom",
              Number(e.target.value)
            )
          }
          placeholder="Bottom"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "none",
            textAlign: "center",
          }}
        />

        <div />
      </div>
    </div>
  );
}

function LayoutProperties({
  styles,
  updateStyles,
}: LayoutPropertiesProps) {
  return (
    <div>
      <h3
        style={{
          marginTop: "20px",
          marginBottom: "15px",
        }}
      >
        Layout
      </h3>

      <p>Width</p>

      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "8px",
        }}
      >
        <input
          type="number"
          min="0"
          value={styles.width ?? 100}
          onChange={(e) =>
            updateStyles({
              width: Number(
                e.target.value
              ),
            })
          }
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <select
          value={styles.widthUnit ?? "%"}
          onChange={(e) =>
            updateStyles({
              widthUnit:
                e.target.value as
                  | "%"
                  | "px",
            })
          }
          style={{
            width: "70px",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          <option value="%">%</option>
          <option value="px">px</option>
        </select>
      </div>

      <p style={{ marginTop: "15px" }}>
        Height
      </p>

      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "8px",
        }}
      >
        <input
          type="number"
          min="0"
          value={styles.height ?? 300}
          onChange={(e) =>
            updateStyles({
              height: Number(
                e.target.value
              ),
            })
          }
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <select
          value={styles.heightUnit ?? "px"}
          onChange={(e) =>
            updateStyles({
              heightUnit:
                e.target.value as
                  | "%"
                  | "px",
            })
          }
          style={{
            width: "70px",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          <option value="px">px</option>
          <option value="%">%</option>
        </select>
      </div>

      <BoxModel
        title="Margin"
        top={styles.marginTop ?? 0}
        right={styles.marginRight ?? 0}
        bottom={styles.marginBottom ?? 0}
        left={styles.marginLeft ?? 0}
        onChange={(property, value) => {
          if (property === "top") {
            updateStyles({
              marginTop: value,
            });
          }

          if (property === "right") {
            updateStyles({
              marginRight: value,
            });
          }

          if (property === "bottom") {
            updateStyles({
              marginBottom: value,
            });
          }

          if (property === "left") {
            updateStyles({
              marginLeft: value,
            });
          }
        }}
      />

      <BoxModel
        title="Padding"
        top={styles.paddingTop ?? 0}
        right={styles.paddingRight ?? 0}
        bottom={styles.paddingBottom ?? 0}
        left={styles.paddingLeft ?? 0}
        onChange={(property, value) => {
          if (property === "top") {
            updateStyles({
              paddingTop: value,
            });
          }

          if (property === "right") {
            updateStyles({
              paddingRight: value,
            });
          }

          if (property === "bottom") {
            updateStyles({
              paddingBottom: value,
            });
          }

          if (property === "left") {
            updateStyles({
              paddingLeft: value,
            });
          }
        }}
      />

      <h4
        style={{
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        Display
      </h4>

      <select
        value={styles.display ?? "block"}
        onChange={(e) =>
          updateStyles({
            display: e.target.value as
              | "block"
              | "flex"
              | "grid",
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
        }}
      >
        <option value="block">
          Block
        </option>
        <option value="flex">
          Flex
        </option>
        <option value="grid">
          Grid
        </option>
      </select>

      {styles.display === "flex" && (
        <>
          <p style={{ marginTop: "15px" }}>
            Flex Direction
          </p>

          <select
            value={
              styles.flexDirection ??
              "row"
            }
            onChange={(e) =>
              updateStyles({
                flexDirection:
                  e.target.value as
                    | "row"
                    | "column",
              })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "8px",
              borderRadius: "8px",
              border: "none",
            }}
          >
            <option value="row">
              Row
            </option>
            <option value="column">
              Column
            </option>
          </select>

          <p style={{ marginTop: "15px" }}>
            Justify Content
          </p>

          <select
            value={
              styles.justifyContent ??
              "flex-start"
            }
            onChange={(e) =>
              updateStyles({
                justifyContent:
                  e.target.value as
                    | "flex-start"
                    | "center"
                    | "flex-end"
                    | "space-between"
                    | "space-around"
                    | "space-evenly",
              })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "8px",
              borderRadius: "8px",
              border: "none",
            }}
          >
            <option value="flex-start">
              Start
            </option>
            <option value="center">
              Center
            </option>
            <option value="flex-end">
              End
            </option>
            <option value="space-between">
              Space Between
            </option>
            <option value="space-around">
              Space Around
            </option>
            <option value="space-evenly">
              Space Evenly
            </option>
          </select>

          <p style={{ marginTop: "15px" }}>
            Align Items
          </p>

          <select
            value={
              styles.alignItems ??
              "stretch"
            }
            onChange={(e) =>
              updateStyles({
                alignItems:
                  e.target.value as
                    | "flex-start"
                    | "center"
                    | "flex-end"
                    | "stretch",
              })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "8px",
              borderRadius: "8px",
              border: "none",
            }}
          >
            <option value="stretch">
              Stretch
            </option>
            <option value="flex-start">
              Start
            </option>
            <option value="center">
              Center
            </option>
            <option value="flex-end">
              End
            </option>
          </select>

          <p style={{ marginTop: "15px" }}>
            Gap
          </p>

          <input
            type="number"
            min="0"
            value={styles.gap ?? 0}
            onChange={(e) =>
              updateStyles({
                gap: Number(
                  e.target.value
                ),
              })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "8px",
              borderRadius: "8px",
              border: "none",
            }}
          />
        </>
      )}
    </div>
  );
}

export default LayoutProperties;