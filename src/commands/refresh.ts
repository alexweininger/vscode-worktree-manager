import { RepoTreeItem } from "../RepoTreeItem";
import { ext } from "../variables";
import { WorktreeTreeItem } from "../WorktreeTreeItem";

export async function refresh(node?: RepoTreeItem | WorktreeTreeItem): Promise<void> {
    ext.treeDataProvider.refresh();
}