import { ext } from "../../variables";
import { WorktreeTreeItem } from "../../WorktreeTreeItem";

export async function removeWorktree(node: WorktreeTreeItem): Promise<void> {
    await node.worktree.remove();
    ext.treeDataProvider.refresh();
    ext.treeDataProvider.refreshChild(node.parent);
}