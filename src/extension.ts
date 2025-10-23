import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('Graal Online Devkit loaded');
}

export function deactivate() {}
