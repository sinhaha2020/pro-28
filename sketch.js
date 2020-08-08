const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyimg;
var ground;
var tree;
var stone;

function preload()
{
	boyimg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(400,700,1600,5);

	boy = new Ground(200,690,20,30);
	
	tree = new Tree(760,690,10,10);
	
	stone = new Stone(200,690,10,10);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  ground.display();
  boy.display();
  tree.display();
  stone.display();
  
  drawSprites();
 
}



