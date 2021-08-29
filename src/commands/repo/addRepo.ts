import { workspace } from "vscode";
import { WorktreeManager } from "worktree-manager";
import { ext } from "../../variables";

export async function addRepo(): Promise<void> {
    if (workspace.workspaceFolders && workspace.workspaceFolders[0]) {
        const wtm = await WorktreeManager.create(workspace.workspaceFolders[0].uri.fsPath);
        await wtm.addRepo({
            path: workspace.workspaceFolders[0].uri.fsPath
        });
        ext.treeDataProvider.refresh();
    }
}