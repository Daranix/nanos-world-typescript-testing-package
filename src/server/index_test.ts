

const elements: any[] = [
    // new Prop(new Vector(0, 0, 150), new Rotator(0, 0, 0), "/Game/NanosWorld/Art/Rural/Extra/SM_TireLarge.SM_TireLarge"),
    // new Weapon(new Vector(0,0,150), new Rotator(0,0,0), "/Game/NanosWorld/Art/Rural/Extra/SM_TireLarge.SM_TireLarge")
    // new Prop(new Vector(0, 0, 150), new Rotator(0, 0, 0), "/Game/NanosWorld/Maps/Development/Network/SM_Cube_01"),
    // new Prop(new Vector(10, 0, 150), new Rotator(0, 0, 0), "/Game/NanosWorld/Maps/Development/Network/SM_Cube_01")
    new Vehicle(new Vector(0, 700, 0), new Rotator(0, 0, 0), "/Game/NanosWorld/Core/Vehicles/BP_Vehicle_SUV.BP_Vehicle_SUV_C")
];

Package.on(PackageEventType.UNLOAD, () => {
    console.log("Destroying all spawned elements ... ")
    elements.forEach(element => {
        element.Destroy();
    });
});


Server.on(ServerEventType.START, () => {
    console.log("Server started !! ");
});

Player.on(PlayerEventType.Spawn, (player) => {
    const character = new Character();
    player.Possess(character);
});
Character.on(CharacterEventType.Respawn, (character) => {
    const location = new Vector(0, 0, 0);
    character.SetInitialLocation(location);
});

Player.on(PlayerEventType.UNPOSSESS, (player, character, bIsPlayerDisconnecting) => {
    if (bIsPlayerDisconnecting) {
        character.Destroy();
    }
});
