
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(200,460,40);

	dustbin=new Dustbin(1200,100,150,150);


	Engine.run(engine);
	ground = new Ground(600,height,1200,20);
	
  
}
function keyPressed(){
      if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-30});
	  }

}

function draw() {
  rectMode(CENTER);
  background("white");
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}



