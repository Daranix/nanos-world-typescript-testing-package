/// <reference path="entity.d.ts" />
/// <reference path="has-model.d.ts" />
/// <reference path="collisionable.d.ts" />


declare class Prop extends Entity implements HasModel, Collisionable {
    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
    GetModelName(): string;
}