/// <reference path="../item/item.d.ts" />

/** 
 * @customConstructor Grenade 
 * @noSelfInFile
 * */
declare class Grenade extends Item {
    BaseDamage: number;
    MinimunDamage: number;
    DamageInnerRadius: number;
    DamageFalloff: number;
    TimeToExplode: number;
    static on(eventType: ItemEventType | EntityEventType | GrenadeEventType, action: (grenade: Grenade, character: Character) => void): void;
    on(eventType: ItemEventType | EntityEventType | GrenadeEventType, action: (character: Character) => void): void;

}