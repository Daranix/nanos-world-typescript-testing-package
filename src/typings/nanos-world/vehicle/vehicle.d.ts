/// <reference path="../general/color.d.ts" />
/// <reference path="../entity/entity.d.ts" />
/// <reference path="../misc/has-model.d.ts" />

/** @customConstructor Vehicle */
declare class Vehicle extends Entity implements Collisionable, HasModel {
    constructor(position: Vector, rotation: Rotator, asset: string);
    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
    GetAssetName(): string;
    SetBodyColor(color: Color): void;
    SetBodyRoughness(value: number): void;
    GetBodyRoughness(): number;
    SetLightColor(color: Color): void;
    GetLightColor(): Color;
    SetGlassColor(color: Color): void;
    GetGlassColor(): Color;
    SetGlassOpacity(opacity: number): void;
    GetGlassOpacity(): number;
    Horn(status: boolean): void;
    GetPassenger(passenger: number): Character;
    GetPassengers(): Character[];
    static on(eventType: EntityEventType, event: (vehicle: Vehicle) => void): void
}