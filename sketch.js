
var trex ,trex_running,clouds

var ground,groundImage,invisibleGround,cloudImage

function preload(){

  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

  groundImage=loadImage("ground2.png")

  cloudImage=loadImage("cloud.png")
  
}

function setup(){

  createCanvas(600,200)

  trex=createSprite(50,130,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  ground=createSprite(200,180,400,20)
  ground.addImage("moving",groundImage)
  ground.velocityX=-4

  invisibleGround=createSprite(200,190,400,10)
  invisibleGround.visible=false
  
}

function draw(){

  background("white")

  if(keyDown("space")){
    trex.velocityY=-10
  }

  trex.velocityY=trex.velocityY+0.8

  if(ground.x<0){
    ground.x=ground.width/2
  }

  trex.collide(invisibleGround)

  spawnClouds()
  drawSprites()

}

function spawnClouds(){

if(frameCount%60==0){
  clouds=createSprite(600,100,40,10)
  clouds.velocityX=-3
  clouds.addImage(cloudImage)
  clouds.scale=0.4
  clouds.y=Math.round(random(10,120))
}
}

