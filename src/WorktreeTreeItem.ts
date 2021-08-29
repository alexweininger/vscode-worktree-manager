import { ThemeIcon, TreeItem } from "vscode";
import { Worktree } from "worktree-manager";
import { RepoTreeItem } from "./RepoTreeItem";

export class WorktreeTreeItem extends TreeItem {

    private isLocked: boolean = false;

    constructor(public readonly parent: RepoTreeItem, public readonly worktree: Worktree) {
        super(worktree.name);
        this.description = worktree.path;
        this.command = {
            command: 'vscode-wtm-test.openWorktree',
            title: 'Open',
            arguments: [this]
        };
        if (this.parent.repo.path === this.worktree.path) {
            this.iconPath = new ThemeIcon('pinned');
        }
        this.contextValue = 'worktree-manager.worktree';
    }

    public async refresh(): Promise<void> {
        this.description = await this.worktree.branch();
        this.isLocked = await this.worktree.isLocked();
        this.contextValue = this.getContextValue();
        this.iconPath = this.getIconPath();
    }

    private getIconPath(): ThemeIcon | undefined {
        return this.isLocked ? new ThemeIcon('lock') : undefined;
    }

    private getContextValue(): string {
        return `worktree-manager.worktree${this.isLocked ? 'locked' : ''}`;
    }
}