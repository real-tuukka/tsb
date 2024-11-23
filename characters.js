// #### CHARACTERS ####

function Player() {
	
	this.width = 30;
	this.height = 64;
	
	this.img_x = 0;
	this.dead = false;
	
	this.die = function() {
		
		if (!player.dead) {
		
			player.img_x = 64;
		
			if (mute == false) {
				music.pause();
				music = losemusic;
				music.currenttime = 0;
				music.play();
			}
		
			setTimeout(function(){
		
				player.img_x = 128;
		
			},50);
		
			if (lives > 1) {
		
				setTimeout(function(){
		
					clearInterval(timer);
					lives--;
					music.pause();
					music = theme;
					LEVELSCREEN = true;
					levelScreen();
					music.currentTime = 0;
					if (mute == false) {
						//music.play();
					}
		
				},2300);
			
			}
			
			else {
				
				setTimeout(function(){
		
					clearInterval(timer);
					lives--;
					music.pause();
					GAMEOVERSCREEN = true;
					gameOverScreen();
		
				},2300);
			
			}
			
			clearControls();
			GAMESCREEN = false;
			player.dead = true;
		}
		
	}
	
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, player_y, 64, 64, (WIDTH/2 - 48), this.y, 64, 64);
	}
};


function Avatar(x, y) {
	
	this.width = 48;
	this.height = 48;
	this.x = x;
	this.y = y;
	
	this.draw = function() {
		ctx.drawImage(img, player_x, player_y, 64, 64, this.x, this.y, 48, 48);
	}
}

// #### BADDIES ####

// REGULAR SHARK

function Shark(x,y) {
	
	this.id = 1;
	this.countdown = -1;
	
	this.score = 100;
	
	this.width = 56;
	this.height = 64;
	
	this.x = x;
	if (y == 0) {
		this.y = (HEIGHT - this.height);
	}
	else if (y < 0) {
		this.y = (HEIGHT - this.height - (y * -64));
	}
	else {
		this.y = y;
	}
	this.img_x = 0;
	this.img_y = 192;
	this.img_w = 64;
	this.img_h = 64;
	
	this.vx = -5;
	this.vy = 0;
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

// KNIFE-THROWING SHARK

function KnifeShark(x,y) {
	
	this.id = 2;
	
	this.countdown = -1;
	this.cooldown = 0;
	
	this.score = 200;
	
	this.width = 56;
	this.height = 64;
	
	this.x = x;
	if (y == 0) {
		this.y = (HEIGHT - this.height);
	}
	else if (y < 0) {
		this.y = (HEIGHT - this.height - (y * -64));
	}
	else {
		this.y = y;
	}
	this.img_x = 64;
	this.img_y = 192;
	this.img_w = 64;
	this.img_h = 64;
	
	this.img_x1 = 64;
	this.img_x2 = 192;
	this.img_x3 = 256;
	
	this.vx = -5;
	this.vy = 0;
	
	this.attack = function() {
		
		if (this.vx > 0) {
			this.img_x = this.img_x3;
		}
		else {
			this.img_x = this.img_x2;
		}
		
		bullets.push( new Knife(this.x, (this.y + this.height/2), (this.vx / Math.abs(this.vx)) * 7 ));
		this.cooldown = COUNTER;
		
	}
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
	
	
};

// SHARK IN THE WATER

function WaterShark(x) {
	
	this.id = 3;
	this.countdown = -1;
	
	this.score = 300;
	
	this.width = 47;
	this.height = 64;
	
	this.x = x;
	
	this.y = HEIGHT;
	
	this.img_x = 448;
	this.img_y = 192;
	this.img_w = 64;
	this.img_h = 64;
	
	this.vx = 0;
	this.vy = 0;
	
	this.draw = function() {
		
		if (this.vy > 0) {
			this.img_x = 448;
		}
		else {
			this.img_x = 384;
		}
		
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
		
	}
};


// JUMPING SHARK

function JumpyShark(x, y) {
	
	this.id = 5;
	this.countdown = -1;
	
	this.score = 300;
	
	this.width = 56;
	this.height = 64;
	
	this.x = x;
	
	if (y == 0) {
		this.y = HEIGHT - this.height;
	}
	else if (y < 0) {
		this.y = (HEIGHT - this.height - (y * -64));
	}
	else {
		this.y = y;
	}
	
	this.img_x = 320;
	this.img_y = 192;
	this.img_w = 64;
	this.img_h = 64;
	
	this.img_y1 = 192;
	this.img_y2 = 128;
	this.img_y3 = 64;
	
	this.vx = -5;
	this.vy = 0;
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

// WATER

function Water(x) {
	
	this.id = 4;
	this.countdown = -1;
	
	this.width = 128;
	this.height = 32;
	
	this.x = x;
	
	this.y = HEIGHT - this.height;
	
	this.img_x = 384;
	this.img_y1 = 428;
	this.img_y2 = 492;
	this.img_y = this.img_y1;
	this.img_w = 128;
	this.img_h = 20;
	
	this.vx = 0;
	this.vy = 0;
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

function GhostShark(x,y, vx, vy) {
	
	this.id = 6;
	this.countdown = -1;
	
	this.width = 42;
	this.height = 64;
	
	this.x = x;
	if (y == 0) {
		this.y = (HEIGHT - this.height);
	}
	else if (y < 0) {
		this.y = (HEIGHT - this.height - (y * -64));
	}
	else {
		this.y = y;
	}
	
	this.img_x = 448;
	this.img_y = 128;
	this.img_w = 64;
	this.img_h = 64;
	
	this.vx = vx;
	this.vy = vy;
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};