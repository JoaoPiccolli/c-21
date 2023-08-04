//pegar as coisas da biblioteca da fisica
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//nossa fisica 
let engine; //motor
//nosso mundo
let world;

//dois corpos
var ball;
var ground;

var wedge;
var angle=60;
var poly;


function setup() {
  
  //tela
  createCanvas(400,400);
  
  //criar fisica para o nosso mundo
  engine = Engine.create();
  world = engine.world;
  
  //fazer o corpo da bola
 
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 
  background (51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);


}

