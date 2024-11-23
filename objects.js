// #### OBSTACLES ####

function Obsticle(x, y, width, height, img_x, img_y, img_w, img_h) {
	
	this.x = x;
	if (y == 0) {
		this.y = (HEIGHT - height);
	}
	else if (y < 0) {
		this.y = (HEIGHT - height - (y * -64));
	}
	else {
		this.y = y;
	}
	this.width = width;
	this.height = height;
	this.img_x = img_x;
	this.img_y = img_y;
	this.img_w = img_w;
	this.img_h = img_h;
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

// TELEPORT
function Teleport(x, y, width, height, tele_x, tele_y) {
	
	this.x = x;
	if (y == 0) {
		this.y = (HEIGHT - height);
	}
	else if (y < 0) {
		this.y = (HEIGHT - height - (y * -64));
	}
	else {
		this.y = y;
	}
	this.width = width;
	this.height = height;
	this.img_x = false;
	
	this.tele_x = tele_x;
	this.tele_y = tele_y;
	
	this.draw = function() {}
	
};

// SPECIAL OBJECTS

function Special(x, y, width, height, img_x, img_y, img_w, img_h) {
	
	this.x = x;
	if (y == 0) {
		this.y = (HEIGHT - height);
	}
	else if (y < 0) {
		this.y = (HEIGHT - height - (y * -64));
	}
	else {
		this.y = y;
	}
	
	this.real_y = this.y;
	
	this.width = width;
	this.height = height;
	this.img_x = img_x;
	this.img_y = img_y;
	this.img_w = img_w;
	this.img_h = img_h;
	
	this.special = function() {
		if (P1_FACING) {
			this.y = HEIGHT + 1;
		}
		else {
			this.y = this.real_y;
		}
	}
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

function Elevator(x, y, width, height, img_x, img_y, img_w, img_h, min_y) {
	
	this.x = x;
	if (y == 0) {
		this.y = (HEIGHT - height);
	}
	else if (y < 0) {
		this.y = (HEIGHT - height - (y * -64));
	}
	else {
		this.y = y;
	}

	if (min_y == 0) {
		this.min_y = (HEIGHT - height);
	}
	else if (min_y < 0) {
		this.min_y = (HEIGHT - height - (min_y * -64));
	}
	else {
		this.min_y = min_y;
	}
	
	this.max_y = this.y;
	
	this.width = width;
	this.height = height;
	this.img_x = img_x;
	this.img_y = img_y;
	this.img_w = img_w;
	this.img_h = img_h;
	
	this.way = false;
	
	this.special = function() {
		if (this.way) {
			this.y -= 2;
			if (this.y <= this.max_y) {
				this.way = false;
			}
		}
		else {
			this.y += 2;
			if (this.y >= this.min_y) {
				this.way = true;
			}
		}
	}
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

// ITEMS

function Note(x, y) {
	
	this.x = x;

	this.width = 25;
	this.height = 25;
	
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
	this.img_y = 448;
	this.img_w = 20;
	this.img_h = 20;
	
	this.action = function() {
		notes++;
	}
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

function LevelUp(x, y) {
	
	this.x = x;

	this.width = 25;
	this.height = 25;
	
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
	this.img_y = 468;
	this.img_w = 25;
	this.img_h = 25;
	
	this.action = function() {
		lives++;
		just_1up = true;
	}
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

function Star(x, y) {
	
	this.x = x;
	
	this.width = 25;
	this.height = 25;
	
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
	this.img_y = 448;
	this.img_w = 25;
	this.img_h = 25;
	
	this.action = function() {
		SCORE += 100;
		collected_stars++;
		if (collected_stars == 5) {
			lives++;
			just_1up = true;
		}
	}
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

// LEVEL GOAL

function Goal(x, y) {
	
	this.width = 384;
	this.height = 256;
	
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
	
	this.img_x1 = 0;
	this.img_x2 = 192;
	
	this.img_x = this.img_x1;
	this.img_y = 321;
	this.img_w = 192;
	this.img_h = 127;
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

// BULLETS

function Knife(x, y, vx) {
	
	this.width = 40;
	this.height = 25;
	
	this.x = x;
	this.y = y;
	this.vx = vx; 
	this.vy = 0;
	
	this.img_x = 384;
	if (this.vx < 0) {
		this.img_x += 64;
	}
	this.img_y = 320;
	this.img_w = 64;
	this.img_h = 64;
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, this.width, this.height);
	}
};

// STONES

function Stone(vx, vy, hand) {
	
	this.width = 25;
	this.height = 25;
	
	if (hand) {
		this.x = player.x + player.width;
	}
	else {
		this.x = player.x;
	}
	this.y = player.y + 20;
	this.vx = vx; 
	this.vy = -vy;
	
	this.img_x = 0;
	if (Math.random() > 0.75) {
		this.img_x = 25;
	}
	this.img_y = 449;
	this.img_w = 25;
	this.img_h = 19;
	
	this.draw = function() {
		ctx.drawImage(img, this.img_x, this.img_y, this.img_w, this.img_h, this.x - player.x + (WIDTH/2-32), this.y, 25, 20);
	}
	
};