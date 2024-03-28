module.exports = {
      ...require("nextra")({
        theme: "nextra-theme-docs",
        themeConfig: "./theme.config.jsx",
        latex: true,
        titleSuffix:
        "Introduction to Operating System | Full Course for Beginners - Mike Murphy",
      })()
    };