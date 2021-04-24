import { UIElement } from "./UIElement";

export class UIManager {
    static ids: { [key: number]: boolean } = {};
    // static groups: Map<string, number[]> = new Map();
    static groups: { [groupName: string]: number[] } = {};
    static uiElements: UIElement[] = [];

    static existsID(id: number): boolean {
        return UIManager.ids[id];
    }

    static registerId(id: number): void {
        UIManager.ids[id] = true;
    }

    static registerIdToGroup(group: string, id: number) {

        if (!this.groups[group]) {
            this.groups[group] = [];
        }

        this.groups[group].push(id);
    }

}