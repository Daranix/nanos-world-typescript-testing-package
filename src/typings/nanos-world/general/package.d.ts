declare namespace Package {
    function GetName(): string;
    function Require(luaFile: string): void;
}