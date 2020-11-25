const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;

var Dustbin,paperObj;

var checkerObj,checking,conversion;
var bigNumber,firstNumber,secondNumber;

var chooserObject;
var gameState = "choosing";

var database,topNumber=0,bottomNumber=0;

function preload(){
	backgroundImg = loadImage("background.jpg");
}

function setup(){
  	createCanvas(displayWidth,displayHeight);
 	engine = Engine.create();
	world = engine.world;
	  
	database = firebase.database();

	checkerObj = new Checker();

	chooserObject = new Chooser();

  	Dustbin = new dustbin(800,700);
	paperObj = new paperBall();
}

function draw() {
	background(backgroundImg);
  	Engine.update(engine);

	  checkerObj.display();
	  
	  chooserObject.display();

  	Dustbin.display();
	paperObj.display();

	if(gameState === "choosing"){
		checkerObj.hiding();
	}
	else{
		checkerObj.showing();
	}
}