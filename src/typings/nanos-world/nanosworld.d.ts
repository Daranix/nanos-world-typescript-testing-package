/// <reference path="player.d.ts" />
/// <reference path="vehicle.d.ts" />
/// <reference path="weapon.d.ts" />
/// <reference path="prop.d.ts" />

declare namespace NanosWorld {
    function GetPlayers(): Player[];
    function GetVehicles(): Vehicle[];
    function GetProps(): Prop[];
    function GetWeapons(): Weapon[];
}