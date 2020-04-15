/// <reference path="servereventtype.d.ts" />


declare class Server {
    static on(eventType: ServerEventType, action: () => void): void;
}