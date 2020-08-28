Package.RequirePackage("nanos-world-weapons");


const NanosTestingMap = [
    new Prop(new Vector(-1676, 6963, 132), new Rotator(), "NanosWorld::SM_WoodenTable"),
	new Prop(new Vector(-1711, 7008, 132), new Rotator(0, -150, 0), "NanosWorld::SM_WoodenChair"),
	new Prop(new Vector(-1786, 7273, 102), new Rotator(), "NanosWorld::SM_TireLarge"),
	new Prop(new Vector(-1875, 7283, 140), new Rotator(-28, 170, 0), "NanosWorld::SM_TireLarge"),
	new Prop(new Vector(-3721, 8549, 122), new Rotator(), "NanosWorld::SM_Stool"),
	new Prop(new Vector(-1686, 6983, 217), new Rotator(), "NanosWorld::SM_TeaPot_Interior"),
	new Prop(new Vector(-1591, 7178, 116), new Rotator(), "NanosWorld::SM_OilDrum"),
	new Prop(new Vector(-4606, 9042, 102), new Rotator(), "NanosWorld::SM_Bucket5Gallon"),
	new Prop(new Vector(-4322, 8214, 102), new Rotator(), "NanosWorld::SM_Crate_07"),
	new Prop(new Vector(-4309, 8197, 154), new Rotator(), "NanosWorld::SM_Crate_03"),
	new Prop(new Vector(-4291, 8122, 102), new Rotator(), "NanosWorld::SM_Crate_04"),
	new Prop(new Vector(-1675, 6930, 225), new Rotator(), "NanosWorld::SM_Pot_01"),
	new Prop(new Vector(-1622, 6969, 231), new Rotator(), "NanosWorld::SM_Pot_02"),
	new Prop(new Vector(-985, 4936, 238), new Rotator(), "NanosWorld::SM_TeaPot_Interior"),
	new Prop(new Vector(-966, 5086, 232), new Rotator(), "NanosWorld::SM_Plate_Interior"),
	new Prop(new Vector(592, -5047, 437), new Rotator(), "NanosWorld::SM_Barrel_02"),
	new Prop(new Vector(9231, 1057, 94), new Rotator(0, -95, 5), "NanosWorld::SM_Bamboo_Roof45_Right"),
	new Prop(new Vector(8931, -7428, 243), new Rotator(), "NanosWorld::SM_Stool"),
	new Prop(new Vector(-2552, -5090, 132), new Rotator(-5, 0, 4), "NanosWorld::SM_TireLarge"),
	new Prop(new Vector(-5565, 40, 426), new Rotator(), "NanosWorld::SM_Crate_07"),
	new Prop(new Vector(-5250, -375, 426), new Rotator(), "NanosWorld::SM_MetalBucket_Interior_02"),
	new Prop(new Vector(-5520, 5, 481), new Rotator(), "NanosWorld::SM_Basket_01"),
	new Prop(new Vector(-5060, -340, 431), new Rotator(), "NanosWorld::SM_WoodenTable"),
	new Prop(new Vector(-5060, -310, 516), new Rotator(), "NanosWorld::SM_Crate_03"),
	new Prop(new Vector(-5520, 600, 514.792), new Rotator(0, 0, -90), "NanosWorld::SM_TireLarge"),
	new Prop(new Vector(-965, 5555, 141), new Rotator(0, 76, 0), "NanosWorld::SM_WoodenChair"),
	new Prop(new Vector(-1055, 5580, 141), new Rotator(), "NanosWorld::SM_WoodenTable"),
	new Prop(new Vector(-1135, 5555, 141), new Rotator(0, -70, 0), "NanosWorld::SM_WoodenChair"),
	new Prop(new Vector(-5780, 8380, 126), new Rotator(), "NanosWorld::SM_Stool"),
	new Prop(new Vector(-5305, 7920, 126), new Rotator(), "NanosWorld::SM_WoodenChair"),
	new Prop(new Vector(-5455, 8440, 391), new Rotator(0, 0, 81), "NanosWorld::SM_Bamboo_Woodplank_01"),
	new Prop(new Vector(-2126, 6365, 133), new Rotator(0, -11, 0), "NanosWorld::SM_Crate_01"),
	new Prop(new Vector(-5029, 6804, 102), new Rotator(), "NanosWorld::SM_PlasticBarrel_01"),
	new Prop(new Vector(-5103, 6836, 102), new Rotator(), "NanosWorld::SM_PlasticBarrel_01"),
	new Prop(new Vector(-5185, 6903, 102), new Rotator(), "NanosWorld::SM_PlasticBarrel_01"),
	new Prop(new Vector(-2049, 6599, 133), new Rotator(), "NanosWorld::SM_RockingChair"),
	new Prop(new Vector(-994, 4991, 140), new Rotator(), "NanosWorld::SM_RoundStand"),
	new Prop(new Vector(-3767, 7941, 102), new Rotator(0, -34, 0), "NanosWorld::SM_Bottle_02"),
	new Prop(new Vector(-3828, 7946, 102), new Rotator(), "NanosWorld::SM_Bottle_01"),
	new Prop(new Vector(-3916, 8078, 124), new Rotator(), "NanosWorld::SM_Bottle"),
	new Prop(new Vector(-5617, 7980, 180), new Rotator(), "NanosWorld::SM_Bunny"),
	new Prop(new Vector(-3855, 8096, 198), new Rotator(), "NanosWorld::SM_CupC"),
	new Prop(new Vector(-3704, 8084, 198), new Rotator(), "NanosWorld::SM_OilLamp"),
	new Prop(new Vector(-3824, 8045, 198), new Rotator(0, 20, 0), "NanosWorld::SM_PlierSet_01"),
	new Prop(new Vector(-3759, 8057, 198), new Rotator(0, -14, 0), "NanosWorld::SM_PliersSet_07"),
	new Prop(new Vector(-4730, 6813, 141), new Rotator(), "NanosWorld::SM_RoundStand"),
	new Prop(new Vector(-4736, 6812, 203), new Rotator(), "NanosWorld::SM_Saw_01"),
	new Prop(new Vector(-1664, 6738, 133), new Rotator(), "NanosWorld::SM_BarrelTub"),
	new Prop(new Vector(-1339, 5019, 140), new Rotator(), "NanosWorld::SM_CoffeeTable"),
	new Prop(new Vector(-1363, 4840, 102), new Rotator(), "NanosWorld::SM_Crate_Base_01"),
	new Prop(new Vector(-1403, 4845, 199), new Rotator(0, -45, 0), "NanosWorld::SM_Crate_Lid_01"),
	new Prop(new Vector(-5933, 8163, 183), new Rotator(), "NanosWorld::SM_Toolbox_01"),
	new Prop(new Vector(-5929, 8126, 229), new Rotator(), "NanosWorld::SM_Toolbox_06"),
	new Prop(new Vector(-5932, 8178, 230), new Rotator(), "NanosWorld::SM_VaseA"),
	new Prop(new Vector(-1034, 5557, 235), new Rotator(), "NanosWorld::SM_CupD"),

	NanosWorldWeapons.AK47(new Vector(-1850, 9153, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.AK74U(new Vector(-1900, 9153, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.GE36(new Vector(-1950, 9153, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.AP5(new Vector(-2000, 9153, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.SMG11(new Vector(-2050, 9153, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.Moss500(new Vector(-2100, 9153, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.Glock(new Vector(-2150, 9153, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.DesertEagle(new Vector(-2200, 9153, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.AR4(new Vector(-2250, 9153, 192), new Rotator(0, 90, 90)),
	new Grenade(new Vector(-2300, 9153, 192), new Rotator(0, 90, 90), "NanosWorld::SM_Grenade_G67"),

	NanosWorldWeapons.AK47(new Vector(-1850, 9234, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.AK74U(new Vector(-1900, 9234, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.GE36(new Vector(-1950, 9234, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.AP5(new Vector(-2000, 9234, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.SMG11(new Vector(-2050, 9234, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.Moss500(new Vector(-2100, 9234, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.Glock(new Vector(-2150, 9234, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.DesertEagle(new Vector(-2200, 9234, 192), new Rotator(0, 90, 90)),
	NanosWorldWeapons.AR4(new Vector(-2250, 9234, 192), new Rotator(0, 90, 90)),
	new Grenade(new Vector(-2300, 9234, 192), new Rotator(0, 90, 90), "NanosWorld::SM_Grenade_G67"),

	NanosWorldWeapons.Glock(new Vector(-5120, 6977, 195), new Rotator(0, -45, -90)),
	NanosWorldWeapons.Glock(new Vector(-5067, 6948, 195), new Rotator(0, 0, -90)),
	NanosWorldWeapons.Glock(new Vector(-5008, 6912, 195), new Rotator(0, -22, -90)),
	NanosWorldWeapons.SMG11(new Vector(-973, 4995, 235), new Rotator(0, 0, -90)),
	NanosWorldWeapons.GE36(new Vector(3660, 11025, 57), new Rotator(0, 0, 90)),
	NanosWorldWeapons.AK47(new Vector(7543, 5589, 210), new Rotator(0, 90, 90)),
	NanosWorldWeapons.AK74U(new Vector(7466, 5589, 210), new Rotator(0, 90, 90)),
	NanosWorldWeapons.AR4(new Vector(7368, 5589, 210), new Rotator(0, 90, 90)),
	NanosWorldWeapons.Moss500(new Vector(7343, 5572, 156), new Rotator(0, 0, 90)),
	NanosWorldWeapons.Moss500(new Vector(7481, 5572, 156), new Rotator(0, 0, 90)),
	NanosWorldWeapons.AP5(new Vector(-4054, 8095, 145), new Rotator(0, 0, -90)),

	NanosWorldWeapons.AK74U(new Vector(9137, 1304, 113), new Rotator(-5, 0, -90)),
	NanosWorldWeapons.AK47(new Vector(9137, 1243, 113), new Rotator(-5, 0, -90)),
	NanosWorldWeapons.GE36(new Vector(9137, 1155, 113), new Rotator(-5, 0, -90)),

	new Vehicle(new Vector(-40, 7262, 130), new Rotator(0, -80, 0), "NanosWorld::BP_Vehicle_SUV"),
	new Vehicle(new Vector(530, 7344, 130), new Rotator(0, -80, 0), "NanosWorld::BP_Vehicle_Pickup"),
	new Vehicle(new Vector(480, 5080, 100), new Rotator(0, -10, 0), "NanosWorld::BP_Vehicle_Truck"),
	new Vehicle(new Vector(1720, 1660, 118), new Rotator(), "NanosWorld::BP_Vehicle_Truck_Chassis"),
	new Vehicle(new Vector(9650, -2840, 80), new Rotator(0, -137, 0), "NanosWorld::BP_Vehicle_Hatchback"),
	new Vehicle(new Vector(-10630.0, 6870.0, 80), new Rotator(0, -137, 0), "NanosWorld::BP_Vehicle_SportCar"),

	new Item(new Vector(-1786, 7273, 120), new Rotator(), "NanosWorld::BP_Grabable_Torch"),
	new Item(new Vector(7575, 5287, 133), new Rotator(0, 0, 15), "NanosWorld::BP_Grabable_Torch"),

	NanosWorldWeapons.AK47(new Vector(-10928, 4225, 118), new Rotator(0, 0, -90)),
	NanosWorldWeapons.AK47(new Vector(-10940, 4150, 118), new Rotator(0, 0, -90)),
	NanosWorldWeapons.AK47(new Vector(-10950, 4066, 118), new Rotator(0, 0, -90)),

	NanosWorldWeapons.GE36(new Vector(-8029, 4132, 321), new Rotator(0, 0, 90)),
	NanosWorldWeapons.GE36(new Vector(-7945, 4132, 321), new Rotator(0, 0, 90)),
	NanosWorldWeapons.GE36(new Vector(-7857, 4132, 321), new Rotator(0, 0, 90)),

	NanosWorldWeapons.AK74U(new Vector(-9129, -3325, 112), new Rotator(0, 0, 90)),
	NanosWorldWeapons.AK74U(new Vector(-9129, -3237, 112), new Rotator(0, 0, 90)),
	NanosWorldWeapons.AK74U(new Vector(-9129, -3137, 112), new Rotator(0, 0, 90)),
	NanosWorldWeapons.AR4(new Vector(-9208, -3137, 112), new Rotator(0, 0, 90)),
	NanosWorldWeapons.AR4(new Vector(-9208, -3237, 112), new Rotator(0, 0, 90)),
	NanosWorldWeapons.AR4(new Vector(-9208, -3325, 112), new Rotator(0, 0, 90)),
	NanosWorldWeapons.Moss500(new Vector(2001, -10769, 123), new Rotator(0, 0, 90)),
	NanosWorldWeapons.Moss500(new Vector(2001, -10669, 123), new Rotator(0, 0, 90)),
	new Grenade(new Vector(2001, -10380, 123), new Rotator(), "NanosWorld::SM_Grenade_G67"),

	NanosWorldWeapons.AP5(new Vector(-10030, -2039, 100), new Rotator(0, 0, -90)),
	NanosWorldWeapons.SMG11(new Vector(-10167, -1895, 101), new Rotator(0, 0, -90)),

	NanosWorldWeapons.GE36(new Vector(-5243.0, -236, 481), new Rotator(0, 90, -90)),
	NanosWorldWeapons.AP5(new Vector(-5243, -115, 481), new Rotator(0, 90, -90))
];


const startLocations = [
    new Vector(-4701.000000, 7058.000000, 236.000000),
    new Vector(7065.000000, 5516.000000, 192.000000),
    new Vector(4084.000000, 8175.000000, 238.000046),
    new Vector(-4661.070801, -688.318481, 295.228271),
    new Vector(9349.953125, -776.581421, 215.060547),
    new Vector(6221.000000, -7602.000000, 197.000000),
    new Vector(344.223877, -4713.804199, 517.179199),
    new Vector(-2352.433594, -6579.508789, 313.297119),
    new Vector(-7831.000000, -7635.000000, 197.000000),
    new Vector(-9481.000000, -2884.350830, 185.215271),
    new Vector(-8014.036621, -754.221375, 394.598022),
    new Vector(-9400.706055, 3869.706299, 186.855911),
    new Vector(-5850.000000, 8164.000000, 222.000046),
    new Vector(-2050.000000, 6654.000000, 228.000000),
    new Vector(-1207.603516, 5056.930176, 235.285980),
    new Vector(3760.009277, 10620.053711, 119.038712),
    new Vector(3143.985352, 8324.702148, 248.355957),
    new Vector(6910.936035, -1799.466309, 267.055115),
    new Vector(1569.594360, -10662.000000, 216.248596),
    new Vector(-4014.836670, -4764.884766, 713.900269)
];


Server.on(ServerEventType.START, () => {
    console.log("Server started !! ");
});

Player.on(PlayerEventType.Spawn, (player) => {
    const character = new Character();
    player.Possess(character);
});
Character.on(CharacterEventType.Respawn, (character) => {
    const location = startLocations[Math.floor(Math.random() * (startLocations.length - 0)) + 0];
    character.SetInitialLocation(location);
});

Player.on(PlayerEventType.UNPOSSESS, (player, character, bIsPlayerDisconnecting) => {
    if(bIsPlayerDisconnecting) {
        character.Destroy();
    }
});

Events.on("printPing", (player: Player) => {
    Package.Log("Call from remote");
    Package.Log("Player ping is: " + player.GetPing());
})