export const appearance = (theme: "light" | "dark") =>
  ({
    theme: "flat",
    variables: {
      fontFamily:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontLineHeight: "1.5",
      borderRadius: "12px",
      colorPrimaryText: theme === "dark" ? "white" : "black",
    },
    rules: {
      ".Block": {
        backgroundColor: theme === "dark" ? "#171717" : "#f5f5f5",
        color: theme === "dark" ? "white" : "black",
        boxShadow: "none",
        padding: "12px",
      },
      ".Input": {
        padding: "12px",
        color: theme === "dark" ? "white" : "black",
        backgroundColor: theme === "dark" ? "black" : "white",
        border: theme === "dark" ? "1px solid #171717" : "1px solid #f5f5f5",
      },
      ".Input:disabled, .Input--invalid:disabled": {
        color: "#888",
      },
      ".Tab": {
        padding: "10px 12px 8px 12px",
        border: "1px solid transparent",
        backgroundColor: theme === "dark" ? "#171717" : "#f5f5f5",
        color: theme === "dark" ? "white" : "black",
      },
      ".Tab:hover": {
        color: theme === "dark" ? "#f5f5f5" : "#171717",
      },
      ".Tab--selected, .Tab--selected:focus, .Tab--selected:hover": {
        border: theme === "dark" ? "1px solid #f5f5f5" : "1px solid #171717",
        backgroundColor: theme === "dark" ? "#171717" : "#f5f5f5",
        color: theme === "dark" ? "white" : "black",
      },
      ".Label": {
        fontWeight: "500",
        color: theme === "dark" ? "white" : "black",
      },
    },
  } as const);
