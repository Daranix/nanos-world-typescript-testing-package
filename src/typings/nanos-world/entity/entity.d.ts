/// <reference path="entityeventtype.d.ts" />
/// <reference path="../misc/rotable.d.ts" />
/// <reference path="../misc/localizable.d.ts" />
/// <reference path="../general/vector.d.ts" />




/** @noSelfInFile */
declare class Entity implements Rotable, Localizable {
    GetLocation(): Vector;
    SetLocation(vector: Vector): void;
    GetRotation(): Rotator;
    SetRotation(rotation: Rotator): void;
    Destroy(): void;
    SetInitialLocation(vector: Vector): void;
    GetInitialLocation(): Vector;

    static on(eventType: EntityEventType, event: (entity: Entity) => void): void
    on(eventType: EntityEventType, event: () => void): void;
}