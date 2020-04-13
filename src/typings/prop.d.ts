/// <reference path="entity.d.ts" />
/// <reference path="has-asset.d.ts" />
/// <reference path="collisionable.d.ts" />


declare class Prop extends Entity implements HasAsset, Collisionable {
    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
    GetAssetName(): string;
}