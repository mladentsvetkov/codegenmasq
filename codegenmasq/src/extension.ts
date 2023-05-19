import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

// Function to replace words in a string
function replaceWords(text: string, replacements: {[key: string]: string}): string {
	let result = text;
	for (let word in replacements) {
			const regex = new RegExp(word, 'g');
			result = result.replace(regex, replacements[word]);
	}
	return result;
}

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('codegenmasq.cgmasq', async () => {

        const {activeTextEditor} = vscode.window;

        if (activeTextEditor) {
            const document = activeTextEditor.document;
            const selection = activeTextEditor.selection;
            const text = document.getText(selection);

            const replacements = vscode.workspace.getConfiguration('codegenmasq').get('replacements', {});

            // Replace words in the selected text
            let modifiedText = replaceWords(text, replacements);

            // Write the original and modified text to temporary files
            const originalFilePath = path.join(context.extensionPath, 'original.txt');
            const modifiedFilePath = path.join(context.extensionPath, 'modified.txt');
            fs.writeFileSync(originalFilePath, text);
            fs.writeFileSync(modifiedFilePath, modifiedText);

            // Open the files as TextDocuments
            const originalDocument = await vscode.workspace.openTextDocument(originalFilePath);
            const modifiedDocument = await vscode.workspace.openTextDocument(modifiedFilePath);

            // Open a diff editor comparing the original and modified documents
            vscode.commands.executeCommand('vscode.diff', originalDocument.uri, modifiedDocument.uri, 'Original <-> Modified');
        } else {
            vscode.window.showInformationMessage('Active editor is undefined');
        }

    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
