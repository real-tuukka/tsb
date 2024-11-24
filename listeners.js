document.onkeydown = function(e) {
	
	if ([P1_LEFT, P1_RIGHT, P1_UP, P1_W, P1_A, P1_D].includes(e.which)) {
		e.preventDefault();
	}
	
	if (e.which == P1_MUTE && !P1_MUTE_DOWN) {
	    P1_MUTE_DOWN = true;
	 
	    if (mute == true) {
	        mute = false;
	        if (!VIDEO) {
	        	music.play();
	        }
	    }
	    
	    else {
	        mute = true;
	        if (!VIDEO) {
	        	music.pause();
	        }
	    }
	}
	
	if (STARTSCREEN) { // PRESS ANY KEY
		if (e.which == 83) {
			STARTSCREEN = false;
			LEVELSCREEN = true; // SKIPPING SETUP
			levelScreen();
		}
		else if (e.which == 84) {
			STARTSCREEN = false;
			SETUPSCREEN = true;
			setupScreen();
		}
		
		else if (e.which == 72) {
			STARTSCREEN = false;
			HELPSCREEN = true;
			helpScreen();
		}
		
	}
	
	if (SETUPSCREEN) {
		if (e.which == P1_ESC) {
			SETUPSCREEN = false;
			STARTSCREEN = true;
			startScreen();
		}
		else if (e.which == 74) {
			player_x = 0;
			player_y = 0;
			SETUPSCREEN = false;
			STARTSCREEN = true;
			startScreen();
		}
		else if (e.which == 80) {
			player_x = 0;
			player_y = 64;
			SETUPSCREEN = false;
			STARTSCREEN = true;
			startScreen();
		}
		else if (e.which == 68) {
			player_x = 0;
			player_y = 128;
			SETUPSCREEN = false;
			STARTSCREEN = true;
			startScreen();
		}
	}
	
	if (HELPSCREEN) {
		if (e.which == P1_ESC) {
			HELPSCREEN = false;
			STARTSCREEN = true;
			startScreen();
		}
	}
	
	if (LEVELSCREEN) {
		
		if (e.which == P1_ESC) {
			LEVELSCREEN = false;
			STARTSCREEN = true;
			startScreen();
		}
		
		if (
			e.which == P1_LEFT ||
			e.keyCode == P1_LEFT ||
			e.which == P1_A ||
			e.keyCode == P1_A
		) {
			if (selected_level > 0) {
				selected_level--;
				levelScreen();
			}
		}
		if (
			e.which == P1_RIGHT ||
			e.keyCode == P1_RIGHT ||
			e.which == P1_D ||
			e.keyCode == P1_D
		) {
			if (selected_level < 4) {
				if (cleared_levels.indexOf(selected_level + 1) != -1) {
				selected_level++;
				levelScreen();
				}
			}
		}
		if (e.which == P1_BTN1 || e.keyCode == P1_BTN1) {
			
			if ($.inArray(selected_level, cleared_levels) != -1) {
			
				if (selected_level == 0) {
					LEVELSCREEN = false;
					GAMESCREEN = true;
					Level_1();
				}
				if (selected_level == 1) {
					LEVELSCREEN = false;
					GAMESCREEN = true;
					Level_2();
				}
				if (selected_level == 2) {
					LEVELSCREEN = false;
					GAMESCREEN = true;
					Level_3();
				}
				if (selected_level == 3) {
					LEVELSCREEN = false;
					GAMESCREEN = true;
					Level_4();
				}
				if (selected_level == 4) {
					LEVELSCREEN = false;
					GAMESCREEN = true;
					Level_5();
				}
			}
		}
	}
	if (GAMESCREEN) {
	
		// PLAYER MOVEMENTS & ACTIONS
		
		if (e.which == P1_ESC || e.keyCode == P1_ESC) {
			clearInterval(timer);
			GAMESCREEN = false;
			PAUSESCREEN = true;
			P1_LEFT_DOWN = false;
			P1_RIGHT_DOWN = false;
			P1_UP_DOWN = false;
			pauseScreen();
		}
		
		if (
			e.which == P1_LEFT ||
			e.keyCode == P1_LEFT ||
			e.which == P1_A ||
			e.keyCode == P1_A
		) {
			P1_LEFT_DOWN = true;
			P1_FACING = false;
		}
		if (
			e.which == P1_RIGHT ||
			e.keyCode == P1_RIGHT ||
			e.which == P1_D ||
			e.keyCode == P1_D
		) {
			P1_RIGHT_DOWN = true;
			P1_FACING = true;
		}
		
		if (
			e.which == P1_UP ||
			e.keyCode == P1_UP ||
			e.which == P1_W ||
			e.keyCode == P1_W
		) {
			if (!P1_UP_DOWN) {
				P1_JUMP = true; // ? 
				onSolid = false;
			}
			P1_UP_DOWN = true;
		}
	
	}
	
	if (PAUSESCREEN) {
	
		if (e.which == P1_BTN2 || e.keyCode == P1_BTN2) {
			PAUSESCREEN = false;
			LEVELSCREEN = true;
			music.pause();
			music = theme;
			music.currentTime = 0;
			if (mute == false) {
			music.play();
			}
			levelScreen();
		}
		if (e.which == P1_BTN1 || e.keyCode == P1_BTN1) {
			PAUSESCREEN = false;
			GAMESCREEN = true;
			timer = setInterval(function() {
		update();
		draw();
	}, (1000/FPS));
		}
	
	}
	
	if (VIDEO) {
		if (e.which == 83) {
			video.pause();
			video.style.visibility = "hidden";
			canvas.style.visibility = "visible";
			VIDEO = false;
			music.currentTime = 0;
			if (mute == false) {
				music.play();
				}
			STARTSCREEN = true;
			startScreen();
		}
	}
	
	if (e.which == idkfa[idkfa_prog]) {
		idkfa_prog++;
		if (idkfa_prog == 5) {
			lives = 99;
			notes = 99;
			cleared_levels = [0, 1, 2, 3, 4]
			if (LEVELSCREEN) {
				levelScreen();
			}
		}
	}
	else {
		idkfa_prog = 0;
	}
	if (e.which == iddqd[iddqd_prog]) {
		iddqd_prog++;
		if (iddqd_prog == 5) {
			if (!god_mode) {
				god_mode = true;
			}
			else {
				god_mode = false;
			}
		}
	}
	else {
		iddqd_prog = 0;
	}
		
};

//credits.addEventListener('timeupdate',function(){
//	
//	if (video.currentTime > 24.9) {
//		video.pause();
//		video.style.visibility = "hidden";
//		canvas.style.visibility = "visible";
//		VIDEO = false;
//		music.currentTime = 0;
//		if (mute == false) {
//		music.play();
//		}
//		STARTSCREEN = true;
//		startScreen();
//	}
//	
//	if (mute) {
//		video.volume = 0;
//	}
//	
//	if (!mute){
//		video.volume = 1;
//	}
//	
//});


// prologue.addEventListener('timeupdate',function(){
//	
//	if (video.currentTime  > 16.8) {
//		video.pause();
//		video.style.visibility = "hidden";
//		canvas.style.visibility = "visible";
//		VIDEO = false;
//		music.currentTime = 0;
//		if (mute == false) {
//		music.play();
//		}
//		STARTSCREEN = true;
//		startScreen();
//	}
//	
//	if (mute) {
//		video.volume = 0;
//	}
//	
//	if (!mute){
//		video.volume = 1;
//	}
//	
//});

function clearControls() {
	
	P1_LEFT_DOWN = false;
	P1_RIGHT_DOWN = false;
	P1_UP_DOWN = false;

}

document.onkeyup = function(e) {
	
	if (e.which == P1_MUTE) {
	    
	    P1_MUTE_DOWN = false;
	}

	if (GAMESCREEN) {
	
		// PLAYER MOVEMENTS & ACTIONS
		
		if (
			e.which == P1_LEFT ||
			e.keyCode == P1_LEFT ||
			e.which == P1_A ||
			e.keyCode == P1_A	
		) {
			e.preventDefault();
			P1_LEFT_DOWN = false;
		}
		if (
			e.which == P1_RIGHT ||
			e.keyCode == P1_RIGHT ||
			e.which == P1_D ||
			e.keyCode == P1_D
		) {
			e.preventDefault();
			P1_RIGHT_DOWN = false;
		}
		if (
			e.which == P1_UP ||
			e.keyCode == P1_UP ||
			e.which == P1_W ||
			e.keyCode == P1_W
		) {
			e.preventDefault();
			P1_UP_DOWN = false;
		}
		
	}
		
};

// MOUSE LISTENER
$("#canvas").mousedown(function(e){mouseDown(e);});

function mouseDown(e){

	if (GAMESCREEN && notes) {

	mouseX = e.offsetX;
    mouseY = e.offsetY;
	
	if (mouseX > WIDTH/2) {
		hand = true;
	}
	else {
		hand = false;
	}
	
	dx = WIDTH/2 - mouseX;
	dy = (player.y + 50) - mouseY;
	
	if (dx > 0) {
		negX = true;
	}
	else {
		negX = false;
	}
	if (dy > 0) {
		negY = true;
	}
	else {
		negY = false;
	}
	
	dx = Math.abs(dx);
	dy = Math.abs(dy);
	
	xspd = Math.sqrt( 50 / ( 1 + Math.pow((dy/dx), 2)));
	yspd = Math.sqrt( 50 / ( 1 + Math.pow((dx/dy), 2)));
	
	if (negX) {
		xspd *= -1;
	}
	if (negY) {
		yspd *= -1;
	}

	stones.push( new Stone(xspd,yspd,hand) );
	notes--;
	
	}
};
