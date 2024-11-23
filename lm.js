// COLLISION TEST

function collides(a, b) {
    return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}


// CLEAR FUNCTION

function clear() {

	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.rect(0, 0, WIDTH, HEIGHT);
	ctx.closePath();
	ctx.fill();
	
}

function drawHUD() {
	
	ctx.drawImage(img, player_x, player_y, 64, 64, WIDTH - 50, 10, 30, 30);
	if (selected_level > 2 && GAMESCREEN) {
		ctx.fillStyle = "white";
	}
	else {
		ctx.fillStyle = "black";
	}
	ctx.font = "15px Tahoma";
	ctx.fillText("x" + lives , WIDTH - 18, 25);
	ctx.drawImage(img, 0, 448, 50, 20, WIDTH - 40, 46, 15, 7);
	ctx.fillText("x" + notes , WIDTH - 18, 50);
	
	if (just_1up) {
		text_1up = 10;
		just_1up = false;
	}
	
	if (text_1up) {
		ctx.textAlign = "center";
		ctx.fillStyle = "green";
		ctx.fillText("1UP", WIDTH/2-20, player.y - 20);
		text_1up--;
	}
	
	if (!LEVELSCREEN) {
		filled = collected_stars;
		just_borders = 5 - filled;
		placing = WIDTH/2 - 72;
		
		while (filled) {
			filled--;
			ctx.drawImage(img, 64, 448, 25, 25, placing, 10, 25, 25);
			placing += 30;
		}
		while (just_borders) {
			just_borders--;
			ctx.drawImage(img, 89, 448, 25, 25, placing, 10, 25, 25);
			placing += 30;
		}
		if (god_mode && COUNTER % 20 > 10) {
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "green";
			ctx.fillText("GOD MODE", WIDTH/2, 50);
		}
	}
}



function levelWon() {
	
	GAMESCREEN = false;
	clearInterval(timer);
	cleared_levels.push( (selected_level + 1) );
	if (mute == false) {
		music.pause();
		winmusic.play();
	}
	
	setTimeout(function(){
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "black";
		ctx.font = "50px Tahoma";
		ctx.fillText("LEVEL", WIDTH/2, HEIGHT/2 - 50);
		},300);
	setTimeout(function(){
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "black";
		ctx.font = "50px Tahoma";
		ctx.fillText("CLEAR", WIDTH/2, HEIGHT/2);
		},600);
	
	music = theme;
	
	if (selected_level != 4) {
	setTimeout(function(){
		LEVELSCREEN = true;
		levelScreen();
		music.currentTime = 0;
		if (mute == false) {
		music.play();
		}
		},2450);
	}
	
	//else {
	//	setTimeout(function(){
	//		VIDEO = true;
	//		video = credits;
	//		video.style.visibility = "visible";
	//		video.currentTime = 0;
	//		canvas.style.visibility = "hidden";
	//		video.play();
	//	}, 2550);
	//}
	else {
		setTimeout(function(){
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "black";
			ctx.font = "50px Tahoma";
			ctx.fillText("LEVEL", WIDTH/2, HEIGHT/2 - 50);
			},300);
		setTimeout(function(){
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "black";
			ctx.font = "50px Tahoma";
			ctx.fillText("CLEAR", WIDTH/2, HEIGHT/2);
			},600);
	}
	
}

function doCollides() {
	
	if (collides(player, goal)) {
		levelWon();
	}
	
	bullets.forEach(function(bul) {
		if (collides(bul, player)) {
			if (!god_mode) {
				player.die();
			}
		}
	});
	
	items.forEach(function(ite) {
		if (collides(ite, player)) {
			ite.action();
			items.splice(items.indexOf(ite), 1);
		}
	});

	
	obsticles.forEach(function(obs) {
		if (collides(obs, player)) {
			if (obs.img_x == false) {
				player.x = obs.tele_x;
				player.y = obs.tele_y;
				if (selected_level == 3) {
					collected_stars++;
				}
				update();
			}
			
			
			if (player.vy < 0 && player.y < (obs.y - player.height - player.vy)) {
				player.y = obs.y - player.height;
				player.vy = -1;
				onSolid = true;
			}
			else if (player.vy > 0 && player.y > (obs.y - player.height - player.vy) && player.x + player.width > obs.x + 5 && player.x < obs.x + obs.width - 5) {
				player.vy = -1;
				player.y = obs.y + obs.height;
			}
			else {
				if (player.x < obs.x) {
					player.x = obs.x - player.width;
				}
				else {
					player.x = obs.x + obs.width;
				}
			}
		}
	});
	
	specials.forEach(function(obs) {
		if (collides(obs, player)) {
			
			if (player.vy < 0 && player.y < ((obs.y - player.height - player.vy)+2)) {
				player.y = obs.y - player.height;
				if (!obs.way) {
					player.y += 2;
				}
				player.vy = -2;
				onSolid = true;
			}
			else if (player.vy > 0 && player.y > (obs.y - player.height - player.vy) && player.x + player.width > obs.x + 5 && player.x < obs.x + obs.width - 5) {
				obs.way = true;
				player.vy = -1;
				player.y = obs.y + obs.height;
			}
			else if (player.y > (obs.y - player.height) && player.x + player.width > obs.x + 5 && player.x < obs.x + obs.width - 5) {
				obs.way = true;
				if (!god_mode) {
					player.die();
				}
			}
			else {
				if (player.x < obs.x) {
					player.x = obs.x - player.width;
				}
				else {
					player.x = obs.x + obs.width;
				}
			}
		}
	});
	
	
	baddies.forEach(function(bad) {
		if (collides(bad, player)) {
			if (player.vy < 0 && player.y < ((bad.y - player.height - player.vy)) && bad.id != 4 && bad.id != 6) {
				SCORE += bad.score;
				baddies.splice(baddies.indexOf(bad), 1);
				player_jump = true;
				doCollides();
			}
			else if (player.vy < 0 && player.y < ((bad.y - player.height - player.vy) + bad.vy ) && bad.id != 4 && bad.id != 6) {
				SCORE += bad.score;
				baddies.splice(baddies.indexOf(bad), 1);
				player_jump = true;
				doCollides();
			}
			else {
				if (!god_mode) {
					player.die();
				}
			}
		}
		stones.forEach(function(sto) {
			if (collides(bad, sto) && bad.id != 4) {
				bad.freeze = 60;
				stones.splice(stones.indexOf(sto), 1);
				
			}
		});
		obsticles.forEach(function(obs) {
		if (collides(obs, bad) && bad.id != 6) {
			if (bad.vy < 0 && bad.y < (obs.y - bad.height - bad.vy)) {
				bad.y = obs.y - bad.height;
				bad.vy = -1;
			}
			else if (bad.vy > 0 && bad.y > (obs.y - bad.height - bad.vy) && bad.x + bad.width > obs.x + 5 && bad.x < obs.x + obs.width - 5) {
				bad.vy = -1;
				bad.y = obs.y + obs.height;
			}
			else {
				if (bad.x < obs.x) {
					bad.x = obs.x - bad.width;
					bad.vx *= -1;
				}
				else {
					bad.x = obs.x + obs.width;
					bad.vx *= -1;
				}
			}
		}
		});
		
		specials.forEach(function(obs) {
		if (collides(obs, bad) && bad.id != 6) {
			if (bad.vy < 0 && bad.y < ((obs.y - bad.height - bad.vy)+2)) {
				bad.y = obs.y - bad.height;
				bad.vy = -1;
			}
			else if (bad.vy > 0 && bad.y > (obs.y - bad.height - bad.vy) && bad.x + bad.width > obs.x + 5 && bad.x < obs.x + obs.width - 5) {
				obs.way = true;
				bad.vy = -1;
				bad.y = obs.y + obs.height;
			}
			else if (bad.y > (obs.y - bad.height) && bad.x + bad.width > obs.x + 5 && bad.x < obs.x + obs.width - 5) {
				obs.way = true;
				obs.y -= 2;
			}

			else {
				if (bad.x < obs.x) {
					bad.x = obs.x - bad.width;
					bad.vx *= -1;
				}
				else {
					bad.x = obs.x + obs.width;
					bad.vx *= -1;
				}
			}
		}
		});
		baddies.forEach(function(ba2) {
			if (collides(bad, ba2) && bad != ba2 && bad.id != 6 && ba2.id != 6) {
				
				if (bad.id == 4 && ba2.id != 3) {
					ba2.vx = 0;
					ba2.y -= ba2.vy;
					ba2.vy = -1;
				}
				else if (bad.vy < 0 && bad.y < (ba2.y - bad.height - bad.vy) && bad.id != 3) {
					bad.y = ba2.y - bad.height;
					bad.vy = -1;
				}
				else if (bad.vy > 0 && bad.y > (ba2.y - bad.height - bad.vy) && bad.x + bad.width > ba2.x + 5 && bad.x < ba2.x + ba2.width - 5 && ba2.id != 4) {
					bad.vy = -1;
					bad.y = ba2.y + ba2.height;
				}
				
				else {
					bad.vx *= -1;
				}
			}
		});
	});
	if (player_jump) {
		player.vy = 10;
	}
}


function BridgeExplode() {
	
		GAMESCREEN = false;
		clearInterval(timer);
		if (mute == false) {
			music.pause();
		}
		setTimeout(function(){
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "black";
			ctx.font = "20px Tahoma";
			ctx.fillText("Oh, here's the bridge! The gig is just on the other side of it! I made it in time!", WIDTH/2, HEIGHT/2 - 200);
			},300);
		setTimeout(function(){
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "black";
			ctx.font = "20px Tahoma";
			ctx.fillText("Wait what!? Is that a dyna....", WIDTH/2, HEIGHT/2 - 170);
			},2500);
		
		setTimeout(function(){
			if (mute == false) {
				bomb.currentTime = 0;
				bomb.play();
			}
			exploded = true;
			ctx.drawImage(explo, 7040 - player.x + (WIDTH/2-32), HEIGHT - 375, 500, 250);
			},4000);
		
		setTimeout(function(){
			obsticles.splice(-7, 4);
			draw();
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "black";
			ctx.font = "20px Tahoma";
			ctx.fillText("Seems like I need to find another path...", WIDTH/2, HEIGHT/2 - 170);
			},7000);
		
		cleared_levels.push( (selected_level + 1) );
		setTimeout(function() {
		if (mute == false) {
			winmusic.play();
		}
		}, 9000);
		
		setTimeout(function(){
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "black";
			ctx.font = "50px Tahoma";
			ctx.fillText("LEVEL", WIDTH/2, HEIGHT/2 - 50);
			},9300);
		setTimeout(function(){
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "black";
			ctx.font = "50px Tahoma";
			ctx.fillText("CLEAR", WIDTH/2, HEIGHT/2);
			},9600);
		
		music = theme;
		
		setTimeout(function(){
			LEVELSCREEN = true;
			levelScreen();
			music.currentTime = 0;
			if (mute == false) {
				music.play();
			}
			},11450);
	
}

function update() {
	
	COUNTER++;
	
	// ADD BADDIES ACCORDING TO PLAYER POSITION
	
	map_baddies.forEach(function(map) {
		if (player.x >= (map.x - (WIDTH/2 + 100))) {
			baddies.push(map);
			map_baddies.splice(map_baddies.indexOf(map), 1);
		}
	});
	
	
	// PLAYER
	
	if (player.vy) {
		player.y -= player.vy;
	}
	
	player.vy--;


	
	baddies.forEach(function(bad) {
		
		if (bad.freeze) {
			bad.freeze--;
		}
		
		if (bad.y > HEIGHT) {
			baddies.splice(baddies.indexOf(bad), 1);
		}
		
		if (bad.x < (player.x - WIDTH/2) && bad.id == 6) {
			baddies.splice(baddies.indexOf(bad), 1);
		}
		
		if (bad.vy && !bad.freeze) {
			bad.y -= bad.vy;
		}
		if (bad.y < HEIGHT - bad.height && bad.id != 6 && !bad.freeze) {
			bad.vy--;
		}
		
	});
	
	specials.forEach(function(spe) {
		spe.special();
	});
	
	player_jump = false;
	onSolid = false;
	doCollides();
	if (player.y + player.height > HEIGHT) {
		
		if (god_mode) {
			player.y = HEIGHT - player.height;
			onSolid = true;
		}
		else {
			player.die();
		}
		
	}
	
	
	if (onSolid && P1_JUMP) {
		player.vy = 15;
	}
	P1_JUMP = false;
	
	if (selected_level == 2 && player.x >= 7000) {
		BridgeExplode();
	}

	if (P1_LEFT_DOWN) {
		player.x -= 5;
		if (!P1_RIGHT_DOWN) {
			P1_FACING = false;
		}
	}
	if (P1_RIGHT_DOWN) {
		player.x += 5;
		if (!P1_LEFT_DOWN) {
			P1_FACING = true;
		}
	}
	

	
	baddies.forEach(function(bad) {
		if (bad.countdown < 0 && !(bad.freeze)) {
			bad.x += bad.vx;
		}
		
		
		if (bad.id == 2 && !bad.freeze) {
			
			if (COUNTER - bad.cooldown == 6) {
				bad.img_x = bad.img_x1;
			}
			
			if (bad.countdown > 0) {
				bad.countdown--;
			}
			
			else if (bad.countdown == 0) {
				bad.attack();
				bad.countdown--;
			}
			else if (COUNTER % 30 == 0 && Math.random() > 0.75) {
				bad.countdown = 12;
			}
		}
		if (bad.id == 3 && !bad.freeze) {
			if (bad.y < HEIGHT) {
				bad.vy--;
				if (bad.y + bad.height > HEIGHT && bad.vy < -2) {
					bad.vy = -1;
				}
				
			}
			
			else {
				if (bad.y > HEIGHT) {
					bad.y = HEIGHT;
				}
				if (COUNTER % 10 == 0 && Math.random() > 0.9) {
					bad.vy = 33;
					bad.y -= bad.vy;
				}
			}
		}
		if (bad.id == 4 && COUNTER % 10 == 0) {
			if (bad.img_y == bad.img_y1) {
				bad.img_y = bad.img_y2;
			}
			else {
				bad.img_y = bad.img_y1;
			}
		}
		if (bad.id == 5 && !bad.freeze) {
			if (bad.y < HEIGHT - bad.height) {
				bad.vy--;
				if (bad.img_y == bad.img_y2) {
					bad.img_y = bad.img_y3;
				}
				else if (bad.img_y == bad.img_y3) {
					bad.img_y = bad.img_y2;
				}
				if (bad.vy == -2) {
					bad.img_y = bad.img_y1;
					if (COUNTER % 10 == 0 && Math.random() > 0.9) {
						bad.vy = 30;
						bad.img_y = bad.img_y2;
					}
				}
			}
			else {
				bad.img_y = bad.img_y1;
				
				if (COUNTER % 10 == 0 && Math.random() > 0.9) {
					bad.vy = 30;
					bad.img_y = bad.img_y2;
				}
			}
		}
		
		if (bad.id == 6 && COUNTER % 45 == 0) {
			bad.vy *= -1;
		}
		
		
		if ((bad.id == 2 && COUNTER % 30 == 0 && Math.random() > 0.6) || (bad.id == 5 && COUNTER % 30 == 15 && Math.random() > 0.6)) {
			if (bad.x > player.x && bad.vx > 0) {
				bad.vx *= -1;
			}
			else if (bad.x < player.x && bad.vx < 0) {
				bad.vx *= -1;
			}
		}
		
	});
	
	bullets.forEach(function(bul) {
		bul.x += bul.vx;
		
		if (bul.x > (player.x + WIDTH/2) || bul.x < (player.x - WIDTH/2)) {
			bullets.splice(bullets.indexOf(bul), 1);
		}
	});
	stones.forEach(function(sto) {
		sto.x += sto.vx;
		sto.y -= sto.vy;
		if (sto.x > (player.x + WIDTH/2) || sto.x < (player.x - WIDTH/2)) {
			stones.splice(stones.indexOf(sto), 1);
		}
	});
	
	
		
	
	if (COUNTER % 30 == 0) {
		
		
		if (goal.img_x == goal.img_x1) {
			goal.img_x = goal.img_x2;
		}
		else {
			goal.img_x = goal.img_x1;
		}

	}
	
}

function draw() {
	
	clear();
	
	ctx.drawImage(bground, ((Math.floor(player.x / 1600) * 1600)) - player.x, 0);
	ctx.drawImage(bground, ((Math.floor(player.x / 1600) * 1600) + 1600) - player.x, 0);
	
	obsticles.forEach(function(obs) {
		obs.draw();
	});
	
	goal.draw();
	
	items.forEach(function(ite) {
		ite.draw();
	});
	
	baddies.forEach(function(bad) {
		bad.draw();
	});
	
	bullets.forEach(function(bul) {
		bul.draw();
	});
	
	stones.forEach(function(sto) {
		sto.draw();
	});
	
	specials.forEach(function(spe) {
		spe.draw();
	}); 
	
	player.draw();
	
	images.forEach(function(ima) {
		ima.draw();
	});

	if (selected_level == 2 && exploded == false) {
		ctx.drawImage(dyna, 7252 - player.x + (WIDTH/2-32), HEIGHT - 272, 50, 25);
	};
	
	drawHUD();
	
}

background1.onload = function() {
	video.style.visibility = "visible";
	video.play();
};