// #### LEVELS ####

function levelSetup() {
	
	clearControls();
	
	player = new Player();
	player.x = 0;
	player.y = 200;
	player.vx = 0;
	player.vy = 0;
	onSolid = true;
	
	bullets = [];
	stones = [];
	images = [];
	obsticles = [];
	baddies = [];
	map_baddies = [];
	specials = [];
	items = [];
	collected_stars = 0;
	
}

//LEVEL 1

function Level_1() {
	
	music.pause();
	music = terror16;
	music.currentTime = 0;
	if (mute == false) {
		music.play();
		}

	levelSetup();
	
	bground = background2;
	
	// LAND
	
	obsticles.push( new Obsticle(-100, 0, 1084, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(1496, 0, 320, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(1990, 0, 2792, 64, 128, 256, 64, 64) );
	
	// BOXES
	
	obsticles.push( new Obsticle(600, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(664, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(728, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(792, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(856, -1, 64, 64, 128, 256, 64, 64) );
	
	
	obsticles.push( new Obsticle(1112, -1, 64, 64, 128, 256, 64, 64) );
	
	obsticles.push( new Obsticle(1304, -1, 64, 64, 128, 256, 64, 64) );
	
	obsticles.push( new Obsticle(1496, -1, 64, 64, 128, 256, 64, 64) );
	
	obsticles.push( new Obsticle(2600, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(2600, -2, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(2600, -3, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(2600, -4, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(2664, -2, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(2664, -4, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(2728, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(2728, -2, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(2728, -3, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(2728, -4, 64, 64, 128, 256, 64, 64) );
	
	obsticles.push( new Obsticle(3192, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(3256, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(3256, -2, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(3320, -1, 64, 64, 128, 256, 64, 64) );
	
	obsticles.push( new Obsticle(3784, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(3848, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(3848, -2, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(3912, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(3912, -2, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(3912, -3, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(3976, -1, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(3976, -2, 64, 64, 128, 256, 64, 64) );
	obsticles.push( new Obsticle(4040, -1, 64, 64, 128, 256, 64, 64) );
	
	
	


	map_baddies.push( new Water(984) );
	map_baddies.push( new Water(1112) );
	map_baddies.push( new Water(1240) );
	map_baddies.push( new Water(1368) );
	
	map_baddies.push( new Shark(600, -2) );
	map_baddies.push( new Shark(664, -2) );
	map_baddies.push( new Shark(728, -2) );
	map_baddies.push( new Shark(792, -2) );
	map_baddies.push( new Shark(856, -2) );
	
	map_baddies.push( new WaterShark(1230) );
	map_baddies.push( new WaterShark(1415) );
	
	map_baddies.push( new Shark(1380, -1) );
	
	map_baddies.push( new Shark(2450, -1) );
	map_baddies.push( new KnifeShark(2520, -1) );
	
	map_baddies.push( new KnifeShark(2664, -1) );
	map_baddies.push( new KnifeShark(2664, -3) );
	
	map_baddies.push( new Shark(3256, -2) );
	map_baddies.push( new Shark(3848, -3) );
	map_baddies.push( new JumpyShark(3912, -4) );
	
	
	items.push( new Star(-164, -3) );
	items.push( new Star(2500, -5) );
	items.push( new Star(2856, -5) );
	items.push( new Star(3925, -6) );
	items.push( new Star(4200, -1) );
	items.push( new LevelUp(1250, -5) );
	
	
	goal = new Goal(4400, 0);
	
	timer = setInterval(function() {
		update();
		draw();
	}, (1000/FPS));
	
}

// LEVEL 2


function Level_2() {

	levelSetup();
	
	bground = background2;
	
	music.pause();
	music = pawns16;
	music.currentTime = 0;
	if (mute == false) {
		music.play();
		}
	
	
	player.y = HEIGHT - 128;
	// LAND 
	
	obsticles.push( new Obsticle(-100, 0, 1084, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(1100, 0, 2464, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(3764, 0, 500, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(4364, 0, 500, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(4964, 0, 500, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6268, 0, 296, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6820, 0, 2400, 64, 448, 256, 64, 64) );
	
	// BOXES
	
	obsticles.push( new Obsticle(1700, -1, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(2300, -1, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(2300, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(2900, -1, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(2900, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(2900, -3, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(3500, -1, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(3500, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(3500, -3, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(3500, -4, 64, 64, 448, 256, 64, 64) );
	
	// MAZE of BOXES
	
	obsticles.push( new Obsticle(5500, -1, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5564, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5628, -3, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5692, -4, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5756, -5, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5756, -4, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5756, -3, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5756, -2, 64, 64, 448, 256, 64, 64) );
	images.push( new Obsticle(5820, -5, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5820, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5820, -1, 64, 64, 448, 256, 64, 64) );
	images.push( new Obsticle(5884, -5, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5884, -4, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5884, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5884, -1, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5948, -5, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5948, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(5948, -1, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6012, -5, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6012, -3, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6012, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6012, -1, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6076, -5, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6076, -3, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6076, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6076, -1, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6140, -5, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6140, -3, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6140, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6140, -1, 64, 64, 448, 256, 64, 64) );
	images.push( new Obsticle(6204, -5, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6268, -5, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6268, -4, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(6268, -3, 64, 64, 448, 256, 64, 64) );
	images.push( new Obsticle(6268, -2, 64, 64, 448, 256, 64, 64) );
	images.push( new Obsticle(6268, -1, 64, 64, 448, 256, 64, 64) );
	
	obsticles.push( new Obsticle(6500, -1, 64, 64, 448, 256, 64, 64) );

	obsticles.push( new Obsticle(6676, -1, 32, 32, 448, 256, 64, 64) );

	obsticles.push( new Obsticle(6820, -1, 64, 64, 448, 256, 64, 64) );
	
	obsticles.push( new Obsticle(7320, -1, 64, 64, 448, 256, 64, 64) );
	
	obsticles.push( new Obsticle(7600, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(7664, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(7728, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(7792, -2, 64, 64, 448, 256, 64, 64) );
	
	specials.push( new Elevator(7920, -2, 64, 64, 448, 256, 64, 64, 0) );
	
	obsticles.push( new Obsticle(8048, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(8112, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(8176, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(8240, -2, 64, 64, 448, 256, 64, 64) );
	
	obsticles.push( new Obsticle(8368, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(8496, -2, 64, 64, 448, 256, 64, 64) );
	obsticles.push( new Obsticle(8624, -2, 64, 64, 448, 256, 64, 64) );
	// BADDIES
	
	map_baddies.push( new KnifeShark(1600, -1) );
	
	map_baddies.push( new Shark(1800, -1) );
	map_baddies.push( new Shark(2030, -1) );

	
	map_baddies.push( new KnifeShark(2400, -1) );
	map_baddies.push( new KnifeShark(2630, -1) );

	
	map_baddies.push( new JumpyShark(3000, -1) );
	map_baddies.push( new JumpyShark(3230, -1) );

	map_baddies.push( new Shark(4200, -1) );
	map_baddies.push( new KnifeShark(4800, -1) );
	map_baddies.push( new JumpyShark(5400, -1) );
	
	map_baddies.push( new Shark(6296, -26) );
	map_baddies.push( new Shark(6140, -4) );
	
	// L
	map_baddies.push( new GhostShark(0, -5, 0, -1) );
	map_baddies.push( new GhostShark(0, -4, 0, -1) );
	map_baddies.push( new GhostShark(0, -3, 0, -1) );
	map_baddies.push( new GhostShark(50, -3, 0, -1) );
	map_baddies.push( new GhostShark(100, -3, 0, -1) );
	//O
	map_baddies.push( new GhostShark(200, -5, 0, -1) );
	map_baddies.push( new GhostShark(200, -4, 0, -1) );
	map_baddies.push( new GhostShark(200, -3, 0, -1) );
	map_baddies.push( new GhostShark(250, -5, 0, -1) );
	map_baddies.push( new GhostShark(250, -3, 0, -1) );
	map_baddies.push( new GhostShark(300, -5, 0, -1) );
	map_baddies.push( new GhostShark(300, -4, 0, -1) );
	map_baddies.push( new GhostShark(300, -3, 0, -1) );
	//U
	map_baddies.push( new GhostShark(400, -5, 0, -1) );
	map_baddies.push( new GhostShark(400, -4, 0, -1) );
	map_baddies.push( new GhostShark(400, -3, 0, -1) );
	map_baddies.push( new GhostShark(450, -3, 0, -1) );
	map_baddies.push( new GhostShark(500, -5, 0, -1) );
	map_baddies.push( new GhostShark(500, -4, 0, -1) );
	map_baddies.push( new GhostShark(500, -3, 0, -1) );
	//'
	map_baddies.push( new GhostShark(600, -6, 0, -2) );
	//S
	map_baddies.push( new GhostShark(700, -5, 0, -1) );
	map_baddies.push( new GhostShark(700, -3, 0, -1) );
	map_baddies.push( new GhostShark(750, -5.25, 0, -1) );
	map_baddies.push( new GhostShark(750, -2.75, 0, -1) );
	map_baddies.push( new GhostShark(800, -5, 0, -1) );
	map_baddies.push( new GhostShark(800, -3, 0, -1) );
	map_baddies.push( new GhostShark(725, -4.3, 0, -1) );
	map_baddies.push( new GhostShark(775, -3.7, 0, -1) );
	
	map_baddies.push( new Water(6564) );
	map_baddies.push( new Water(6692) );
	map_baddies.push( new WaterShark(6564) );
	map_baddies.push( new WaterShark(6628) );
	map_baddies.push( new WaterShark(6712) );
	map_baddies.push( new WaterShark(6776) );
	
	map_baddies.push( new KnifeShark(7000, -1) );
	map_baddies.push( new Shark(7100, -1) );
	map_baddies.push( new Shark(7200, -1) );
	
	map_baddies.push( new JumpyShark(8350, -1) );
	map_baddies.push( new JumpyShark(8500, -1) );
	
	map_baddies.push( new JumpyShark(9000, -1) );
	// ITEMS 
	
	items.push( new Note(3564, -1) );
	items.push( new Star(6220, -6) );
	items.push( new Star(6584, -5) );
	items.push( new Star(6648, -5) );
	items.push( new Star(6716, -5) );
	items.push( new Star(6780, -5) );
	items.push( new LevelUp(8700, -4) );
	
	time = 1000;
	goal = new Goal(9000, -1);
	
	timer = setInterval(function() {
		update();
		draw();
	}, (1000/FPS));
	//return timer; // IS THIS NEEDED ?
	
}


// LEVEL 3

function Level_3() {

	music.pause();
	music = name16;
	music.currentTime = 0;
	if (mute == false) {
		music.play();
		}
	
	levelSetup();
	exploded = false;
	
	player.y = HEIGHT - 500;
	obsticles.push(new Obsticle(-64, 0, 128, 256, 192, 256, 64, 64) );
	obsticles.push(new Obsticle(-64, HEIGHT - 320, 32, 64, 192, 256, 64, 64) );
	obsticles.push(new Obsticle(32, HEIGHT - 320, 32, 64, 192, 256, 64, 64) );
	obsticles.push(new Obsticle(-64, HEIGHT - 352, 128, 32, 192, 256, 64, 64) );
	
	bground = background2;
	
	// LAND
	
	obsticles.push( new Obsticle(1020, 0, 1292, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(2824, 0, 4108, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(7572, 0, 1000, 64, 192, 256, 64, 64) );
	
	// BOXES
	
	specials.push( new Elevator(200, HEIGHT - 192, 64, 32, 192, 256, 64, 64, 0) );
	specials.push( new Elevator(350, HEIGHT - 256, 64, 32, 192, 256, 64, 64, HEIGHT - 64) );
	specials.push( new Elevator(500, HEIGHT - 320, 64, 32, 192, 256, 64, 64, HEIGHT - 192) );
	
	obsticles.push( new Obsticle(700, 0, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(700, HEIGHT - 128, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(700, HEIGHT - 192, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(700, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(764, 0, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(764, HEIGHT - 128, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(764, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(828, 0, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(828, HEIGHT - 128, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(828, HEIGHT - 192, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(892, 0, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(892, HEIGHT - 128, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(956, 0, 64, 64, 192, 256, 64, 64) );
	
	images.push( new Obsticle(1800, HEIGHT - 128, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(1800, HEIGHT - 192, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(1800, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(1800, HEIGHT - 320, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(1800, HEIGHT - 384, 64, 64, 192, 256, 64, 64) );
	
	specials.push( new Elevator(1864, HEIGHT - 322, 64, 32, 192, 256, 64, 64, HEIGHT - 50) );
	
	obsticles.push( new Obsticle(1928, HEIGHT - 128, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(1928, HEIGHT - 192, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(1928, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(1928, HEIGHT - 320, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(1992, HEIGHT - 320, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(1992, HEIGHT - 352, 32, 32, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(2056, HEIGHT - 320, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(2120, HEIGHT - 320, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(2184, HEIGHT - 320, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(2184, HEIGHT - 320, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(2248, HEIGHT - 320, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(2280, HEIGHT - 352, 32, 32, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(2280, HEIGHT - 96, 32, 32, 192, 256, 64, 64) );
	
	specials.push( new Elevator(2440, HEIGHT - 192, 64, 32, 192, 256, 64, 64, HEIGHT - 128) );
	specials.push( new Elevator(2568, HEIGHT - 256, 64, 32, 192, 256, 64, 64, HEIGHT - 128) );
	specials.push( new Elevator(2696, HEIGHT - 320, 64, 32, 192, 256, 64, 64, HEIGHT - 128) );
	
	obsticles.push( new Obsticle(3700, HEIGHT - 128, 64, 64, 192, 256, 64, 64) );
	
	obsticles.push( new Obsticle(3800, HEIGHT - 196, 32, 32, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(3924, HEIGHT - 288, 32, 32, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(3924, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(3988, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4052, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4116, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4180, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4244, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4308, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4372, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4436, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4500, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4564, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4596, HEIGHT - 288, 32, 32, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4628, HEIGHT - 192, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(4692, HEIGHT - 128, 64, 64, 192, 256, 64, 64) );
	
	specials.push( new Elevator(5000, HEIGHT - 150, 32, 16, 192, 256, 64, 64, HEIGHT - 130) );
	specials.push( new Elevator(5150, HEIGHT - 200, 32, 16, 192, 256, 64, 64, HEIGHT - 180) );
	specials.push( new Elevator(5300, HEIGHT - 250, 32, 16, 192, 256, 64, 64, HEIGHT - 230) );
	specials.push( new Elevator(5450, HEIGHT - 300, 32, 16, 192, 256, 64, 64, HEIGHT - 280) );
	specials.push( new Elevator(5600, HEIGHT - 300, 32, 16, 192, 256, 64, 64, HEIGHT - 280) );
	specials.push( new Elevator(5750, HEIGHT - 250, 32, 16, 192, 256, 64, 64, HEIGHT - 230) );
	specials.push( new Elevator(5900, HEIGHT - 200, 32, 16, 192, 256, 64, 64, HEIGHT - 180) );
	specials.push( new Elevator(6050, HEIGHT - 150, 32, 16, 192, 256, 64, 64, HEIGHT - 130) );
	
	
	obsticles.push( new Obsticle(6932, HEIGHT - 128, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(6996, HEIGHT - 192, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(7060, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(7124, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(7188, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(7252, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(7316, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(7380, HEIGHT - 256, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(7444, HEIGHT - 192, 64, 64, 192, 256, 64, 64) );
	obsticles.push( new Obsticle(7508, HEIGHT - 128, 64, 64, 192, 256, 64, 64) );
	
	
	// ITEMS
	
	items.push( new Star (-90, HEIGHT - 256) );
	items.push( new Star (670, HEIGHT - 80) );
	items.push( new Note (1780, HEIGHT - 320) );
	items.push( new Star (1992, HEIGHT - 90) );
	items.push( new Note (2056, HEIGHT - 90) );
	items.push( new Note (2440, HEIGHT - 384) );
	items.push( new Star (4200, HEIGHT - 90) );
	items.push( new LevelUp (4640, HEIGHT - 90) );
	items.push( new Star (5525, HEIGHT - 450) );
	
	
	
	// BADDIES
	
	map_baddies.push( new KnifeShark(0, -4) );
	map_baddies.push( new KnifeShark(764, -2) );
	map_baddies.push( new GhostShark(750, -4, -4, -2) );
	
	map_baddies.push( new Shark(1500, -1) );
	map_baddies.push( new KnifeShark(1600, -1) );
	
	map_baddies.push( new Shark(2200, -1) );
	map_baddies.push( new Shark(2200, -5) );
	map_baddies.push( new Shark(2300, -6) );
	
	map_baddies.push( new Water(2312) );
	map_baddies.push( new Water(2440) );
	map_baddies.push( new Water(2568) );
	map_baddies.push( new Water(2696) );
	map_baddies.push( new WaterShark(2380) );
	map_baddies.push( new WaterShark(2510) );
	map_baddies.push( new WaterShark(2630) );
	map_baddies.push( new WaterShark(2760) );

	map_baddies.push( new Shark(3250, -1) );
	map_baddies.push( new Shark(3350, -1) );
	map_baddies.push( new JumpyShark(3500, -1) );
	map_baddies.push( new KnifeShark(3600, -1) );
	
	
	map_baddies.push( new Shark(4200, -1) );
	map_baddies.push( new Shark(4300, -1) );
	map_baddies.push( new KnifeShark(4450, -1) );
	map_baddies.push( new GhostShark(4600, -1, -3, -2) );

	map_baddies.push( new Shark(4200, -4) );	
	map_baddies.push( new JumpyShark(4300, -4) );
	map_baddies.push( new Shark(4450, -4) );
	map_baddies.push( new KnifeShark(4600, -5) );

	map_baddies.push( new GhostShark(5300, -1, -3, -2) );
	map_baddies.push( new GhostShark(5500, -3, -3, -2) );
	map_baddies.push( new GhostShark(5650, -2, -3, -2) );
	map_baddies.push( new Shark(5550, -1) );
	map_baddies.push( new Shark(5700, -1) );
	map_baddies.push( new Shark(5850, -1) );
	map_baddies.push( new Shark(6000, -1) );
	
	map_baddies.push( new Shark(6500, -1) );
	map_baddies.push( new JumpyShark(6650, -1) );
	map_baddies.push( new KnifeShark(6800, -1) );
	
	
	map_baddies.push( new Water(6932) );
	map_baddies.push( new Water(7060) );
	map_baddies.push( new Water(7188) );
	map_baddies.push( new Water(7316) );
	map_baddies.push( new Water(7444) );
	
	goal = new Goal(7572, 0);
	
	timer = setInterval(function() {
		update();
		draw();
	}, (1000/FPS));
	
	
}

// LEVEL 4

function Level_4() {

	levelSetup();
	
	music.pause();
	//music = burn16;
	music = pawns16;
	music.currentTime = 0;
	if (mute == false) {
		music.play();
		}
	
	bground = background1;
	
	player.y = HEIGHT - 128;
	// LAND
	
	obsticles.push( new Obsticle(-100, 0, 1600, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(1628, 0, 2000, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(4204, 0, 400, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(4668, 0, 400, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(6000, 0, 2000, 64, 64, 256, 64, 64) );
	
	// BOXES
	
	obsticles.push( new Obsticle(-100, -3.5, 650, 650, 64, 256, 64, 64) );
	
	obsticles.push( new Obsticle(678, -1, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(678, -2, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(678, -3, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(678, -4, 64, 64, 64, 256, 64, 64) );
	
	obsticles.push( new Obsticle(742, -1, 192, 256, 64, 256, 64, 64) );
	
	obsticles.push( new Obsticle(742, -5, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(806, -5, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(870, -5, 64, 64, 64, 256, 64, 64) );
	
	images.push( new Obsticle(806, -6, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(806, -7, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(806, -8, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(806, -9, 64, 64, 64, 256, 64, 64) );
	
	images.push( new Obsticle(2000, -1, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2000, -2, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2000, -3, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2000, -4, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2000, -5, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2000, -6, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2000, -7, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2000, -8, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2000, -9, 64, 64, 64, 256, 64, 64) );


	obsticles.push( new Obsticle(2128, -1, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2128, -2, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2128, -3, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2128, -4, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2128, -5, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2128, -6, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2128, -7, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2128, -8, 64, 64, 64, 256, 64, 64) );
	images.push( new Obsticle(2128, -9, 64, 64, 64, 256, 64, 64) );
	
	images.push( new Obsticle(2400, -1, HEIGHT-64, HEIGHT-64, 64, 256, 64, 64) );
	
	specials.push( new Special(3692, 0, 64, 64, 64, 256, 64, 64) );
	specials.push( new Special(3820, 0, 64, 64, 64, 256, 64, 64) );
	specials.push( new Special(3948, 0, 64, 64, 64, 256, 64, 64) );
	specials.push( new Special(4076, 0, 64, 64, 64, 256, 64, 64) );
	
	obsticles.push( new Teleport(4604, 0, 64, 64, 6020, 100) );
	
	// BADDIES
	
	map_baddies.push( new Water(1500) );
	
	
	map_baddies.push( new GhostShark(500, -1, -4, 0) );
	
	map_baddies.push( new Shark(870, -6) );
	
	map_baddies.push( new GhostShark(1100, -2, -4, -4) );
	map_baddies.push( new GhostShark(1150, -4, -4, -4) );
	
	map_baddies.push( new Shark(1770, -20) );
	
	map_baddies.push( new GhostShark(2510, -2, -4, 4) );
	map_baddies.push( new GhostShark(2510, -3, -4, -4) );
	
	map_baddies.push( new KnifeShark(3600, -1) );
	map_baddies.push( new GhostShark(3600, -2, -4, 0) );
	map_baddies.push( new GhostShark(3600, -3, -4, 0) );
	
	map_baddies.push( new GhostShark(4192, -1, -4, -4) );
	map_baddies.push( new GhostShark(4320, -2, -4, -4) );
	map_baddies.push( new GhostShark(4448, -1, -4, -4) );
	map_baddies.push( new GhostShark(4576, -2, -4, -4) );
	
	map_baddies.push( new Shark(6300, -1) );
	map_baddies.push( new Shark(6400, -1) );
	map_baddies.push( new Shark(6500, -1) );
	map_baddies.push( new Shark(6600, -1) );
	map_baddies.push( new GhostShark(6500, -2, -4, 0) );
	map_baddies.push( new Shark(6700, -1) );
	map_baddies.push( new Shark(6800, -1) );
	map_baddies.push( new GhostShark(6700, -2, -4, 0) );
	map_baddies.push( new GhostShark(6700, -3, -4, 0) );
	
	
	
	
	map_baddies.push( new GhostShark(7100, (Math.floor(Math.random() * 5) + 1) * -1, 0, -4) );
	map_baddies.push( new GhostShark(7150, (Math.floor(Math.random() * 5) + 1) * -1, 0, -4) );
	map_baddies.push( new GhostShark(7200, (Math.floor(Math.random() * 5) + 1) * -1, 0, -4) );
	map_baddies.push( new GhostShark(7250, (Math.floor(Math.random() * 5) + 1) * -1, 0, -4) );
	map_baddies.push( new GhostShark(7300, (Math.floor(Math.random() * 5) + 1) * -1, 0, -4) );
	
	items.push( new Star(1550, -2) );
	items.push( new Star(4620, 0) );
	items.push( new Star(7150, -3) );
	items.push( new Star(7250, -3) );
	items.push( new Star(7350, -3) );
	
	time = 1000;
	goal = new Goal(7500, -1);
	
	timer = setInterval(function() {
		update();
		draw();
	}, (1000/FPS));
	
	
}


//LEVEL 5

function Level_5() {

	levelSetup();
	
	music.pause();
	music = terror16;
	music.currentTime = 0;
	if (mute == false) {
		music.play();
		}
	
	bground = background1;
	
	// LAND
	
	obsticles.push( new Obsticle(-256, 0, 320, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2240, 0, 3000, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(5880, 0, 852, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(7500, 0, 700, 64, 64, 256, 64, 64) );
	
	// BOXES
	
	obsticles.push( new Obsticle(128, HEIGHT - 140, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(192, HEIGHT - 140, 64, 64, 320, 256, 64, 64) );
	
	
	obsticles.push( new Obsticle(192, HEIGHT - 204, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(256, HEIGHT - 204, 64, 64, 320, 256, 64, 64) );
	
	
	obsticles.push( new Obsticle(384, HEIGHT - 256, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(448, HEIGHT - 256, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(448, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(512, HEIGHT - 256, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(576, HEIGHT - 256, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(640, HEIGHT - 256, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(704, HEIGHT - 256, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(704, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(768, HEIGHT - 256, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(768, HEIGHT - 384, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(832, HEIGHT - 256, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(832, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(832, HEIGHT - 448, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(896, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(896, HEIGHT - 384, 64, 64, 320, 256, 64, 64) );
	
	
	obsticles.push( new Obsticle(1150, HEIGHT - 192, 32, 32, 320, 256, 64, 64) );
	
	obsticles.push( new Obsticle(1250, HEIGHT - 256, 32, 32, 320, 256, 64, 64) );
	
	obsticles.push( new Obsticle(1350, HEIGHT - 320, 32, 32, 320, 256, 64, 64) );
	
	obsticles.push( new Obsticle(1500, HEIGHT - 192, 524, 32, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(1500, HEIGHT - 224, 32, 32, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(1992, HEIGHT - 224, 32, 32, 320, 256, 64, 64) );
	
	// T
	
	obsticles.push( new Obsticle(2700, HEIGHT - 320, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2764, HEIGHT - 128, 64, 64, 64, 256, 64, 64) );
	images.push( new Obsticle(2764, HEIGHT - 192, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2764, HEIGHT - 256, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2764, HEIGHT - 320, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2764, HEIGHT - 384, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2828, HEIGHT - 320, 64, 64, 64, 256, 64, 64) );
	
	// S
	
	images.push( new Obsticle(2900, HEIGHT - 128, 64, 64, 64, 256, 64, 64) );
	images.push( new Obsticle(2964, HEIGHT - 128, 64, 64, 64, 256, 64, 64) );
	images.push( new Obsticle(3028, HEIGHT - 128, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(3028, HEIGHT - 192, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(3028, HEIGHT - 256, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2964, HEIGHT - 256, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2900, HEIGHT - 256, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2900, HEIGHT - 320, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2900, HEIGHT - 384, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(2964, HEIGHT - 384, 64, 64, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(3028, HEIGHT - 384, 64, 64, 64, 256, 64, 64) );
	
	obsticles.push( new Obsticle(3300, HEIGHT - 128, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(3364, HEIGHT - 128, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(3364, HEIGHT - 192, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(3428, HEIGHT - 128, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(3428, HEIGHT - 192, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(3428, HEIGHT - 256, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(3492, HEIGHT - 128, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(3492, HEIGHT - 192, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(3492, HEIGHT - 256, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(3492, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	obsticles.push( new Obsticle(3556, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	images.push( new Obsticle(3620, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	images.push( new Obsticle(3684, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	images.push( new Obsticle(3748, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	images.push( new Obsticle(3812, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	images.push( new Obsticle(3876, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	images.push( new Obsticle(3940, HEIGHT - 320, 64, 64, 320, 256, 64, 64) );
	images.push( new Obsticle(4004, HEIGHT - 320, 192, 256, 320, 256, 64, 64) );
	
	specials.push( new Elevator(5352, HEIGHT - 128, 64, 32, 64, 256, 64, 64, 0) );
	specials.push( new Elevator(5528, HEIGHT - 256, 64, 32, 64, 256, 64, 64, HEIGHT - 128) );
	specials.push( new Elevator(5704, HEIGHT - 400, 64, 32, 64, 256, 64, 64, HEIGHT - 256) );
	
	obsticles.push( new Obsticle(6850, HEIGHT - 128, 32, 32, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(7000, HEIGHT - 156, 32, 32, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(7150, HEIGHT - 156, 32, 32, 64, 256, 64, 64) );
	obsticles.push( new Obsticle(7300, HEIGHT - 128, 32, 32, 64, 256, 64, 64) );
	
	// ITEMS
	
	items.push( new Note (0, HEIGHT - 128) );
	items.push( new Star (960, HEIGHT - 320) );
	items.push( new Note (1050, HEIGHT - 450) );
	items.push( new Star(2835, HEIGHT - 256) );
	items.push( new Star (3750, HEIGHT - 350) );
	items.push( new LevelUp(3900, HEIGHT - 350) );
	items.push( new Note (5240, HEIGHT - 200) );
	items.push( new Star (5880, HEIGHT - 500) );
	items.push( new Star (7075, HEIGHT - 300) );
	
	// BADDIES
	
	map_baddies.push( new Water(64) );
	map_baddies.push( new Water(64 + 128) );
	map_baddies.push( new Water((64) + 128 * 2));
	map_baddies.push( new Water((64) + 128 * 3));
	map_baddies.push( new Water((64) + 128 * 4));
	map_baddies.push( new Water((64) + 128 * 5));
	map_baddies.push( new Water((64) + 128 * 6));
	map_baddies.push( new Water((64) + 128 * 7));
	map_baddies.push( new Water((64) + 128 * 8));
	map_baddies.push( new Water((64) + 128 * 9));
	map_baddies.push( new Water((64) + 128 * 10));
	map_baddies.push( new Water((64) + 128 * 11));
	map_baddies.push( new Water((64) + 128 * 12));
	map_baddies.push( new Water((64) + 128 * 13));
	map_baddies.push( new Water((64) + 128 * 14));
	map_baddies.push( new Water((64) + 128 * 15));
	map_baddies.push( new Water((64) + 128 * 16));
	map_baddies.push( new WaterShark(64) );
	
	map_baddies.push( new Shark(576, -7) );
	map_baddies.push( new Shark(640, -12) );
	map_baddies.push( new Shark(704, -6) );
	map_baddies.push( new KnifeShark(736, -4) );
	map_baddies.push( new KnifeShark(832, -5) );
	map_baddies.push( new GhostShark(1050, -5, 0, -5) );
	map_baddies.push( new GhostShark(1200, -4, 0, -6) );
	map_baddies.push( new GhostShark(1300, -5, 0, -6) );
	
	map_baddies.push( new JumpyShark(1700, -3) );
	map_baddies.push( new JumpyShark(1800, -3) );
	
	
	map_baddies.push( new Shark(2350, -30) );
	map_baddies.push( new Shark(2450, -30) );

	map_baddies.push( new Shark(2600, -20) );
	map_baddies.push( new Shark(2700, -20) );
	
	map_baddies.push( new GhostShark(3200, -2, -4, -4) );

	
	map_baddies.push( new Shark(4000, -2) );
	map_baddies.push( new Shark(4040, -2) );
	map_baddies.push( new KnifeShark(4080, -2) );
	
	map_baddies.push( new GhostShark(5700, -2, -4, -4) );
	map_baddies.push( new GhostShark(5900, -3, -4, -4) );
	
	map_baddies.push( new Shark(6400, -2) );
	map_baddies.push( new JumpyShark(6500, -2) );
	map_baddies.push( new GhostShark(6600, -3, -6, 0) );
	map_baddies.push( new KnifeShark(6600, -2) );
	
	map_baddies.push( new Water(6732) );
	map_baddies.push( new WaterShark(6800) );
	map_baddies.push( new Water(6860) );
	map_baddies.push( new WaterShark(6950) );
	map_baddies.push( new Water(6988) );
	map_baddies.push( new WaterShark(7090) );
	map_baddies.push( new Water(7116) );
	map_baddies.push( new WaterShark(7225) );
	map_baddies.push( new Water(7244) );
	map_baddies.push( new Water(7372) );
	map_baddies.push( new WaterShark(7400) );
	
	time = 1000;
	goal = new Goal(7500, -1);
	
	
	timer = setInterval(function() {
		update();
		draw();
	}, (1000/FPS));
	
	
}
