// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { refresh } from "./commands/refresh";
import { addRepo } from "./commands/repo/addRepo";
import { removeRepo } from "./commands/repo/removeRepo";
import { addWorktree } from "./commands/worktree/addWorktree";
import { lockWorktree } from "./commands/worktree/lockWorktree";
import { openWorktree } from "./commands/worktree/openWorktree";
import { removeWorktree } from "./commands/worktree/removeWorktree";
import { unlockWorktree } from "./commands/worktree/unlockWorktree";
import { ext } from "./variables";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log(
        'Congratulations, your extension "vscode-wtm-test" is now active!'
    );

    vscode.commands.registerCommand('vscode-wtm-test.addRepo', addRepo);
    vscode.commands.registerCommand('vscode-wtm-test.removeRepo', removeRepo);
    vscode.commands.registerCommand('vscode-wtm-test.openWorktree', openWorktree);
    vscode.commands.registerCommand('vscode-wtm-test.addWorktree', addWorktree);
    vscode.commands.registerCommand('vscode-wtm-test.removeWorktree', removeWorktree);
    vscode.commands.registerCommand('vscode-wtm-test.refresh', refresh);
    vscode.commands.registerCommand('vscode-wtm-test.lockWorktree', lockWorktree);
    vscode.commands.registerCommand('vscode-wtm-test.lockWorktreeWithReason', (node) => lockWorktree(node, true));
    vscode.commands.registerCommand('vscode-wtm-test.unlockWorktree', unlockWorktree);

    vscode.window.createTreeView('repos', {
        treeDataProvider: ext.treeDataProvider
    });
    ext.context = context;
}

// this method is called when your extension is deactivated
export function deactivate() { }
