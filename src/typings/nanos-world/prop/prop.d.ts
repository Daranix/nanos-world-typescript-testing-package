/// <reference path="../entity/entity.d.ts" />
/// <reference path="../misc/has-model.d.ts" />
/// <reference path="../misc/collision/collisionable.d.ts" />
/// <reference path="../character/character.d.ts" />


/** @customConstructor Prop */
declare class Prop extends Entity implements Collisionable, HasModel {
    constructor(position: Vector, rotation: Rotator, asset: string);
    GetAssetName(): string;
    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
    static on(eventType: EntityEventType, event: (entity: Prop) => void): void;
    static on(eventType: PropEventType.GRAB | PropEventType.UNGRAB, event: (prop: Prop, character: Character) => void): void;
    on(eventType: EntityEventType, event: () => void): void;
    on(eventType: PropEventType.GRAB | PropEventType.UNGRAB, event: (character: Character) => void): void;
}