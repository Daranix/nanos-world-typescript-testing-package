/// <reference path="../general/rotator.d.ts" />


declare interface Rotable {
    GetRotation(): Rotator;
    SetRotation(rotation: Rotator): void;
}