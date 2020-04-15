/// <reference path="entity.d.ts" />
/// <reference path="itemeventtype.d.ts" />
/// <reference path="has-model.d.ts" />
/// <reference path="collisionable.d.ts" />



declare class Item extends Spawneable implements Collisionable {
    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
    GetAssetName(): string;
    static on(eventType: ItemEventType | EntityEventType, event: (item: Item, character: Character) => void): void;
}