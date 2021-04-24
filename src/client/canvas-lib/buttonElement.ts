import { UIElement } from "./UIElement";
import { TextElement } from "./TextElement";
import { BoxElement } from "./BoxElement";

export class ButtonElement extends UIElement {

    public handler: (btn: ButtonElement) => void;

    private box: BoxElement;
    private textElement: TextElement;

    constructor(id: string, btnText: string, position: Vector2D, handler: (btn: ButtonElement) => void) {
        super('box', id);
        this.handler = handler;

        const fontSize = 10;
        const fontType = FontType.Roboto;
        const textPositionSize = Render.StrLen(btnText, fontType, fontSize);
        const endPosition = new Vector2D(textPositionSize.X + 20, textPositionSize.Y + 20);
        const posTextX = position.X + ( textPositionSize.X / 2 ) + 10;
        const posTextY = position.Y + ( textPositionSize.Y );
        Package.Log("Text position on render: X " + posTextY + " Y " + posTextY);
        const textPosition = new Vector2D(posTextX, posTextY);
        this.textElement = new TextElement(id, btnText, textPosition, fontType, fontSize, new Color(255, 255, 255, 1), 0, true, true, false, new Vector2D(0, 0), new Color(0, 0, 0, 1), false, new Color(0, 0, 0, 1));
        this.box = new BoxElement(id, position, endPosition, 0, new Color(0, 0, 0, 1));

        Client.on(ClientEventType.MouseDown, (keyName, mouseX, mouseY) => {
            Package.Log("Pressed mouse key: " + keyName + " position: X " + Client.GetMousePosition().X + " Y " + Client.GetMousePosition().Y);
            if (keyName === "LeftMouseButton") {
                // const vector = new Vector2D(mouseX, mouseY);
                if (this.handler && this.insertsectWith(Client.GetMousePosition())) {
                    Package.Log("Intersected with: " + this.id);
                    this.handler(this);
                }
            }
        });
    }

    renderElement(): void {
        this.box.renderElement();
        this.textElement.renderElement();
    }

    insertsectWith(vector: Vector2D): boolean {
        return this.box.insertsectWith(vector);
    }
}