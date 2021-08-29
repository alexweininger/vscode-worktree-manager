import { workspace } from "vscode";
import { WorktreeManager } from "worktree-manager";
import { RepoTreeItem } from "../../RepoTreeItem";
import { ext } from "../../variables";

export async function removeRepo(node: RepoTreeItem): Promise<void> {
    await node.repo.remove();
    ext.treeDataProvider.refresh();
}