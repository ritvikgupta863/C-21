
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  Bugatti = createSprite(100,200,20,20)
  Bugatti.shapeColor = "red";
  Bugatti.velocityX=2

  Wall = createSprite(400,200,10,100);
  Wall.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(Bugatti,Wall)){
    Bugatti.shapeColor = "yellow";
    Wall.shpeColor = "red"
  }
  
  if(isTouching(movingRect,fixedRect)){

  movingRect.shapeColor = "orange";
  fixedRect.shapeColor = "purple"
  }

 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){ 
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


