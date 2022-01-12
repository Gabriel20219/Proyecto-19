var path,boy,fruit1,fruit2,fruit3,fruit4,sword,obstacle1,obstacle2;
var pathImg,boyImg,fruit1Img,fruit2Img,fruit3Img,fruit4Img,swordImg,obstacle1Img,obstacle2Img;
var treasureCollection = 0;
var fruit1G,fruit2G,fruit3G,friutG,swordGroup,obstacle1G,obstacle2G;

//GameStates (Estados del juego)
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  fruit1Img = loadImage("fruit1.png");
  fruit2Img = loadImage("fruit2.png");
  fruit3Img = loadImage("fruit3.png");
  fruit4Img = loadImage("fruit4.png");
  swordImg = loadImage("sword.png");
  obstacle1Img = loadImage("obstacle1.png")
  obstacle2Img = loadImage("obstacle2.png")
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
//crear un canvas

createCanvas(windowWidth,windowHeight);

//Mover el fondo

path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//crear sprite boy (niño) corriendo
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
fruit1G=new Group();
fruit2G=new Group();
fruit3G=new Group();
fruit4G=new Group();
swordGroup=new Group();
obstacle1G=new Group();
obstacle2G=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //código para reiniciar el fondo

   if(path.y > height ){
     path.y = height/2;
   }
  
    createfruit1();
    createfruit2();
    createfruit3();
    createfruit4();
    createSword();
    createobstacle1();
    createobstacle2();

    if (fruit1G.isTouching(boy)) {
      fruit1G.destroyEach();
      treasureCollection=treasureCollection + 1;
    }
    else if (fruit2G.isTouching(boy)) {
      fruit2G.destroyEach();
      treasureCollection=treasureCollection + 2;
      
    }else if(fruit3G.isTouching(boy)) {
      fruit3G.destroyEach();
      treasureCollection= treasureCollection + 3;

    }else if(fruit4G.isTouching(boy)) {
      fruit4G.destroyEach();
      treasureCollection= treasureCollection + 5;

    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        fruit1G.destroyEach();
        fruit2G.destroyEach();
        fruit3G.destroyEach();
        fruit4G.destroyEach();
        swordGroup.destroyEach();
        obstacle1G.destroyEach();
        
        fruit1G.setVelocityYEach(0);
        fruit2G.setVelocityYEach(0);
        fruit3G.setVelocityYEach(0);
        fruit4G.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        obstacle1G.setVelocityYEach(0);
     
    }else if(obstacle1G.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        fruit1G.destroyEach();
        fruit2G.destroyEach();
        fruit3G.destroyEach();
        fruit4G.destroyEach();
        swordGroup.destroyEach();
        obstacle1G.destroyEach();
        obstacle2G.destroyEach();
        
        fruit1G.setVelocityYEach(0);
        fruit2G.setVelocityYEach(0);
        fruit3G.setVelocityYEach(0);
        fruit4G.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        obstacle1G.setVelocityYEach(0);
        obstacle2G.setVelocityYEach(0);
     
    }else if(obstacle2G.isTouching(boy)) {
      gameState=END;
      
      boy.addAnimation("SahilRunning",endImg);
      boy.x=width/2;
      boy.y=height/2;
      boy.scale=0.6;
      
      fruit1G.destroyEach();
      fruit2G.destroyEach();
      fruit3G.destroyEach();
      fruit4G.destroyEach();
      swordGroup.destroyEach();
      obstacle1G.destroyEach();
      obstacle2G.destroyEach();
      
      fruit1G.setVelocityYEach(0);
      fruit2G.setVelocityYEach(0);
      fruit3G.setVelocityYEach(0);
      fruit4G.setVelocityYEach(0);
      swordGroup.setVelocityYEach(0);
      obstacle1G.setVelocityYEach(0);
      obstacle2G.setVelocityYEach(0);
   
  }
    
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Frutas recolectadas: "+ treasureCollection,width-220,30);
  }

}

function createfruit1() {
  if (World.frameCount % 200 == 0) {
  var fruit1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  fruit1.addImage(fruit1Img);
  fruit1.scale=0.15;
  fruit1.velocityY = 5;
  fruit1.lifetime = 200;
  fruit1G.add(fruit1);
  }
}

function createfruit2() {
  if (World.frameCount % 320 == 0) {
  var fruit2 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  fruit2.addImage(fruit2Img);
  fruit2.scale=0.15;
  fruit2.velocityY = 5;
  fruit2.lifetime = 200;
  fruit2G.add(fruit2);
}
}

function createfruit3() {
  if (World.frameCount % 410 == 0) {
  var fruit3 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  fruit3.addImage(fruit3Img);
  fruit3.scale=0.13;
  fruit3.velocityY = 5;
  fruit3.lifetime = 200;
  fruit3G.add(fruit3);
  }
}

function createfruit4() {
  if (World.frameCount % 350 == 0) {
  var fruit4 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  fruit4.addImage(fruit4Img);
  fruit4.scale=0.15;
  fruit4.velocityY = 5;
  fruit4.lifetime = 200;
  fruit4G.add(fruit4);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 4;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}

function createobstacle1(){
  if (World.frameCount % 430 == 0) {
  var obstacle1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  obstacle1.addImage(obstacle1Img);
  obstacle1.scale=0.1;
  obstacle1.velocityY = 4;
  obstacle1.lifetime = 200;
  obstacle1G.add(obstacle1);
  }
}

function createobstacle2(){
   if (World.frameCount % 480 == 0) {
   var obstacle2 = createSprite(Math.round(random(50, width-50),40, 10, 10));
   obstacle2.addImage(obstacle2Img);
   obstacle2.scale=0.1;
   obstacle2.velocityY = 4;
   obstacle2.lifetime = 200;
   obstacle2G.add(obstacle2);
   }
 }

