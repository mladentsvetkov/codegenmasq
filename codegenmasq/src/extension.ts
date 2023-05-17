import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "codegenmasq" is now active!');

	let disposable = vscode.commands.registerCommand('codegenmasq.cgmasq', () => {

		vscode.window.showInformationMessage('Hello World from codegenmasq!');

		const {activeTextEditor} = vscode.window;
		let newSnippet = '';

		if (activeTextEditor) {
			const document = activeTextEditor.document;
			const selection = activeTextEditor.selection;
			const text = document.getText(selection);
			newSnippet = text + ' ---> my modifications';
		} else {
			newSnippet = 'activeTextEditor is undefined';
		}

		vscode.window.showInformationMessage(newSnippet);

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
