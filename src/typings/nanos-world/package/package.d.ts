declare namespace Package {
    function GetName(): string;
    function Require(luaFile: string): void;
    function on(eventType: PackageEventType, action: () => void): void;
}