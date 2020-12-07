
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, stand1, stand2, ball1, launcher;
var box1, box2, box3, box4, box5, box6,box7, box8, box9, box10, box11, box12, box13, box14, box15;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stand1 = new Stand(200,400);
	stand2 = new Stand(500,500);
	ball1 = new Ball(100,350);
	launcher = new Connect(ball1.body,{x:100,y:350});

	box1 = new Box(300,430);
	box2 = new Box(340,430);
	box3 = new Box(380,430);
	box4 = new Box(420,430);
	box5 = new Box(320,480);
	box6 = new Box(360,480);
	box7 = new Box(400,480);
	box8 = new Box(340,530);
	box9 = new Box(380,530);
	box10 = new Box(360,580);
	box11 = new Box(650,530);
	box12 = new Box(690,530);
	box13 = new Box(730,530);
	box14 = new Box(670,580);
	box15 = new Box(710,580);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

 
  stand1.display();
  stand2.display();
  ball1.display();
 
  launcher.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();


  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(ball1.body, {x:100, y:350})
		
	}


}




function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
launcher.fly();
}


