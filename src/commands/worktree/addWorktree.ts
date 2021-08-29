import { window } from "vscode";
import { RepoTreeItem } from "../../RepoTreeItem";
import { ext } from "../../variables";

export async function addWorktree(node: RepoTreeItem): Promise<void> {

    const branch = await window.showInputBox({
        placeHolder: 'new branch name'
    });

    const name = await window.showInputBox({
        placeHolder: 'worktree name'
    });

    if (branch && name) {
        await node.repo.addWorktree(name, branch);
        ext.treeDataProvider.refresh();
    }
}