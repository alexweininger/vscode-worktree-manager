import { commands, env, Uri } from "vscode";
import { RepoTreeItem } from "../../RepoTreeItem";
import { WorktreeTreeItem } from "../../WorktreeTreeItem";

export async function openWorktree(node?: RepoTreeItem | WorktreeTreeItem): Promise<void> {
    if (!node) {
        return;
    }
    if (node instanceof WorktreeTreeItem) {
        const uri = Uri.parse(node.worktree.path);
        commands.executeCommand("vscode.openFolder", uri, true);
    }
}