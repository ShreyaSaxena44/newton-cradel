
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1;

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;
bob1=new bob(720,600,40)
	roof1=new roof(800,175,225,20)
rope1= new rope(bob1.body,roof1.body,-80,0)
bob2=new bob(760,600,40)
rope2= new rope(bob2.body,roof1.body,-40,0)
bob3=new bob(800,600,40)
rope3= new rope(bob3.body,roof1.body,-0,0)
bob4=new bob(840,600,40)
rope4= new rope(bob4.body,roof1.body, 40,0)
bob5=new bob(880,600,40)
rope5= new rope(bob5.body,roof1.body,80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display()
  roof1.display()
 rope1.display()
 bob2.display()
 rope2.display()
 rope3.display()
 bob3.display()
 bob4.display()
 rope4.display()
 rope5.display()
 bob5.display()
 
}



