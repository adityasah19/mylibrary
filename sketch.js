function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  fixrect.shapeColor='green'
  moverect=createSprite(200,200,70,40);
  moverect.shapeColor='blue'
  ball1=createSprite(100,100,58,52)
  ball2=createSprite(200,100,58,52)


}

function draw() {
  background(255,255,255);  
  moverect.x=mouseX
  moverect.y=mouseY
  if(istouching(ball2,moverect)){
moverect.shapeColor='orange'
    ball2.shapeColor='red'

  }
else{
moverect.shapeColor='pink'
ball2.shapeColor='pink'
}  
  drawSprites();
}






