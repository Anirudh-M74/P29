const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1= new Ground(200,200,150,20)
    
    box1=new Box(210,190,20,20)
    box2= new Box(220,190,20,20)
    box3= new Box(215,180,20,20)
    p1=new Polygon(500, 190, 20,20)

Engine.run(engine)

}
function draw(){
    background(0)
    ground1.display()
    box1.display()
    box2.display()
    box3.display()
    p1.display()
   
}