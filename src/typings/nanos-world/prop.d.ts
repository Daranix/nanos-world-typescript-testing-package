/// <reference path="entity.d.ts" />
/// <reference path="has-model.d.ts" />
/// <reference path="collisionable.d.ts" />


declare class Prop extends Spawneable implements Collisionable {
    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
}