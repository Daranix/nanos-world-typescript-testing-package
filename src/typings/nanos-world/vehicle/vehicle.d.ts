/// <reference path="../general/color.d.ts" />
/// <reference path="../entity/entity.d.ts" />
/// <reference path="../misc/has-model.d.ts" />

/** @customConstructor Vehicle */
declare class Vehicle implements HasModel {
    constructor(position: Vector, rotation: Rotator, asset: string);
    GetAssetName(): string;
    SetBodyColor(color: Color): void;
    SetBodyRoughness(value: number): void;
    GetBodyRoughness(): number;
    SetLightColor(color: Color): void;
    GetPassengers(): number;
    Horn(status: boolean): void;
    GetPassenger(passenger: number): Character;
    GetPassengers(): Character[];
}