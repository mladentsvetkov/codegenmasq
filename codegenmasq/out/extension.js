"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "codegenmasq" is now active!');
    let disposable = vscode.commands.registerCommand('codegenmasq.cgmasq', () => {
        vscode.window.showInformationMessage('Hello World from codegenmasq!');
        const { activeTextEditor } = vscode.window;
        let newSnippet = '';
        if (activeTextEditor) {
            const document = activeTextEditor.document;
            const selection = activeTextEditor.selection;
            const text = document.getText(selection);
            newSnippet = text + ' ---> my modifications';
        }
        else {
            newSnippet = 'activeTextEditor is undefined';
        }
        vscode.window.showInformationMessage(newSnippet);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map