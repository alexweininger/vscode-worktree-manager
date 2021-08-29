import { ThemeIcon, TreeItem, TreeItemCollapsibleState, Uri } from "vscode";
import { WorktreeTreeItem } from "./WorktreeTreeItem";
import { Repo, Worktree } from "worktree-manager";
import * as path from "path";
import * as os from "os";
import { ext } from "./variables";
import { treeUtils } from "./util/iconUtils";

export class RepoTreeItem extends TreeItem {

    contextValue = 'worktree-manager.repo';

    iconPath = treeUtils.getThemedIconPath('folder-source-control');


    constructor(public readonly repo: Repo) {
        super(repo.name, TreeItemCollapsibleState.Collapsed);
        const relativePath = path.relative(os.homedir(), this.repo.path);
        this.description = `~/${relativePath}`;
    }

    public async getChildren(): Promise<WorktreeTreeItem[]> {
        const worktrees = await this.repo.getWorktrees();
        console.log(worktrees);
        const children = Promise.all(worktrees.map(async (worktree) => {
            const ti = new WorktreeTreeItem(this, worktree);
            await ti.refresh();
            return ti;
        }));
        return children;
    }

    collapsibleState = TreeItemCollapsibleState.Collapsed;
}