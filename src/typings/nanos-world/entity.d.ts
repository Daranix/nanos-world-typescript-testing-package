/// <reference path="entityeventtype.d.ts" />
/// <reference path="rotable.d.ts" />
/// <reference path="localizable.d.ts" />
/// <reference path="vector.d.ts" />





declare class Entity implements Rotable, Localizable {
    GetLocation(): Vector;
    SetLocation(vector: Vector): void;
    GetRotation(): Rotator;
    SetRotation(rotation: Rotator): void;
    Destroy(): void;

    static on(eventType: EntityEventType, event: (entity: Entity) => void): void
}