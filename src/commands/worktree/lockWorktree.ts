import { window } from "vscode";
import { ext } from "../../variables";
import { WorktreeTreeItem } from "../../WorktreeTreeItem";

export async function lockWorktree(node: WorktreeTreeItem, reason?: boolean): Promise<void> {

    let reasonText: string | undefined = '';
    if (reason) {
        reasonText = await window.showInputBox({
            placeHolder: 'Reason'
        });
    }

    if (reason && reasonText !== '') {
        await node.worktree.lock(reasonText);
    } else {
        await node.worktree.lock();
    }

    ext.treeDataProvider.refresh();
}