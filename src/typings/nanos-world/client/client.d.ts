declare namespace Client {
    function GetMousePosition(): Vector2D;
    function IsMouseEnabled(): boolean;
    function SetMouseEnabled(status: boolean): void;
    function on(event: ClientEventType.Tick, action: (deltaTime: number) => void): void;
    function on(event: ClientEventType.KeyUp | ClientEventType.KeyDown, action: (keyName: string) => void): void;
    function on(event: ClientEventType.MouseDown, action: (keyName: string, mouseX: number, mouseY: number) => void): void;
}