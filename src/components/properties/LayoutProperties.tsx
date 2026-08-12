import type { BuilderStyles } from "../../types/builder";

interface LayoutPropertiesProps {
  styles: BuilderStyles;
  updateStyles: (styles: Partial<BuilderStyles>) => void;
}

function LayoutProperties({
  styles,
  updateStyles,
}: LayoutPropertiesProps) {
  return (
    <div>
      <h3 style={{ marginTop: "20px", marginBottom: "15px" }}>
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
          value={styles.width ?? 100}
          onChange={(e) =>
            updateStyles({
              width: Number(e.target.value),
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
              widthUnit: e.target.value as "%" | "px",
            })
          }
          style={{
            width: "70px",
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
          value={styles.height ?? 300}
          onChange={(e) =>
            updateStyles({
              height: Number(e.target.value),
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
              heightUnit: e.target.value as "%" | "px",
            })
          }
          style={{
            width: "70px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          <option value="px">px</option>
          <option value="%">%</option>
        </select>
      </div>

      <h4 style={{ marginTop: "20px" }}>
        Margin
      </h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
          marginTop: "10px",
        }}
      >
        <input
          type="number"
          placeholder="Top"
          value={styles.marginTop ?? 0}
          onChange={(e) =>
            updateStyles({
              marginTop: Number(e.target.value),
            })
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
          type="number"
          placeholder="Right"
          value={styles.marginRight ?? 0}
          onChange={(e) =>
            updateStyles({
              marginRight: Number(e.target.value),
            })
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
          type="number"
          placeholder="Bottom"
          value={styles.marginBottom ?? 0}
          onChange={(e) =>
            updateStyles({
              marginBottom: Number(e.target.value),
            })
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
          type="number"
          placeholder="Left"
          value={styles.marginLeft ?? 0}
          onChange={(e) =>
            updateStyles({
              marginLeft: Number(e.target.value),
            })
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />
      </div>

      <h4 style={{ marginTop: "20px" }}>
        Padding
      </h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
          marginTop: "10px",
        }}
      >
        <input
          type="number"
          placeholder="Top"
          value={styles.paddingTop ?? 0}
          onChange={(e) =>
            updateStyles({
              paddingTop: Number(e.target.value),
            })
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
          type="number"
          placeholder="Right"
          value={styles.paddingRight ?? 0}
          onChange={(e) =>
            updateStyles({
              paddingRight: Number(e.target.value),
            })
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
          type="number"
          placeholder="Bottom"
          value={styles.paddingBottom ?? 0}
          onChange={(e) =>
            updateStyles({
              paddingBottom: Number(e.target.value),
            })
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
          type="number"
          placeholder="Left"
          value={styles.paddingLeft ?? 0}
          onChange={(e) =>
            updateStyles({
              paddingLeft: Number(e.target.value),
            })
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />
      </div>

      <h4 style={{ marginTop: "20px" }}>
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
          marginTop: "8px",
          borderRadius: "8px",
          border: "none",
        }}
      >
        <option value="block">Block</option>
        <option value="flex">Flex</option>
        <option value="grid">Grid</option>
      </select>

      {styles.display === "flex" && (
        <>
          <p style={{ marginTop: "15px" }}>
            Flex Direction
          </p>

          <select
            value={styles.flexDirection ?? "row"}
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
            <option value="row">Row</option>
            <option value="column">Column</option>
          </select>

          <p style={{ marginTop: "15px" }}>
            Justify Content
          </p>

          <select
            value={
              styles.justifyContent ?? "flex-start"
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
            <option value="flex-start">Start</option>
            <option value="center">Center</option>
            <option value="flex-end">End</option>
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
              styles.alignItems ?? "stretch"
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
            <option value="stretch">Stretch</option>
            <option value="flex-start">Start</option>
            <option value="center">Center</option>
            <option value="flex-end">End</option>
          </select>

          <p style={{ marginTop: "15px" }}>
            Gap
          </p>

          <input
            type="number"
            value={styles.gap ?? 0}
            onChange={(e) =>
              updateStyles({
                gap: Number(e.target.value),
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