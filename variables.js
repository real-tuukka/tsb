// TERROR SHARK BROS
// 
// Â© Tuukka Saarikoski & Jesse Rantala


// LOADING SPRITESHEET

img = new Image();
img.src = "img/spritesheet.png";

// LOADING MAP
maplevel1 = new Image();
maplevel1.src = "img/maplevel1.png";

maplevel2 = new Image();
maplevel2.src = "img/maplevel2.png";

maplevel3 = new Image();
maplevel3.src = "img/maplevel3.png";

maplevel4 = new Image();
maplevel4.src = "img/maplevel4.png";

maplevel5 = new Image();
maplevel5.src = "img/maplevel5.png";

//LOADING BACKGROUND
background1 = new Image();
background1.src = "img/yotausta.png";

background2 = new Image();
background2.src = "img/paivatausta.png";

//LOADING OTHER PICS
explo = new Image();
explo.src = "img/explo2.png";

dyna = new Image();
dyna.src = "img/dynamite.png";

// SOME GAME MECHANISM VARIABLES

var FPS = 30; 
var mute = false;

var WIDTH = 800;
var HEIGHT = 600;

// CONTROLS

var P1_LEFT = "37"; // LEFT ARROW
var P1_RIGHT = "39"; // RIGHT ARROW
var P1_UP = "38"; // UP ARROW
var P1_W = "87"; // W
var P1_A = "65"; // A
var P1_D = "68"; // D
var P1_BTN1 = "90"; // Z
var P1_BTN2 = "88"; // X
var P1_BTN3 = "67"; // C
var P1_ESC = "27"; // ESC
var P1_MUTE = "77"; // M


// LOADING MUSIC AND SOUNDEFFECTS

var theme = document.getElementById("music");
var music = theme;
//var winmusic = document.getElementById("winmusic");
var winmusic = theme;

var losemusic = document.getElementById("losemusic");

var bomb = document.getElementById("bomb");

var terror16 = document.getElementById("above16");
	
var pawns16 = document.getElementById("pawns16");

var name16 = document.getElementById("name16");

//var burn16 = document.getElementById("burn16");


// LOADING VIDEOS

//var credits = document.getElementById("end");
//var prologue = document.getElementById("start");
//var video = prologue;


// UNIVERSAL VARIABLES


var STARTSCREEN = true;
var SETUPSCREEN = false;
var LEVELSCREEN = false;
var PAUSESCREEN = false;
var GAMESCREEN = false;
var HELPSCREEN = false;
var GAMEOVERSCREEN = false;
var VIDEO = false;

var P1_LEFT_DOWN = false;
var P1_RIGHT_DOWN = false;
var P1_UP_DOWN = false;
var P1_FACING = true;
var P1_MUTE_DOWN = false;

var P1_JUMP = false;

var COUNTER = 0;

cleared_levels = [0];
selected_level = 0;
SCORE = 0;
lives = 5;
notes = 5;
idkfa_prog = 0;
idkfa = ["73", "68", "75", "70", "65"];
iddqd_prog = 0;
iddqd = ["73", "68", "68", "81", "68"];
god_mode = false;
just_1up = false;
text_1up = 0;

// PLAYER

var player_x = 0;
var player_y = 0;


// SETTING UP CANVAS

var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");

canvas.width = WIDTH;
canvas.height = HEIGHT;