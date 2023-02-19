var bike1,bike2;
var bike1Img,bike2Img,backgroundImg;
var background;

function preload() {
backgroundImg = loadImage("background.jpg");

}


function setup() {
  createCanvas(800,400);
  background = createSprite(400, 200, 50, 50);
  background.addImage("ground",backgroundImg);
}

function draw() {
 // background(255,255,255); 
  drawSprites();
}