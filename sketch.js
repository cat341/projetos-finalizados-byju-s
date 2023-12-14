var ship,shipSwiming;
function preload(){
  addImage("ship-1.png,ship-2.png");
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  ship = createSprite(20,170,20,35);
  ship.addAnimation("ship-1.png", "ship-2.png")
  drawSprites();
}
