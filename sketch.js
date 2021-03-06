const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
//Create multiple bobs, mulitple ropes varible here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	ball_options={
     isStatic:true
     
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball1 = Bodies.circle(500,350,10,ball_options);
     World.add(world,ball1);

	ball2 = Bodies.circle(450,350,10,ball_options);
	 World.add(world,ball1);

	ball3 = Bodies.circle(400,350,10,ball_options);
	World.add(world,ball1);

	ball4 = Bodies.circle(350,350,10,ball_options);
    World.add(world,ball1);

    ball5 = Bodies.circle(300,350,10,ball_options);
    
    rope1=new rope(ball1,roof,500,100)
	rope2=new rope(ball2,roof,450,100)
	rope3=new rope(ball3,roof,400,100)
	rope4=new rope(ball4,roof,350,100)
	rope5=new rope(ball5,roof,300,100)

	
	World.add(world,ball1);

	Engine.run(engine);	
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
   rope1.display()
   rope2.display()
   rope3.display()
   rope4.display()
   rope5.display()
   
  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,50);
  ellipse(ball2.position.x,ball1.position.y,50);
  ellipse(ball3.position.x,ball1.position.y,50);
  ellipse(ball4.position.x,ball1.position.y,50);
  ellipse(ball5.position.x,ball1.position.y,50);

   keyPressed()
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
	

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball1,{x:50,y:5},{x:55,y:0.55});
    }
}	