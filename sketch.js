const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

var ball_options2 = {
  restitution : 1.0

}
  var retangulo_options = {
restitution:0.1,
friction:0.01

  }

  var ground_options = {
    
    isStatic : true
  }

  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball_2 = Bodies.circle(200,10,20,ball_options2)
  World.add(world,ball_2);

 retangulo = Bodies. rectangle(350,50,50,50,retangulo_options)
World.add(world,retangulo)

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
  
 ellipse(ball_2.position.x,ball_2.position.y,20);

 rect(retangulo.position.x,retangulo.position.y,50,50)
 rect(ground.position.x,ground.position.y,450,20)
}

