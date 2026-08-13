import type {
  BuilderStyles,
  DeviceType,
} from "../../types/builder";

interface LayoutPropertiesProps {
  styles: BuilderStyles;
  device: DeviceType;
  updateStyles: (
    styles: Partial<BuilderStyles>
  ) => void;
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
  const inputStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "none",
    textAlign: "center" as const,
    boxSizing: "border-box" as const,
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h4
        style={{
          marginBottom: "10px",
          color: "#d1d5db",
        }}
      >
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
          style={inputStyle}
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
          style={inputStyle}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
            fontSize: "11px",
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
          style={inputStyle}
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
          style={inputStyle}
        />

        <div />
      </div>
    </div>
  );
}

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

function LayoutProperties({
  styles,
  device,
  updateStyles,
}: LayoutPropertiesProps) {
  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    boxSizing: "border-box" as const,
  };

  const twoColumnStyle = {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
  };

  const selectStyle = {
    ...inputStyle,
    background: "white",
    color: "#111827",
  };

  const setDisplay = (
    display:
      | "block"
      | "flex"
      | "grid"
  ) => {
    if (display === "flex") {
      updateStyles({
        display: "flex",
        flexDirection:
          styles.flexDirection ??
          "row",
        justifyContent:
          styles.justifyContent ??
          "flex-start",
        alignItems:
          styles.alignItems ??
          "stretch",
        gap:
          styles.gap ?? 16,
      });

      return;
    }

    if (display === "grid") {
      updateStyles({
        display: "grid",
        gridColumns:
          styles.gridColumns ?? 1,
        gridGap:
          styles.gridGap ?? 16,
        gap:
          styles.gap ?? 16,
        flexDirection:
          undefined,
        justifyContent:
          undefined,
        alignItems:
          undefined,
      });

      return;
    }

    updateStyles({
      display: "block",
      flexDirection:
        undefined,
      justifyContent:
        undefined,
      alignItems:
        undefined,
      gridColumns:
        undefined,
      gridGap:
        undefined,
    });
  };

  const setFlexDirection = (
    direction:
      | "row"
      | "column"
  ) => {
    updateStyles({
      display: "flex",
      flexDirection:
        direction,
    });
  };

  const setGridColumns = (
    columns: number
  ) => {
    const safeColumns =
      Math.min(
        12,
        Math.max(1, columns)
      );

    updateStyles({
      display: "grid",
      gridColumns:
        safeColumns,
      gridGap:
        styles.gridGap ?? 16,
      gap:
        styles.gridGap ??
        styles.gap ??
        16,
      flexDirection:
        undefined,
      justifyContent:
        undefined,
      alignItems:
        undefined,
    });
  };

  const applyResponsivePreset = (
    columns: number
  ) => {
    updateStyles({
      display: "grid",
      gridColumns:
        columns,
      gridGap:
        styles.gridGap ?? 16,
      gap:
        styles.gridGap ??
        styles.gap ??
        16,
    });
  };

  const getRecommendedColumns =
    () => {
      if (device === "desktop") {
        return 3;
      }

      if (device === "tablet") {
        return 2;
      }

      return 1;
    };

  return (
    <div>
      <h3 className="property-section-title">
        Layout
      </h3>

      <div
        style={{
          marginTop: "10px",
          padding: "10px 12px",
          background: "#111827",
          border:
            "1px solid #374151",
          borderRadius: "8px",
          color: "#d1d5db",
          fontSize: "12px",
        }}
      >
        Editing:{" "}
        <strong
          style={{
            color: "#ffffff",
          }}
        >
          {getDeviceLabel(device)}
        </strong>
      </div>

      <h4
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          color: "#d1d5db",
        }}
      >
        Size
      </h4>

      <p>Width</p>

      <div style={twoColumnStyle}>
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
            ...inputStyle,
            flex: 1,
          }}
        />

        <select
          value={
            styles.widthUnit ?? "%"
          }
          onChange={(e) =>
            updateStyles({
              widthUnit:
                e.target.value as
                  | "%"
                  | "px",
            })
          }
          style={{
            ...selectStyle,
            width: "75px",
          }}
        >
          <option value="%">
            %
          </option>
          <option value="px">
            px
          </option>
        </select>
      </div>

      <p
        style={{
          marginTop: "15px",
        }}
      >
        Height
      </p>

      <div style={twoColumnStyle}>
        <input
          type="number"
          min="0"
          value={
            styles.height ?? 300
          }
          onChange={(e) =>
            updateStyles({
              height: Number(
                e.target.value
              ),
            })
          }
          style={{
            ...inputStyle,
            flex: 1,
          }}
        />

        <select
          value={
            styles.heightUnit ??
            "px"
          }
          onChange={(e) =>
            updateStyles({
              heightUnit:
                e.target.value as
                  | "%"
                  | "px",
            })
          }
          style={{
            ...selectStyle,
            width: "75px",
          }}
        >
          <option value="px">
            px
          </option>
          <option value="%">
            %
          </option>
        </select>
      </div>

      <p
        style={{
          marginTop: "15px",
        }}
      >
        Max Width
      </p>

      <div style={twoColumnStyle}>
        <input
          type="number"
          min="0"
          value={
            styles.maxWidth ?? 0
          }
          onChange={(e) =>
            updateStyles({
              maxWidth: Number(
                e.target.value
              ),
            })
          }
          style={{
            ...inputStyle,
            flex: 1,
          }}
        />

        <select
          value={
            styles.maxWidthUnit ??
            "px"
          }
          onChange={(e) =>
            updateStyles({
              maxWidthUnit:
                e.target.value as
                  | "%"
                  | "px",
            })
          }
          style={{
            ...selectStyle,
            width: "75px",
          }}
        >
          <option value="px">
            px
          </option>
          <option value="%">
            %
          </option>
        </select>
      </div>

      <p
        style={{
          marginTop: "15px",
        }}
      >
        Min Height
      </p>

      <div style={twoColumnStyle}>
        <input
          type="number"
          min="0"
          value={
            styles.minHeight ?? 0
          }
          onChange={(e) =>
            updateStyles({
              minHeight: Number(
                e.target.value
              ),
            })
          }
          style={{
            ...inputStyle,
            flex: 1,
          }}
        />

        <select
          value={
            styles.minHeightUnit ??
            "px"
          }
          onChange={(e) =>
            updateStyles({
              minHeightUnit:
                e.target.value as
                  | "%"
                  | "px",
            })
          }
          style={{
            ...selectStyle,
            width: "75px",
          }}
        >
          <option value="px">
            px
          </option>
          <option value="%">
            %
          </option>
        </select>
      </div>

      <BoxModel
        title="Margin"
        top={
          styles.marginTop ?? 0
        }
        right={
          styles.marginRight ?? 0
        }
        bottom={
          styles.marginBottom ?? 0
        }
        left={
          styles.marginLeft ?? 0
        }
        onChange={(
          property,
          value
        ) => {
          if (
            property === "top"
          ) {
            updateStyles({
              marginTop:
                value,
            });
          }

          if (
            property === "right"
          ) {
            updateStyles({
              marginRight:
                value,
            });
          }

          if (
            property ===
            "bottom"
          ) {
            updateStyles({
              marginBottom:
                value,
            });
          }

          if (
            property === "left"
          ) {
            updateStyles({
              marginLeft:
                value,
            });
          }
        }}
      />

      <BoxModel
        title="Padding"
        top={
          styles.paddingTop ?? 0
        }
        right={
          styles.paddingRight ?? 0
        }
        bottom={
          styles.paddingBottom ?? 0
        }
        left={
          styles.paddingLeft ?? 0
        }
        onChange={(
          property,
          value
        ) => {
          if (
            property === "top"
          ) {
            updateStyles({
              paddingTop:
                value,
            });
          }

          if (
            property === "right"
          ) {
            updateStyles({
              paddingRight:
                value,
            });
          }

          if (
            property ===
            "bottom"
          ) {
            updateStyles({
              paddingBottom:
                value,
            });
          }

          if (
            property === "left"
          ) {
            updateStyles({
              paddingLeft:
                value,
            });
          }
        }}
      />

      <h4
        style={{
          marginTop: "25px",
          marginBottom: "10px",
          color: "#d1d5db",
        }}
      >
        Positioning
      </h4>

      <p>
        Horizontal Alignment
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3, 1fr)",
          gap: "6px",
          marginTop: "8px",
        }}
      >
        {(
          [
            "left",
            "center",
            "right",
          ] as const
        ).map(
          (alignment) => (
            <button
              key={
                alignment
              }
              type="button"
              onClick={() =>
                updateStyles({
                  horizontalAlign:
                    alignment,
                })
              }
              style={{
                padding:
                  "10px 5px",
                border: "none",
                borderRadius:
                  "6px",
                background:
                  (styles.horizontalAlign ??
                    "left") ===
                  alignment
                    ? "#2563eb"
                    : "#374151",
                color:
                  "white",
                cursor:
                  "pointer",
              }}
            >
              {alignment
                .charAt(0)
                .toUpperCase() +
                alignment.slice(
                  1
                )}
            </button>
          )
        )}
      </div>

      <h4
        style={{
          marginTop: "25px",
          marginBottom: "10px",
          color: "#d1d5db",
        }}
      >
        Display
      </h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3, 1fr)",
          gap: "6px",
          marginBottom:
            "10px",
        }}
      >
        {(
          [
            "block",
            "flex",
            "grid",
          ] as const
        ).map(
          (display) => (
            <button
              key={
                display
              }
              type="button"
              onClick={() =>
                setDisplay(
                  display
                )
              }
              style={{
                padding:
                  "10px 5px",
                border: "none",
                borderRadius:
                  "6px",
                background:
                  styles.display ===
                  display
                    ? "#2563eb"
                    : "#374151",
                color:
                  "white",
                cursor:
                  "pointer",
              }}
            >
              {display
                .charAt(0)
                .toUpperCase() +
                display.slice(
                  1
                )}
            </button>
          )
        )}
      </div>

      {styles.display ===
        "flex" && (
        <>
          <p
            style={{
              marginTop:
                "15px",
            }}
          >
            Flex Direction
          </p>

          <div
            style={{
              display:
                "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "6px",
              marginTop:
                "8px",
            }}
          >
            {(
              [
                "row",
                "column",
              ] as const
            ).map(
              (direction) => (
                <button
                  key={
                    direction
                  }
                  type="button"
                  onClick={() =>
                    setFlexDirection(
                      direction
                    )
                  }
                  style={{
                    padding:
                      "10px",
                    border:
                      "none",
                    borderRadius:
                      "6px",
                    background:
                      styles.flexDirection ===
                      direction
                        ? "#2563eb"
                        : "#374151",
                    color:
                      "white",
                    cursor:
                      "pointer",
                  }}
                >
                  {direction ===
                  "row"
                    ? "Row"
                    : "Column"}
                </button>
              )
            )}
          </div>

          <p
            style={{
              marginTop:
                "15px",
            }}
          >
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
                  e.target
                    .value as
                    | "flex-start"
                    | "center"
                    | "flex-end"
                    | "space-between"
                    | "space-around"
                    | "space-evenly",
              })
            }
            style={
              selectStyle
            }
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

          <p
            style={{
              marginTop:
                "15px",
            }}
          >
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
                  e.target
                    .value as
                    | "flex-start"
                    | "center"
                    | "flex-end"
                    | "stretch",
              })
            }
            style={
              selectStyle
            }
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

          <p
            style={{
              marginTop:
                "15px",
            }}
          >
            Gap
          </p>

          <input
            type="number"
            min="0"
            value={
              styles.gap ?? 16
            }
            onChange={(e) =>
              updateStyles({
                gap: Number(
                  e.target.value
                ),
              })
            }
            style={{
              ...inputStyle,
              marginTop:
                "8px",
            }}
          />
        </>
      )}

      {styles.display ===
        "grid" && (
        <>
          <p
            style={{
              marginTop:
                "15px",
            }}
          >
            Columns
          </p>

          <input
            type="number"
            min="1"
            max="12"
            value={
              styles.gridColumns ??
              1
            }
            onChange={(e) =>
              setGridColumns(
                Number(
                  e.target
                    .value
                )
              )
            }
            style={{
              ...inputStyle,
              marginTop:
                "8px",
            }}
          />

          <div
            style={{
              display:
                "grid",
              gridTemplateColumns:
                "repeat(4, 1fr)",
              gap: "6px",
              marginTop:
                "10px",
            }}
          >
            {[1, 2, 3, 4].map(
              (columns) => (
                <button
                  key={
                    columns
                  }
                  type="button"
                  onClick={() =>
                    setGridColumns(
                      columns
                    )
                  }
                  style={{
                    padding:
                      "9px 4px",
                    border:
                      "none",
                    borderRadius:
                      "6px",
                    background:
                      styles.gridColumns ===
                      columns
                        ? "#2563eb"
                        : "#374151",
                    color:
                      "white",
                    cursor:
                      "pointer",
                  }}
                >
                  {columns}
                </button>
              )
            )}
          </div>

          <p
            style={{
              marginTop:
                "15px",
            }}
          >
            Grid Gap
          </p>

          <input
            type="number"
            min="0"
            value={
              styles.gridGap ??
              16
            }
            onChange={(e) => {
              const value =
                Number(
                  e.target.value
                );

              updateStyles({
                gridGap:
                  value,
                gap:
                  value,
              });
            }}
            style={{
              ...inputStyle,
              marginTop:
                "8px",
            }}
          />

          <h4
            style={{
              marginTop:
                "25px",
              marginBottom:
                "10px",
              color:
                "#d1d5db",
            }}
          >
            Responsive Preset
          </h4>

          <div
            style={{
              padding:
                "12px",
              background:
                "#111827",
              border:
                "1px solid #374151",
              borderRadius:
                "8px",
            }}
          >
            <div
              style={{
                color:
                  "#9ca3af",
                fontSize:
                  "12px",
                lineHeight:
                  1.5,
                marginBottom:
                  "10px",
              }}
            >
              Recommended
              columns
              for{" "}
              <strong
                style={{
                  color:
                    "#ffffff",
                }}
              >
                {getDeviceLabel(
                  device
                )}
              </strong>
              :{" "}
              <strong
                style={{
                  color:
                    "#60a5fa",
                }}
              >
                {getRecommendedColumns()}
              </strong>{" "}
              column
              {getRecommendedColumns() !==
              1
                ? "s"
                : ""}
            </div>

            <button
              type="button"
              onClick={() =>
                applyResponsivePreset(
                  getRecommendedColumns()
                )
              }
              style={{
                width:
                  "100%",
                padding:
                  "10px",
                border:
                  "none",
                borderRadius:
                  "6px",
                background:
                  "#2563eb",
                color:
                  "white",
                cursor:
                  "pointer",
                fontWeight:
                  600,
              }}
            >
              Use{" "}
              {
                getRecommendedColumns()
              }{" "}
              Column
              {getRecommendedColumns() !==
              1
                ? "s"
                : ""}{" "}
              on{" "}
              {getDeviceLabel(
                device
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default LayoutProperties;