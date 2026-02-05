---
title: 'VSCode settings'
metaTitle: ''
metaDesc: ''
socialImage:
date: '2022-05-26'
tags:
    -
---

```jsonc
{
  // Zoom
  "window.zoomLevel": -0.5,

  // Font
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,

  // Tab
  "editor.tabSize": 2,

  // Icon
  "workbench.iconTheme": "vs-nomo-dark",
  "vsicons.dontShowNewVersionMessage": true,
  "vsicons.presets.hideFolders": false,

  // Code formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
  },
  "editor.formatOnPaste": true,

  // Explorer
  "explorer.autoReveal": false,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,

  // Workbench
  // Doesn't show the welcome page each time you open vscode
  // https://www.youtube.com/watch?v=U9mTfMe1Ke8
  "workbench.startupEditor": "none",
  // False = files are opened in tabs that do not disappear after opening another file, they are not "preview tabs"
  // https://www.youtube.com/watch?v=yLsnGyh7nL8
  "workbench.editor.enablePreview": false,
  "workbench.colorCustomizations": {
    "editor.background": "#000000",
    "editor.selectionBackground": "#009dff68",

    // Lines General
    "editorLineNumber.foreground": "#9c9c9ccb",
    "editorLineNumber.activeForeground": "#ffffff",

    // Current Line
    "editor.lineHighlightBackground": "#1073cf1a",
    "editor.lineHighlightBorder": "#9fced11f",

    // Diff
    // "diffEditor.insertedTextBackground": "#aec47e1d",
    // "diffEditor.insertedTextBorder": "#aec47e1d",
    // "diffEditor.removedTextBackground": "#6a3333a9",
    // "diffEditor.removedTextBorder": "#6d262656",
    "diffEditor.border": "#0066ff"
  },

  // Editor
  "editor.suggestSelection": "first",
  "editor.wordWrap": "off",
  // your minimap (preview of your code in top right of your screen) will no longer render your code with characters, but blocks
  // https://www.youtube.com/watch?v=f1TTFWJKWKc
  "editor.minimap.renderCharacters": false,
  // an editor guide is a vertical colored line that connects two matching brackets to better outline a code block
  // https://www.youtube.com/watch?v=4UXlkUo-emY
  "editor.guides.indentation": true,
  "editor.renderWhitespace": "none",
  "editor.bracketPairColorization.enabled": false,

  // Window
  // renders a nicer window if you're on linux or windows (what are you doing on windows)
  "window.titleBarStyle": "custom",

  // Extensions
  "extensions.ignoreRecommendations": true,

  // Other general settings
  "liveServer.settings.donotShowInfoMsg": true,

  // Diff Editor
  "diffEditor.ignoreTrimWhitespace": false,
  "diffEditor.wordWrap": "off",

  ////////////////////////////////
  // Language specific settings //
  ////////////////////////////////

  // Javascript
  "javascript.updateImportsOnFileMove.enabled": "always",

  // Typescript
  "typescript.updateImportsOnFileMove.enabled": "always",
  "typescript.preferences.importModuleSpecifier": "relative",

  // HTML
  "html.format.endWithNewline": true,

  // Python
  "[python]": {
    "editor.defaultFormatter": "ms-python.python"
  },
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "python.formatting.autopep8Args": ["--max-line-length", "120"],

  // YAML
  "yaml.schemas": {
    "~/.empty_schema.json": ["*.y[a-z]?ml"]
  },

  ////////////////
  // Extensions //
  ////////////////

  // Intellicode
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",

  "codestream.serverUrl": "https://api.codestream.com",
  "codestream.email": "leonardo@modjo.ai",

  "window.experimental.commandCenter": true,
  "workbench.activityBar.visible": false,
  "workbench.colorTheme": "Dark+ (contrast)"
}
```
