const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, tree
var engine
var world

function preload(){
}

function setup() {
	createCanvas(800, 700);

	 engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,840,30)
	tree = new Tree(400,200,200)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0, 212, 255); 
  drawSprites();
  ground.display();
  tree.display();
}