Package.Log("Hello world TS from client !!")

Client.SetDiscordActivity("Playing nanos world", "Nenos pug online", "screenshot_137", "Find the bug and the pug");


class UIManager {
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

abstract class UIElement {

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

class TextElement extends UIElement {

    private _text: string;
    private _position: Vector2D;
    private _fontType: FontType;
    private _fontSize: number;
    private _textColor: Color;
    private _kerning: number;
    private _bCenterX: boolean;
    private _bCenterY: boolean;
    private _enableShadow: boolean;
    private _shadowOffset: Vector2D;
    private _shadowColor: Color;
    private _enableOutLine: boolean;
    private _outLineColor: Color;

    constructor(
        group: string,
        // --
        textMsg: string,
        position: Vector2D,
        fontType: FontType,
        fontSize: number,
        textColor: Color,
        kerning: number,
        bCenterX: boolean,
        bCenterY: boolean,
        enableShadow: boolean,
        shadowOffset: Vector2D,
        shadowColor: Color,
        enableOutLine: boolean,
        outLineColor: Color
    ) {
        super('text', group);
        this._text = textMsg;
        this._position = position;
        this._fontType = fontType;
        this._fontSize = fontSize;
        this._textColor = textColor;
        this._kerning = kerning;
        this._bCenterX = bCenterX;
        this._bCenterY = bCenterY;
        this._enableShadow = enableShadow;
        this._shadowColor = shadowColor;
        this._shadowOffset = shadowOffset;
        this._enableOutLine = enableOutLine;
        this._outLineColor = outLineColor;
    }

    renderElement() {
        Package.Log(` Rendering element with values:
            Id: ${this.id},
            Text: ${this._text},
            Location: ${this._position},
            FontType: ${this._fontType},
            FontSize: ${this._fontSize},
            TextColor: ${this._textColor},
            Kerning: ${this._kerning},
            CenterX: ${this._bCenterX},
            CenterY: ${this._bCenterY},
            EnableShadow: ${this._enableShadow},
            ShadowOffset: ${this._shadowOffset},
            ShadowColor: ${this._shadowColor},
            OutLineEnabled: ${this._enableOutLine},
            OutLineColor: ${this._outLineColor}
        `)
        /*
        Render.AddText(
            this.id,
            this._text,
            this._position,
            this._fontType,
            this._fontSize,
            this._textColor,
            this._kerning,
            this._bCenterX,
            this._bCenterY,
            this._enableShadow,
            this._shadowOffset,
            this._shadowColor,
            this._enableOutLine,
            this._outLineColor
        )*/
        Render.AddText(0, this._text, this._position, this._fontType, this._fontSize, this._textColor, this._kerning, this._bCenterX, this._bCenterY, this._enableShadow, this._shadowOffset, this._shadowColor, this._enableOutLine, this._outLineColor);

    }

    insertsectWith(vector: Vector2D) {
        const textVectorSize = Render.StrLen(this._text, this._fontType, this._fontSize);

        let firstVector;
        if (this._bCenterX) {
            firstVector = new Vector2D(this._position.X - (textVectorSize.X / 2), this._position.Y - (textVectorSize.Y / 2));
        } else {
            firstVector = this._position;
        }

        const secondVector = new Vector2D(firstVector.X + textVectorSize.X, firstVector.Y + textVectorSize.Y);

        Package.Log(`
            Checking possible intersection with ${this.id}:
                FirstVector: X  ${firstVector.X} | Y  ${firstVector.Y}
                SecondVector: X  ${secondVector.X} | Y  ${secondVector.Y}
                Click: X  ${vector.X} | Y  ${vector.Y}
        `);
        Render.AddLine(32, firstVector, firstVector, 2, new Color(255, 0, 0, 1));
        Render.AddLine(32, secondVector, secondVector, 2, new Color(255, 0, 0, 1));

        return (firstVector.X <= vector.X && firstVector.Y <= vector.Y) && (secondVector.X >= vector.X && secondVector.Y >= vector.Y);
    }
}


class BoxElement extends UIElement {

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

class ButtonElement extends UIElement {

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

        on(ClientEventType.MouseDown, (keyName, mouseX, mouseY) => {
            Package.Log("Pressed mouse key: " + keyName + " position: X " + Client.GetMousePosition().X + " Y " + Client.GetMousePosition().Y);
            if (keyName === "LeftMouseButton") {
                // const vector = new Vector2D(mouseX, mouseY);
                if (this.handler && this.insertsectWith(Client.GetMousePosition())) {
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

/*
on(ClientEventType.MouseDown, (keyName, mouseX, mouseY) => {
    Package.Log("Pressed mouse key: " + keyName + " position: X " + Client.GetMousePosition().X + " Y " + Client.GetMousePosition().Y);
    if (keyName === "LeftMouseButton") {
        // const vector = new Vector2D(mouseX, mouseY);
        for (const uielement of UIManager.uiElements) {
            if (uielement.insertsectWith(Client.GetMousePosition())) {
                Package.Log("Click intersected with " + uielement.id + " (g: " + uielement.group + ")");
            }
        }
    }
});*/

on(ClientEventType.KeyDown, (keyName) => {
    Package.Log("Pressed key " + keyName);
    if (keyName === "T") {
        Client.SetMouseEnabled(!Client.IsMouseEnabled());
        Package.Log("Mouse status: " + !Client.IsMouseEnabled());
    }

    if (keyName === "F") {
        Package.Log("Cleaning debug dots");
        Render.ClearItems(32);
    }

    if (keyName === "K") {
        Package.Log("Cleaning all elements");
        for (const el of UIManager.uiElements) {
            el.clear();
        }
    }
});

/*
const text = new TextElement("test",
    "Hello neno",
    new Vector2D(123, 321),
    FontType.Roboto, 20,
    new Color(255, 255, 255, 1),
    0,
    true,
    true,
    false,
    new Vector2D(0, 0),
    new Color(0, 0, 0, 1),
    false,
    new Color(0, 0, 0, 1)
);

text.renderElement();


const drawBox = new BoxElement("testbox", new Vector2D(300, 300), new Vector2D(400, 400), 0, new Color(0, 0, 0, 1));
drawBox.renderElement();*/


const button = new ButtonElement("btn", "Test Button", new Vector2D(200, 200), (btn) => {
    Package.Log("Hey you pressed mee !! ");
});

button.renderElement();

/*
Render.AddText(0, "text", new Vector2D(123,321), FontType.Roboto, 20, new Color(255,0,0, 1), 0, false, false, false, new Vector2D(1,1), new Color(0,0,0,1), false, new Color(0,0,0,1));
*/

// Render.AddBox(12, new Vector2D(200,200), new Vector2D(300, 300), 0, new Color(0,0,0,1));