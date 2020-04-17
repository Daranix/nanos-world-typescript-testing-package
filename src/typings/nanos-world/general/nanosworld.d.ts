/// <reference path="../player/player.d.ts" />
/// <reference path="../vehicle/vehicle.d.ts" />
/// <reference path="../weapon/weapon.d.ts" />
/// <reference path="../prop/prop.d.ts" />

declare namespace NanosWorld {
    function GetPlayers(): Player[];
    function GetVehicles(): Vehicle[];
    function GetProps(): Prop[];
    function GetWeapons(): Weapon[];
}