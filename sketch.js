
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	platform = new Roof(width/2,height/4,width/7,20);
    bobObj1 = new Bob(50,140,70);
	bobObj2 = new Bob(70,140,70);
	bobObj3 = new Bob(90,140,70);
	bobObj4 = new Bob(110,140,70);
	bobObj5 = new Bob(130,140,70);
	rope1=new Rope(bobObj1.Body,platform.Body,-bobDiameter*2,0)
	rope2=new Rope(bobObj2.Body,platform.Body,-bobDiameter*2,0)
	rope3=new Rope(bobObj3.Body,platform.Body,-bobDiameter*2,0)
	rope4=new Rope(bobObj4.Body,platform.Body,-bobDiameter*2,0)
	rope5=new Rope(bobObj5.Body,platform.Body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 platform.display()
 bobObj1.display()
 bobObj2.display()
 bobObj3.display()
 bobObj4.display()
 bobObj5.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
}



