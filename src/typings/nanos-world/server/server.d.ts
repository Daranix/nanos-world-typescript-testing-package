/// <reference path="servereventtype.d.ts" />

/** @noSelfInFile */
declare class Server {
    static on(eventType: ServerEventType, action: () => void): void;
}