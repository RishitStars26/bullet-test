var  bullet,wall;
var speed,wieght,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321)
  wieght = random(30,52)
  thickness = random(22,83)
  //car
  bullet = createSprite(50,200,50,5)
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  //wall
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = (80,80,80);
}

function draw() {
  background("Black");  

//coision and color change
if(hasCollided(bullet, wall)){
  bullet.velocityX = 0;
  var damage = 0.5 *wieght * speed * speed/(thickness*thickness*thickness)

  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage < 10){
    wall.shapeColor = color(0,255,0);
  }
}

drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}