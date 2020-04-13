/// <reference path="color.d.ts" />
/// <reference path="entity.d.ts" />
/// <reference path="has-asset.d.ts" />



declare class Vehicle extends Entity implements HasAsset {
    GetAssetName(): string;
    SetBodyColor(color: Color): void;
    SetBodyRoughness(value: number): void;
    GetBodyRoughness(): number;
    SetLightColor(color: Color): void;
    GetPassengers(): number;
    Horn(status: boolean): void;
}