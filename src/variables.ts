import { ExtensionContext } from "vscode";
import { WorktreeTreeDataProvider } from "./WorktreeTreeDataProvider";

export namespace ext {
    export const treeDataProvider = new WorktreeTreeDataProvider();
    export let context: ExtensionContext;
}