/// <reference path="../entity/entity.d.ts" />
/// <reference path="charactereventtype.d.ts" />
/// <reference path="../item/item.d.ts" />
/// <reference path="../weapon/weapon.d.ts" />


declare class Character extends Entity {

    Health: number;

    PickUpWeapon(weapon: Weapon): void;
    PickUpGrenade(grenade: Grenade): void;
    PickUpItem(item: Item): void;
    Drop(): void;
    SetRagdollMode(status: boolean): void;
    IsInRagdollMode(): boolean;
    SetViewMode(viewMode: 0 | 1 | 2 | 3): void;
    GetViewMode(): 0 | 1 | 2 | 3;
    RandomizeCustomization(): void;
    LeaveVehicle(): void;
    EnterVehicle(vehicle: Vehicle, seat: number): void;
    SetMovementEnabled(status: boolean): void;
    IsMovementEnabled(): boolean;
    SetMorphTarget(id: CharacterMorphTarget, value: number): void;
    SetScalarParameter(id: CharacterScalarParameter, value: number): void;
    SetVectorParameter(id: CharacterVectorParameter, value: number): void;
    GetMorphTarget(): number;
    GetScalarParameter(): number;
    GetVectorParameter(): number;
    GetPlayer(): Player;
    GetVehicle(): Vehicle;

    static on(eventType: EntityEventType | CharacterEventType | WeaponEventType, event: (entity: Entity) => void): void

}