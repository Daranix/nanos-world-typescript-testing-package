/// <reference path="entity.d.ts" />
/// <reference path="has-model.d.ts" />
/// <reference path="collisionable.d.ts" />

/** @customConstructor Prop */
declare class Prop implements Collisionable, HasModel {
    constructor(position: Vector, rotation: Rotator, asset: string);
    GetAssetName(): string;
    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
}