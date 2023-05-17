"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "codegenmasq" is now active!');
    let disposable = vscode.commands.registerCommand('codegenmasq.cgmasq', async () => {
        const { activeTextEditor } = vscode.window;
        let newSnippet = '';
        if (activeTextEditor) {
            const document = activeTextEditor.document;
            const selection = activeTextEditor.selection;
            const text = document.getText(selection);
            newSnippet = text + ' // ---> my modifications';
        }
        else {
            newSnippet = 'activeTextEditor is undefined';
        }
        // Create a new untitled document with the new snippet as content
        const newDoc = await vscode.workspace.openTextDocument({
            content: newSnippet,
            language: 'typescript' // or any other language you want
        });
        // Open the new document in a new editor window
        vscode.window.showTextDocument(newDoc);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map