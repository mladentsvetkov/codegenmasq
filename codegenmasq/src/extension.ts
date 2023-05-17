import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "codegenmasq" is now active!');

	let disposable = vscode.commands.registerCommand('codegenmasq.cgmasq', async () => {

		const {activeTextEditor} = vscode.window;
		let newSnippet = '';

		if (activeTextEditor) {
			const document = activeTextEditor.document;
			const selection = activeTextEditor.selection;
			const text = document.getText(selection);
			newSnippet = text + ' // ---> my modifications';
		} else {
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

export function deactivate() {}
