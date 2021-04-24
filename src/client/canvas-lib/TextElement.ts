import { UIElement } from "./UIElement";

export class TextElement extends UIElement {

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