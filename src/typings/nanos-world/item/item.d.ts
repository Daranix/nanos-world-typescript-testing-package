/// <reference path="../entity/entity.d.ts" />
/// <reference path="itemeventtype.d.ts" />
/// <reference path="../misc/has-model.d.ts" />
/// <reference path="../misc/collision/collisionable.d.ts" />

/** 
 * @customConstructor Item 
 * @noSelfInFile
 * 
*/
declare class Item implements Collisionable, HasModel {
    constructor(position: Vector, rotation: Rotator, asset: string);
    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
    GetAssetName(): string;
    static on(eventType: ItemEventType | EntityEventType, event: (item: Item, character: Character) => void): void;
}