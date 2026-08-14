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
    borderRadius: "7px",
    border: "none",
    textAlign: "center" as const,
    boxSizing:
      "border-box" as const,
    background: "#ffffff",
    color: "#111827",
    outline: "none",
  };

  const update =
    (
      property:
        | "top"
        | "right"
        | "bottom"
        | "left"
    ) =>
    (
      value: number
    ) => {
      onChange(
        property,
        Math.max(0, value)
      );
    };

  return (
    <div
      style={{
        marginTop: "22px",
      }}
    >
      <h4
        style={{
          marginBottom: "10px",
          color: "#d1d5db",
          fontSize: "13px",
          fontWeight: 700,
          textTransform:
            "uppercase",
          letterSpacing:
            "0.06em",
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
          border:
            "1px solid #374151",
          padding: "8px",
          borderRadius: "10px",
        }}
      >
        <div />

        <input
          type="number"
          min="0"
          value={top}
          onChange={(e) =>
            update("top")(
              Number(
                e.target.value
              )
            )
          }
          placeholder="Top"
          aria-label={`${title} top`}
          style={
            inputStyle
          }
        />

        <div />

        <input
          type="number"
          min="0"
          value={left}
          onChange={(e) =>
            update("left")(
              Number(
                e.target.value
              )
            )
          }
          placeholder="Left"
          aria-label={`${title} left`}
          style={
            inputStyle
          }
        />

        <div
          style={{
            display: "flex",
            alignItems:
              "center",
            justifyContent:
              "center",
            color:
              "#9ca3af",
            fontSize:
              "10px",
            fontWeight:
              700,
            border:
              "1px dashed #4b5563",
            borderRadius:
              "7px",
            minHeight:
              "36px",
            letterSpacing:
              "0.05em",
          }}
        >
          BOX
        </div>

        <input
          type="number"
          min="0"
          value={right}
          onChange={(e) =>
            update("right")(
              Number(
                e.target.value
              )
            )
          }
          placeholder="Right"
          aria-label={`${title} right`}
          style={
            inputStyle
          }
        />

        <div />

        <input
          type="number"
          min="0"
          value={bottom}
          onChange={(e) =>
            update("bottom")(
              Number(
                e.target.value
              )
            )
          }
          placeholder="Bottom"
          aria-label={`${title} bottom`}
          style={
            inputStyle
          }
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
    boxSizing:
      "border-box" as const,
    background:
      "#ffffff",
    color:
      "#111827",
    outline:
      "none",
  };

  const twoColumnStyle = {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
  };

  const selectStyle = {
    ...inputStyle,
    cursor:
      "pointer",
  };

  const sectionTitleStyle = {
    marginTop: "24px",
    marginBottom: "11px",
    color: "#d1d5db",
    fontSize: "13px",
    fontWeight: 700,
    textTransform:
      "uppercase" as const,
    letterSpacing:
      "0.06em",
  };

  const labelStyle = {
    display: "block",
    marginTop: "14px",
    color: "#d1d5db",
    fontSize: "13px",
  };

  const valueStyle = {
    marginTop: "6px",
    color: "#9ca3af",
    fontSize: "12px",
  };

  const setDisplay = (
    display:
      | "block"
      | "flex"
      | "grid"
  ) => {
    if (
      display === "flex"
    ) {
      updateStyles({
        display:
          "flex",
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
          styles.gap ??
          16,
      });

      return;
    }

    if (
      display === "grid"
    ) {
      updateStyles({
        display:
          "grid",
        gridColumns:
          styles.gridColumns ??
          1,
        gridGap:
          styles.gridGap ??
          16,
        gap:
          styles.gap ??
          16,
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
      display:
        "block",
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
      display:
        "flex",
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
        Math.max(
          1,
          Number.isFinite(
            columns
          )
            ? columns
            : 1
        )
      );

    updateStyles({
      display:
        "grid",
      gridColumns:
        safeColumns,
      gridGap:
        styles.gridGap ??
        16,
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

  const updateGap = (
    value: number
  ) => {
    updateStyles({
      gap:
        Math.max(
          0,
          value
        ),
    });
  };

  const updateGridGap = (
    value: number
  ) => {
    const safeValue =
      Math.max(
        0,
        value
      );

    updateStyles({
      gridGap:
        safeValue,
      gap:
        safeValue,
    });
  };

  const applyResponsivePreset = (
    columns: number
  ) => {
    updateStyles({
      display:
        "grid",
      gridColumns:
        columns,
      gridGap:
        styles.gridGap ??
        16,
      gap:
        styles.gridGap ??
        styles.gap ??
        16,
    });
  };

  const getRecommendedColumns =
    () => {
      if (
        device ===
        "desktop"
      ) {
        return 3;
      }

      if (
        device ===
        "tablet"
      ) {
        return 2;
      }

      return 1;
    };

  const applyLayoutPreset = (
    preset:
      | "content"
      | "split"
      | "cards"
      | "center"
      | "stack"
  ) => {
    if (
      preset ===
      "content"
    ) {
      updateStyles({
        display:
          "block",
        width: 100,
        widthUnit:
          "%",
        maxWidth:
          1100,
        maxWidthUnit:
          "px",
        marginLeft:
          0,
        marginRight:
          0,
        paddingLeft:
          24,
        paddingRight:
          24,
      });

      return;
    }

    if (
      preset ===
      "split"
    ) {
      updateStyles({
        display:
          "flex",
        flexDirection:
          "row",
        justifyContent:
          "space-between",
        alignItems:
          "center",
        gap:
          32,
      });

      return;
    }

    if (
      preset ===
      "cards"
    ) {
      updateStyles({
        display:
          "grid",
        gridColumns:
          3,
        gridGap:
          24,
        gap:
          24,
      });

      return;
    }

    if (
      preset ===
      "center"
    ) {
      updateStyles({
        display:
          "flex",
        flexDirection:
          "column",
        justifyContent:
          "center",
        alignItems:
          "center",
        gap:
          16,
        horizontalAlign:
          "center",
      });

      return;
    }

    updateStyles({
      display:
        "flex",
      flexDirection:
        "column",
      justifyContent:
        "flex-start",
      alignItems:
        "stretch",
      gap:
        16,
    });
  };

  return (
    <div>
      <h3 className="property-section-title">
        Layout
      </h3>

      <div
        style={{
          marginTop: "10px",
          padding:
            "10px 12px",
          background:
            "#111827",
          border:
            "1px solid #374151",
          borderRadius:
            "8px",
          color:
            "#d1d5db",
          fontSize:
            "12px",
        }}
      >
        Editing:{" "}
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
      </div>

      <h4
        style={
          sectionTitleStyle
        }
      >
        Size
      </h4>

      <label
        style={
          labelStyle
        }
      >
        Width
      </label>

      <div
        style={
          twoColumnStyle
        }
      >
        <input
          type="number"
          min="0"
          value={
            styles.width ??
            100
          }
          onChange={(e) =>
            updateStyles({
              width:
                Math.max(
                  0,
                  Number(
                    e.target
                      .value
                  )
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
            styles.widthUnit ??
            "%"
          }
          onChange={(e) =>
            updateStyles({
              widthUnit:
                e.target
                  .value as
                  | "%"
                  | "px",
            })
          }
          style={{
            ...selectStyle,
            width:
              "75px",
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

      <label
        style={
          labelStyle
        }
      >
        Height
      </label>

      <div
        style={
          twoColumnStyle
        }
      >
        <input
          type="number"
          min="0"
          value={
            styles.height ??
            300
          }
          onChange={(e) =>
            updateStyles({
              height:
                Math.max(
                  0,
                  Number(
                    e.target
                      .value
                  )
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
                e.target
                  .value as
                  | "%"
                  | "px",
            })
          }
          style={{
            ...selectStyle,
            width:
              "75px",
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

      <label
        style={
          labelStyle
        }
      >
        Max Width
      </label>

      <div
        style={
          twoColumnStyle
        }
      >
        <input
          type="number"
          min="0"
          value={
            styles.maxWidth ??
            0
          }
          onChange={(e) =>
            updateStyles({
              maxWidth:
                Math.max(
                  0,
                  Number(
                    e.target
                      .value
                  )
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
                e.target
                  .value as
                  | "%"
                  | "px",
            })
          }
          style={{
            ...selectStyle,
            width:
              "75px",
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

      <label
        style={
          labelStyle
        }
      >
        Min Height
      </label>

      <div
        style={
          twoColumnStyle
        }
      >
        <input
          type="number"
          min="0"
          value={
            styles.minHeight ??
            0
          }
          onChange={(e) =>
            updateStyles({
              minHeight:
                Math.max(
                  0,
                  Number(
                    e.target
                      .value
                  )
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
                e.target
                  .value as
                  | "%"
                  | "px",
            })
          }
          style={{
            ...selectStyle,
            width:
              "75px",
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
          styles.marginTop ??
          0
        }
        right={
          styles.marginRight ??
          0
        }
        bottom={
          styles.marginBottom ??
          0
        }
        left={
          styles.marginLeft ??
          0
        }
        onChange={(
          property,
          value
        ) => {
          const updates: Partial<BuilderStyles> =
            {};

          if (
            property ===
            "top"
          ) {
            updates.marginTop =
              value;
          }

          if (
            property ===
            "right"
          ) {
            updates.marginRight =
              value;
          }

          if (
            property ===
            "bottom"
          ) {
            updates.marginBottom =
              value;
          }

          if (
            property ===
            "left"
          ) {
            updates.marginLeft =
              value;
          }

          updateStyles(
            updates
          );
        }}
      />

      <BoxModel
        title="Padding"
        top={
          styles.paddingTop ??
          0
        }
        right={
          styles.paddingRight ??
          0
        }
        bottom={
          styles.paddingBottom ??
          0
        }
        left={
          styles.paddingLeft ??
          0
        }
        onChange={(
          property,
          value
        ) => {
          const updates: Partial<BuilderStyles> =
            {};

          if (
            property ===
            "top"
          ) {
            updates.paddingTop =
              value;
          }

          if (
            property ===
            "right"
          ) {
            updates.paddingRight =
              value;
          }

          if (
            property ===
            "bottom"
          ) {
            updates.paddingBottom =
              value;
          }

          if (
            property ===
            "left"
          ) {
            updates.paddingLeft =
              value;
          }

          updateStyles(
            updates
          );
        }}
      />

      <h4
        style={
          sectionTitleStyle
        }
      >
        Positioning
      </h4>

      <label
        style={
          labelStyle
        }
      >
        Horizontal Alignment
      </label>

      <div
        style={{
          display:
            "grid",
          gridTemplateColumns:
            "repeat(3, 1fr)",
          gap:
            "6px",
          marginTop:
            "8px",
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
                border:
                  "none",
                borderRadius:
                  "7px",
                background:
                  (styles.horizontalAlign ??
                    "left") ===
                  alignment
                    ? "#7c3aed"
                    : "#374151",
                color:
                  "#ffffff",
                cursor:
                  "pointer",
              }}
            >
              {alignment
                .charAt(
                  0
                )
                .toUpperCase() +
                alignment.slice(
                  1
                )}
            </button>
          )
        )}
      </div>

      <h4
        style={
          sectionTitleStyle
        }
      >
        Display
      </h4>

      <div
        style={{
          display:
            "grid",
          gridTemplateColumns:
            "repeat(3, 1fr)",
          gap:
            "6px",
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
                border:
                  "none",
                borderRadius:
                  "7px",
                background:
                  styles.display ===
                  display
                    ? "#7c3aed"
                    : "#374151",
                color:
                  "#ffffff",
                cursor:
                  "pointer",
              }}
            >
              {display
                .charAt(
                  0
                )
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
          <label
            style={
              labelStyle
            }
          >
            Flex Direction
          </label>

          <div
            style={{
              display:
                "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap:
                "6px",
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
              (
                direction
              ) => (
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
                      "7px",
                    background:
                      styles.flexDirection ===
                      direction
                        ? "#7c3aed"
                        : "#374151",
                    color:
                      "#ffffff",
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

          <label
            style={
              labelStyle
            }
          >
            Justify Content
          </label>

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

          <label
            style={
              labelStyle
            }
          >
            Align Items
          </label>

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

          <label
            style={
              labelStyle
            }
          >
            Gap
          </label>

          <input
            type="number"
            min="0"
            value={
              styles.gap ??
              16
            }
            onChange={(e) =>
              updateGap(
                Number(
                  e.target.value
                )
              )
            }
            style={
              inputStyle
            }
          />

          <div
            style={
              valueStyle
            }
          >
            {styles.gap ??
              16}
            px
          </div>
        </>
      )}

      {styles.display ===
        "grid" && (
        <>
          <label
            style={
              labelStyle
            }
          >
            Columns
          </label>

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
              gap:
                "6px",
              marginTop:
                "10px",
            }}
          >
            {[1, 2, 3, 4].map(
              (
                columns
              ) => (
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
                      "7px",
                    background:
                      styles.gridColumns ===
                      columns
                        ? "#7c3aed"
                        : "#374151",
                    color:
                      "#ffffff",
                    cursor:
                      "pointer",
                  }}
                >
                  {columns}
                </button>
              )
            )}
          </div>

          <label
            style={
              labelStyle
            }
          >
            Grid Gap
          </label>

          <input
            type="number"
            min="0"
            value={
              styles.gridGap ??
              16
            }
            onChange={(e) =>
              updateGridGap(
                Number(
                  e.target
                    .value
                )
              )
            }
            style={
              inputStyle
            }
          />

          <div
            style={
              valueStyle
            }
          >
            {styles.gridGap ??
              16}
            px
          </div>

          <h4
            style={
              sectionTitleStyle
            }
          >
            Responsive
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
                    "#a78bfa",
                }}
              >
                {
                  getRecommendedColumns()
                }
              </strong>
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
                  "7px",
                background:
                  "#7c3aed",
                color:
                  "#ffffff",
                cursor:
                  "pointer",
                fontWeight:
                  600,
                fontSize:
                  "12px",
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
                : ""}
            </button>
          </div>
        </>
      )}

      <h4
        style={
          sectionTitleStyle
        }
      >
        Layout Presets
      </h4>

      <div
        style={{
          display:
            "grid",
          gridTemplateColumns:
            "repeat(2, 1fr)",
          gap:
            "8px",
          marginTop:
            "10px",
        }}
      >
        {(
          [
            {
              id:
                "content" as const,
              label:
                "Content",
              description:
                "Centered content width",
            },
            {
              id:
                "split" as const,
              label:
                "Split",
              description:
                "Two sides",
            },
            {
              id:
                "cards" as const,
              label:
                "Cards",
              description:
                "3-column grid",
            },
            {
              id:
                "center" as const,
              label:
                "Centered",
              description:
                "Center stack",
            },
            {
              id:
                "stack" as const,
              label:
                "Stack",
              description:
                "Vertical flow",
            },
          ]
        ).map(
          (preset) => (
            <button
              key={
                preset.id
              }
              type="button"
              onClick={() =>
                applyLayoutPreset(
                  preset.id
                )
              }
              style={{
                minHeight:
                  "68px",
                padding:
                  "10px 8px",
                border:
                  "1px solid #374151",
                borderRadius:
                  "8px",
                background:
                  "#111827",
                color:
                  "#ffffff",
                cursor:
                  "pointer",
                textAlign:
                  "left",
              }}
            >
              <strong
                style={{
                  display:
                    "block",
                  fontSize:
                    "12px",
                }}
              >
                {
                  preset.label
                }
              </strong>

              <span
                style={{
                  display:
                    "block",
                  marginTop:
                    "4px",
                  color:
                    "#9ca3af",
                  fontSize:
                    "10px",
                  lineHeight:
                    1.4,
                }}
              >
                {
                  preset.description
                }
              </span>
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default LayoutProperties;