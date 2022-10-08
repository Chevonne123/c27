
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
rope1 = new rope(bobObject1.body, roofObject.body, = bobDiametre*2,0)

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bob = create(bobObject1, bobObject2, bobObject3, bobObject4, bobObject5);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
constructer(body1, body2, offsetX, offsetY);
[
	this.offsetX = offsetX
	this.offsetY = offsetY
	var options=(
		bodyA : body1
		bodyB : body2
		pointB:{x:this.offsetX, y:this.offsetY}
	)
]
 this.rope = Constraint.create(options);
 World.add(world,this.rope);


