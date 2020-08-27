var player,obstacleImage,obstacleGroup,bananaImage,score,backgrounds,backgroundImage;

function preload(){
  
  backgroundImage = loadImage("jungle.png")
  
  player = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
}



function setup() {
  createCanvas(400, 400);
  
  backgrounds = createSprite(200,200,400,10);
  backgrounds.addAnimation("jungle.png",backgroundImage);
  
  
}

function draw() {
  background(220);
  
  drawSprites();
}