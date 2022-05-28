---
title: 'VSCode settings'
metaTitle: ''
metaDesc: ''
socialImage:
date: '2022-05-26'
tags:
    -
---

```
{
  // Zoom level
  "window.zoomLevel": 0.4,

  // Theme
  "workbench.colorTheme": "GitHub Dark Default",
  "workbench.colorCustomizations": {
    // Color background of currently selected line
    "editor.lineHighlightBackground": "#1073cf2d",
    // Color of the the two parralel lines that outline the currently focused line
    "editor.lineHighlightBorder": "#9fced11f"
  },

  // Font
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 15,

  // Tab
  "editor.tabSize": 2,

  // Icons
  "workbench.iconTheme": "vs-minimal",
  "vsicons.dontShowNewVersionMessage": true,
  "vsicons.presets.hideFolders": false,

  // Code formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
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
    "editor.defaultFormatter": "ms-python.vscode-pylance"
  },
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
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue"
}
```
