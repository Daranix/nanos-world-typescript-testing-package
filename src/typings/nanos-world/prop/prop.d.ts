/// <reference path="../entity/entity.d.ts" />
/// <reference path="../misc/has-model.d.ts" />
/// <reference path="../misc/collision/collisionable.d.ts" />

/** @customConstructor Prop */
declare class Prop implements Collisionable, HasModel {
    constructor(position: Vector, rotation: Rotator, asset: string);
    GetAssetName(): string;
    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
}