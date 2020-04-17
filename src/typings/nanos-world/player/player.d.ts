
/// <reference path="../entity/entity.d.ts" />

declare class Player extends Entity {
    GetPing(): number;
    GetControlledCharacter(): Character;
    Possess(character: Character): void;
    UnPossess(): void;
    static on(eventType: EntityEventType, event: (entity: Entity) => void): void
    static on(eventType: PlayerEventType.POSSESS, action: (player: Player, character: Character) => void): void;
    static on(eventType: PlayerEventType.UNPOSSESS, action: (player: Player, character: Character, blsPlayerDisconnecting: boolean) => void): void;
}