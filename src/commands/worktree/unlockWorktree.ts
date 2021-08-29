import { ext } from "../../variables";
import { WorktreeTreeItem } from "../../WorktreeTreeItem";

export async function unlockWorktree(node: WorktreeTreeItem): Promise<void> {
    await node.worktree.unlock();
    ext.treeDataProvider.refresh();
}