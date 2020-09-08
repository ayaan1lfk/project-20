var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);  
  wall.shapeColor = "grey";
  car.velocityX = speed;
  0.5*weight*speed*speed/22500;
  car.shapeColor = "red";
  if(car.x > 1500){
    car.shapeColor = "yellow";
  }
  if(car.x < 1500){
    car.shapeColor = "green";
  }
  drawSprites();
}