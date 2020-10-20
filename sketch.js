
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;

  obstaclesGroup = new Group();
  fruitsGroup = new Group();
}


function draw() {
  background("white");

  
      banana = banana + Math.round(getFrameRate()/80);
  
  
      if(keyDown("space")){
      monkey.velocityY = -10;
        
    }
  
    monkey.velocityY = monkey.velocityY + 0.8

      if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
      monkey.collide(ground);
  
      //spawn the clouds
    spawnFruits();
  
    //spawn obstacles on the ground
    spawnObstacles();
  
  
  drawSprites();
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);   

   if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        fruitsGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        fruitsGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}


  


function spawnFruits() {
  //write code here to spawn the clouds
 if (frameCount % 80 === 0) {
    var fruit = createSprite(600,5,10,10);
    fruit.y = Math.round(random(120,200));
    fruit.addImage(bananaImage);
    fruit.scale = 0.1;
    fruit.velocityX = -3;
    
     //assign lifetime to the variable
    fruit.lifetime = 200;
    fruitsGroup.add(fruit);
  }
}

function spawnObstacles() { 
  if(frameCount % 300 === 0) { 
  obstacle = createSprite(800,320,10,40); 
    obstacle.velocityX = -6; 
    obstacle.addImage(obstaceImage); 
    obstacle.scale=0.15; 
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}




