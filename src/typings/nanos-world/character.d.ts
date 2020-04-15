/// <reference path="entity.d.ts" />
/// <reference path="charactereventtype.d.ts" />
/// <reference path="item.d.ts" />
/// <reference path="weapon.d.ts" />


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
    SetMorphTarget(id: number, value: number): void;
    SetScalarParameter(id: number, value: number): void;
    SetVectorParameter(id: number, value: number): void;
    GetMorphTarget(): number;
    GetScalarParameter(): number;
    GetVectorParameter(): number;

    static on(eventType: EntityEventType | CharacterEventType | WeaponEventType, event: (entity: Entity) => void): void

}