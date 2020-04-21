
/// <reference path="../entity/entity.d.ts" />
/** @noSelfInFile */
declare class Player extends Entity {
    GetPing(): number;
    GetControlledCharacter(): Character;
    Possess(character: Character): void;
    UnPossess(): void;
    static on(eventType: PlayerEventType.POSSESS, action: (player: Player, character: Character) => void): void;
    static on(eventType: PlayerEventType.UNPOSSESS, action: (player: Player, character: Character, blsPlayerDisconnecting: boolean) => void): void;
    static on(eventType: EntityEventType, event: (entity: Player) => void): void;
    on(eventType: PlayerEventType.POSSESS, action: (character: Character) => void): void;
    on(eventType: PlayerEventType.UNPOSSESS, action: (character: Character, blsPlayerDisconnecting: boolean) => void): void;
    on(eventType: EntityEventType, event: () => void): void
}