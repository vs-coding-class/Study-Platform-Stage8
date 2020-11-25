const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;

var hexagon;

var checkerObj,checking,conversion;
var bigNumber,firstNumber,secondNumber;

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
	  
	hexagon = new Hexagon();
}

function draw() {
	background(backgroundImg);
  	Engine.update(engine);

  	checkerObj.display();

	hexagon.display();
	/*if(hexagon.body.position.y>displayHeight){
		hexagon.body.position.y = 50
	}*/
}