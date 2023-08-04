//pegar as coisas da biblioteca da fisica
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//nossa fisica 
let engine;
let world;


var ball;
var ground;

//paredes
var parede1;
var parede2;
var parede3;

var wedge;
var angle=60;
var poly;

//criar uma pedra
var rock;

function setup() {
  
  createCanvas(400,400);
  //colocando o motor no nosso mundo
  engine = Engine.create();
  world = engine.world;



  var ball_options = {
    //elasticidade (o quao pulante é um objeto)
    restitution : 0.95,
    //atrito com o ar
    frictionAir : 0.01
  }



  var ground_options = {
    //estatico = parado
    isStatic : true
  }

  var rock_options = {
    frictionAir : 0.05
  }

  //criações dos corpos

  //paredes
  parede1 = new Paredes(200,10,400,20); //topo
  
  parede2 = new Paredes(390,200,20,400); //direita

  parede3 = new Paredes(10,200,20,400); //esquerda

  ball = Bodies.circle(100,10,20, ball_options);
  World.add(world,ball);

  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world, ground);


  rock = Bodies.circle(200,10,20, rock_options);
  World.add(world,rock);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 parede1.show();
 parede2.show();
 parede3.show();

 ellipse(ball.position.x,ball.position.y,20);

 ellipse(rock.position.x,rock.position.y,20);

 rect(ground.position.x,ground.position.y,400,20);
  
}

