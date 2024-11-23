// SETTING STARTSCREEN

function startScreen() {
	
	clear();
	
	ctx.drawImage(background2, 0, 0);
	
	ctx.fillStyle = "black";
	ctx.font = "50px Tahoma";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("TERROR SHARK BROS", WIDTH/2, HEIGHT * 0.23);
	ctx.font = "35px Tahoma";
	ctx.fillText("START", WIDTH/2, HEIGHT * 0.35);
	ctx.fillText("SETUP", WIDTH/2, HEIGHT * 0.45);
	ctx.fillText("HELP", WIDTH/2, HEIGHT * 0.55);
	
	ctx.font = "20px Tahoma";
	ctx.fillText("'S'tart, se'T'up, 'H'elp", WIDTH/2, HEIGHT/2 + 100);
	
}


// SETTING SETUP SCREEN

function setupScreen() {

	clear();
	
	ctx.drawImage(background2, 0, 0);
	
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	
	ctx.fillStyle = "black";
	ctx.font = "50px Tahoma";
	ctx.fillText("SELECT PLAYER", WIDTH/2, HEIGHT * 0.21);
	
	ctx.font = "35px Tahoma";
	
	ctx.fillText("Daniel", WIDTH/2 - 32, HEIGHT * 0.35);
	ctx.fillText("Pete", WIDTH/2 - 32, HEIGHT * 0.50);
	ctx.fillText("Jesse", WIDTH/2 - 32, HEIGHT * 0.65);
	
	ctx.font = "20px Tahoma";
	ctx.fillText("'D' - Daniel, 'P' - Pete, 'J' - Jesse", WIDTH/2, HEIGHT * 0.80);	
	
	ctx.drawImage(img, 0, 128, 64, 64, WIDTH/2 + 32, HEIGHT * 0.35 - 32, 64, 64);
	ctx.drawImage(img, 0, 64, 64, 64, WIDTH/2 + 32, HEIGHT * 0.50 - 32, 64, 64);
	ctx.drawImage(img, 0, 0, 64, 64, WIDTH/2 + 32, HEIGHT * 0.65 - 32, 64, 64);
	
}


// LEVELSCREEN


function levelScreen() {
	
	clear();
	
	// DRAWING THE MAP
	
	ctx.drawImage(maplevel5, 0, 0, WIDTH, HEIGHT);
	
	if (cleared_levels.length == 1) {
		ctx.drawImage(maplevel1, 0, 0, WIDTH, HEIGHT);
	}
	
	else if (cleared_levels.length == 2) {
		ctx.drawImage(maplevel2, 0, 0, WIDTH, HEIGHT);
	}
	
	else if (cleared_levels.length == 3) {
		ctx.drawImage(maplevel3, 0, 0, WIDTH, HEIGHT);
	}
	
	else if (cleared_levels.length == 4) {
		ctx.drawImage(maplevel4, 0, 0, WIDTH, HEIGHT);
	}
	
	else if (cleared_levels.length == 5) {
		ctx.drawImage(maplevel5, 0, 0, WIDTH, HEIGHT);
	}
	
	avatar = new Avatar(60, 30);
	
	ctx.fillStyle = "black";
	ctx.font = "30px Tahoma";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("SELECT LEVEL", WIDTH/2, 20);
	
	ctx.font = "20px Tahoma";
	ctx.fillText("'Z' - Select", WIDTH/2, 55);

	if (selected_level == 0) {
		avatar.x = 60;
		avatar.y = 72 - avatar.height;
		avatar.draw();
	}
	
	else if (selected_level == 1) {
		avatar.x = 350;
		avatar.y = 180 - avatar.height;
		avatar.draw();
	}
	
	else if (selected_level == 2) {
		avatar.x = 740;
		avatar.y = 320 - avatar.height;
		avatar.draw();
	}
	
	else if (selected_level == 3) {
		avatar.x = 180;
		avatar.y = 384 - avatar.height;
		avatar.draw();
	}
	else if (selected_level == 4) {
		avatar.x = 506;
		avatar.y = 575 - avatar.height;
		avatar.draw();
	}
	drawHUD();
	

}

// PAUSESCREEN

function pauseScreen() {
	
	clear();
	
	ctx.drawImage(background2, 0, 0);
	
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = "black";
	ctx.font = "50px Tahoma";
	ctx.fillText("GAME PAUSED", WIDTH/2, HEIGHT * 0.23);
	ctx.font = "30px Tahoma";
	ctx.fillText("RESUME", WIDTH/2, HEIGHT * 0.35);
	ctx.fillText("LEVEL SELECT", WIDTH/2, HEIGHT * 0.45);
	
	ctx.font = "20px Tahoma";
	ctx.fillText("'Z' - Resume, 'X' - Level select", WIDTH/2, HEIGHT * 0.55);

}

// HELPSCREEN

function helpScreen() {
	clear();
	
	ctx.drawImage(background2, 0, 0);
	
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = "black";
	ctx.font = "40px Tahoma";
	ctx.fillText("KEY", WIDTH/2 - 170, HEIGHT * 0.10);
	ctx.fillText("FUNCTION", WIDTH/2 + 150, HEIGHT * 0.10);
	ctx.font = "20px Tahoma";
	
	ctx.fillText("Arrowleft", WIDTH/2 - 170, HEIGHT * 0.20);
	ctx.fillText("Move left", WIDTH/2 + 150, HEIGHT * 0.20);
	
	ctx.fillText("Arrowright", WIDTH/2 - 170, HEIGHT * 0.30);
	ctx.fillText("Move right", WIDTH/2 + 150, HEIGHT * 0.30);
	
	ctx.fillText("Arrowup", WIDTH/2 - 170, HEIGHT * 0.40);
	ctx.fillText("Jump", WIDTH/2 + 150, HEIGHT * 0.40);
	
	ctx.fillText("Mouse and left mouseclick", WIDTH/2 - 170, HEIGHT * 0.50);
	ctx.fillText("Aim and throw notes to freeze enemies", WIDTH/2 + 150, HEIGHT * 0.50);
	
	ctx.fillText("M", WIDTH/2 - 170, HEIGHT * 0.60);
	ctx.fillText("Mute sounds", WIDTH/2 + 150, HEIGHT * 0.60);
	
	ctx.fillText("ESC", WIDTH/2 - 170, HEIGHT * 0.70);
	ctx.fillText("Back/Pause", WIDTH/2 + 150, HEIGHT * 0.70);
	
	ctx.fillText("HINTS", WIDTH/2, HEIGHT * 0.80);
	ctx.fillText("Jump on the sharks to kill them.", WIDTH/2, HEIGHT * 0.85);
	ctx.fillText("You can climb over tall objects by pressing arrow towards it and using jump.", WIDTH/2, HEIGHT * 0.90);
	ctx.fillText("You can earn more lives by collecting stars and 'bögös'.", WIDTH/2, HEIGHT * 0.95);

}

function gameOverScreen() {
	
	clear();
	ctx.drawImage(background2, 0, 0);
	
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	
	ctx.fillStyle = "black";
	ctx.font = "50px Tahoma";
	ctx.fillText("GAME OVER", WIDTH/2, HEIGHT/2);
	
	cleared_levels = [0];
	lives = 5;
	notes = 5;
	selected_level = 0;
	
	setTimeout(function(){
		GAMEOVERSCREEN = false;
		STARTSCREEN = true;
		music = theme;
		if (mute == false) {
			music.currentTime = 0;
			music.play();
		}
		startScreen();
	}, 2000);
		
}