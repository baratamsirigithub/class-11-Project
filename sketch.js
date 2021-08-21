var runner, path, bomb;
var runnerImg, pathImg, bombImg;


function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
bombImg = loadImage("bomb.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,100,100);
  path.addImage(pathImg);
  path.velocityY= 7;
  path.scale=1.30000;

  runner = createSprite(320,300,50,50);
runner.addAnimation("running", runnerImg);
runner.scale= 0.05;

bomb = createSprite(210,200,50,50);
bomb.addImage(bombImg);
bomb.scale= 0.05;
bomb.velocityY= 4;
}

function draw() {


  if(path.y > 400 )
  {
    path.y = height/2;
  }
 
 
  background(150);

  drawSprites();
}
