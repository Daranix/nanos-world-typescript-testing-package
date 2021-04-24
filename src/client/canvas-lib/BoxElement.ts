import { UIElement } from "./UIElement";

export class BoxElement extends UIElement {

    private _startPosition: Vector2D;
    private _endPosition: Vector2D;
    private _thickness: number;
    private _color: Color;

    constructor(group: string, startPosition: Vector2D, endPosition: Vector2D, thickness: number, color: Color) {
        super('box', group);
        this._startPosition = startPosition;
        this._endPosition = endPosition;
        this._thickness = thickness;
        this._color = color;
    }

    renderElement(): void {
        Render.AddBox(this.id, this._startPosition, this._endPosition, this._thickness, this._color);
    }

    insertsectWith(vector: Vector2D): boolean {

        const firstVector = this._startPosition;
        const secondVector = new Vector2D(this._startPosition.X + this._endPosition.Y, this._startPosition.Y + this._endPosition.Y);

        Package.Log(`
            Checking possible intersection with ${this.id} - (g: ${this.group} ")":
                FirstVector: X  ${firstVector.X} | Y  ${firstVector.Y}
                SecondVector: X  ${secondVector.X} | Y  ${secondVector.Y}
                Click: X  ${vector.X} | Y  ${vector.Y}
        `);

        return (firstVector.X <= vector.X && firstVector.Y <= vector.Y) && (secondVector.X >= vector.X && secondVector.Y >= vector.Y);
    }
}
