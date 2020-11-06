

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0
var ground
var score

var invisibleGround
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 ground=createSprite(100,400,1000,25) 
createCanvas(600,400);
  monkey=createSprite(45,358,10,10)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  monkey.setCollider("circle",0,0,250)    
  invisibleGround = createSprite(200,400,400,10);
  invisibleGround.visible = false;
  monkey.collide(invisibleGround)
   monkey.debug = false;

  bananaGroup = new Group();
}



function draw() {
background("white")
      console.log(frameCount)
if (frameCount % 100===0){
  obstacle=createSprite(600,370,10,10)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-5;
  obstacle.lifetime=150
  obstacle.scale=0.1
//  obstacleGroup.add(obstacle)
  if(monkey.isTouching(obstacle)){
    gameState=END
  }
}
     if(keyDown("space") && monkey.y >= 360) {
      monkey.velocityY = -17;
    }
      survivalTime=Math.ceil(frameCount/frameRate())

    monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(invisibleGround);
   
      stroke("white")
  textSize(20)
  fill("white")
  text("score: "+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")

  text("survival time: "+survivalTime,100,50)
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
 if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach()
  }
 
   spawnBanana();
  drawSprites();
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 110===0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(175,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
  bananaGroup.add(banana);
  }
  
}





