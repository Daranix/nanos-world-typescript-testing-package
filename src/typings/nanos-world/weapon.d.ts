/// <reference path="item.d.ts" />
/// <reference path="weaponeventtype.d.ts" />

/** @customConstructor Weapon */
declare class Weapon extends Item {
    
    BaseDamage: number;
    ClipCapacity: number;
    
    GetAmmoClip(): number;
    SetAmmoClip(value: number): void;
    GetAmmoBag(): number;
    SetAmmoBag(value: number): void;

    static on(eventType: ItemEventType | EntityEventType | WeaponEventType, event: (item: Item, character: Character) => void): void;
    

}