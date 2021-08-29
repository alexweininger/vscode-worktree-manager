import * as vscode from 'vscode';
import { WorktreeManager } from 'worktree-manager';
import { RepoTreeItem } from './RepoTreeItem';


export class WorktreeTreeDataProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
    constructor() { }

    getTreeItem(element: any): vscode.TreeItem {
        return element;
    }

    public async getChildren(element?: vscode.TreeItem): Promise<vscode.TreeItem[]> {
        const folder = vscode.workspace.workspaceFolders?.[0];
        if (!folder) {
            return [];
        }
        const wtm = await WorktreeManager.create(folder.uri.fsPath);

        // root
        if (!element) {
            const repos = wtm.listRepos();
            console.log(repos);
            return repos.map((repo) => {
                const ti = new RepoTreeItem(repo);
                return ti;
            });
        }

        if (element instanceof RepoTreeItem) {
            console.log('repo tree item');
            return await element.getChildren();
        }

        return [];
    }

    private _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | undefined | void> = new vscode.EventEmitter<vscode.TreeItem | undefined | void>();

    readonly onDidChangeTreeData: vscode.Event<vscode.TreeItem | undefined | void> = this._onDidChangeTreeData.event;

    public refreshChild(child: vscode.TreeItem): void {
        this._onDidChangeTreeData.fire(child);
    }

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }
}
