import { UIManager } from "./UIManager";

export abstract class UIElement {

    private _id!: number;
    private _type: 'text' | 'line' | 'polygon' | 'box';
    private _group: string;

    constructor(type: 'text' | 'line' | 'polygon' | 'box', group: string) {
        this._type = type;
        this._group = group;
        Package.Log("Registering new UI Element");
        this.registerElement();
    }

    abstract renderElement(): void;
    abstract insertsectWith(vector: Vector2D): boolean;

    private registerElement() {
        // this.group = group;

        let id = 0;
        do {
            id = this.generateRandomNumberForId(-99999999, 99999999)
        } while (UIManager.existsID(id))
        this._id = id;
        UIManager.registerId(this.id);
        UIManager.uiElements.push(this);
        Package.Log("Registered UI Element with ID " + id);
    }

    clear() {
        Render.ClearItems(this.id);
    }


    private generateRandomNumberForId(min: number, max: number) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    get group(): string {
        return this._group;
    }

    get type(): string {
        return this._type;
    }

    get id(): number {
        return this._id;
    }

}