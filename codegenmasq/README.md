# CodegenMasq - VS Code Extension

**CodegenMasq** is a VS Code extension that helps you obfuscate sensitive data in your code snippets before sharing them or using them in code generators.

## Features

1. **Code Obfuscation**: **CodegenMasq** can replace specified sensitive words in your code snippets with alternative words of your choosing, helping protect sensitive or proprietary information.

2. **Flexible and Configurable**: You have full control over which words get replaced and what they get replaced with. The configuration for replacements is easily accessible and modifiable.

3. **Simple to Use**: With just a simple command, you can quickly obfuscate your selected code snippet or clipboard content if no text is selected in your active VS Code editor.

## Usage

1. Highlight the text or code snippet you want to obfuscate in your active VS Code editor. If no text is selected, the content of the clipboard will be used.

2. Use the shortcut `ctrl+alt+g` (or `cmd+alt+g` for macOS) or invoke the `cgmasq` command from the command palette (`ctrl+shift+p` and then search for `cgmasq`).

3. The extension will replace sensitive words based on your configured replacements and present a diff view comparing the original and modified snippets.

## Configuration

You can configure the replacements in your VS Code settings (`ctrl+,`, search for `codegenmasq`):

```json
"codegenmasq.replacements": {
    "sensitiveWord1": "replacementWord1",
    "sensitiveWord2": "replacementWord2",
    ...
}
```

### Accessing Extension Settings
To access the settings for the extension, you can do the following:

1. Open Visual Studio Code
Press `Ctrl +` , to open the settings.

2. In the search bar at the top, type `codegenmasq`.

3. Under the "Extensions" section, you should see your extension's settings appear. Here you will be able to modify the `codegenmasq.replacements` configuration.

4. By default, changes are made to your user settings, which apply globally to any instance of VS Code you open. However, you can also modify workspace settings, which will only apply to the project you're currently working on. You can toggle between user and workspace settings near the top of the settings tab.