const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  bgImage = loadImage("GamingBackground.png");
  /*monster1Image = loadImage("Monster-01.png");
  monster2Image = loadImage("Monster-02.png");
  superhero1Image = loadImage("Superhero-01.png");
  superhero2Image = loadImage("Superhero-02.png");*/
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  groundObject = new Ground(750, 600, 2000, 20);
  heroObject = new Hero(400, 400);
  //the constraint is between a body and a point so you need to write heroObject.body
  flyObject = new Fly(heroObject.body, {x:750, y:50});
}

function draw() {
  background(bgImage);
  Engine.update(engine);

  groundObject.display();
  heroObject.display();
  flyObject.display();

}

