/// <reference path="color.d.ts" />
/// <reference path="entity.d.ts" />
/// <reference path="has-model.d.ts" />



declare class Vehicle extends Spawneable {
    SetBodyColor(color: Color): void;
    SetBodyRoughness(value: number): void;
    GetBodyRoughness(): number;
    SetLightColor(color: Color): void;
    GetPassengers(): number;
    Horn(status: boolean): void;
}