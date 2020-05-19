const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground1;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(200,100,50,100);
    box3 = new Box(350,250,50,50);
    ground1 = new Ground(300,590,600,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground1.display();
   
}