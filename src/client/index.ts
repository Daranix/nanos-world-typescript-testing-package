import { ButtonElement } from "./canvas-lib/buttonElement";
import { UIElement } from "./canvas-lib/UIElement";
import { UIManager } from "./canvas-lib/UIManager";


Package.Log("Hello world TS from client !!")

Client.SetDiscordActivity("Playing nanos world", "Nenos pug online", "screenshot_137", "Find the bug and the pug");

Client.on(ClientEventType.KeyDown, (keyName) => {
    Package.Log("Pressed key " + keyName);
    if (keyName === "I") {
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

const button = new ButtonElement("btn", "Test Button", new Vector2D(200, 200), (btn) => {
    Package.Log("Hey you pressed mee !! ");
    const player = NanosWorld.GetLocalPlayer();
    Events.CallRemote("printPing", [player]);
});

button.renderElement();