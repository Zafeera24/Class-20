var rect1, rect2;


function setup() {
  createCanvas(800,400);
 rect1 = createSprite(400, 200, 50, 80);
 rect1.shapeColor = "blue";
 
 rect2 = createSprite(400, 300, 80, 50);
 rect2.shapeColor = "red";
 

}

function draw() {
  background("black");  
  
  rect1.debug = true;

  rect2.debug = true;
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

  // rect2.x - rect1.x = rect1.width/2 + rect2.width/2
  //                   = 50/2 + 50/2
  //                   = 25 + 25
  //                   = 50

  console.log (rect2.x - rect1.x);

  if(rect2.x - rect1.x < rect1.width/2 + rect2.width/2 
    && rect1.x - rect2.x < rect1.width/2 + rect2.width/2
    && rect2.y - rect1.y < rect1.height/2 + rect2.height/2
    && rect1.y - rect2.y < rect1.height/2 + rect2.height/2 ){
  rect1.shapeColor = "purple";
  rect2.shapeColor = "purple";
  }else{
  rect1.shapeColor = "blue";
  rect2.shapeColor = "red";
  }



  drawSprites();
}