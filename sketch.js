
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof();
	bob1 = new Bob(300,500);
	bob2 = new Bob(365,500);
	bob3 = new Bob(430,500);
	bob4 = new Bob(495,500);
	bob5 = new Bob(560,500);
	bob6 = new Bob(625,500);
	bob7 = new Bob(690,500);

	chain1 = new Chain(bob1.body,roof1.body,0,0);
	chain2 = new Chain(bob2.body,roof1.body,65,0);
	chain3 = new Chain(bob3.body,roof1.body,130,0);
	chain4 = new Chain(bob4.body,roof1.body,195,0);
	chain5 = new Chain(bob5.body,roof1.body,260,0);
	chain6 = new Chain(bob6.body,roof1.body,325,0);
	chain7 = new Chain(bob7.body,roof1.body,390,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
  
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  chain7.display();
  
  drawSprites();
 
}



