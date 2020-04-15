/// <reference path="entity.d.ts" />


declare class Spawneable extends Entity implements HasModel {
    constructor(position: Vector, rotation: Rotator, asset: string);
    GetAssetName(): string;
}