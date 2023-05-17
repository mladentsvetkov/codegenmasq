"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const fs = require("fs");
const path = require("path");
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('codegenmasq.cgmasq', async () => {
        const { activeTextEditor } = vscode.window;
        if (activeTextEditor) {
            const document = activeTextEditor.document;
            const selection = activeTextEditor.selection;
            const text = document.getText(selection);
            const newSnippet = text + ' ---> my modifications';
            // Write the original and modified text to temporary files
            const originalFilePath = path.join(context.extensionPath, 'original.txt');
            const modifiedFilePath = path.join(context.extensionPath, 'modified.txt');
            fs.writeFileSync(originalFilePath, text);
            fs.writeFileSync(modifiedFilePath, newSnippet);
            // Open the files as TextDocuments
            const originalDocument = await vscode.workspace.openTextDocument(originalFilePath);
            const modifiedDocument = await vscode.workspace.openTextDocument(modifiedFilePath);
            // Open a diff editor comparing the original and modified documents
            vscode.commands.executeCommand('vscode.diff', originalDocument.uri, modifiedDocument.uri, 'Original <-> Modified');
        }
        else {
            vscode.window.showInformationMessage('Active editor is undefined');
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map