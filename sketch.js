//constants

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//variables
var engine, world;
var thunder, thunder1, thunder2, thunder3, thuder4;
var man,manImage;
var cloud,cloudImage;
var maxDrops = 30;
var drops=[];
var rand;
var thunderCreatedFrame = 0;

function preload(){
   thunder1 = loadImage("1.png");
   thunder2 = loadImage("2.png");
   thunder3 = loadImage("3.png");
   thunder4 = loadImage("4.png");
   cloudImage = loadImage("cloud.png")
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(450, 516);

   drop = new Drop(1000,100,7);
   road = new Road(225,456);
   man = new Man(210,330);
   ground1 = new ground(405,100,3, 100)

   if(frameCount%100===0){
      for(var i=0; i<maxDrops;i++){
        drops.push(new Drop(random(-900,490),random(0,400),3,10));
       }
    }

}

function draw(){
   Engine.update(engine);
   background('#7CD1F6');

   
   if(frameCount%110===0){
      cloud = createSprite(-50,55,100,100);
      cloud.addImage("cloud",cloudImage)
      cloud.velocityX = 2;
      cloud.lifeTime = 1
      cloud.y = Math.round(random(40,100))

       }

   rand = Math.round(random(1,4));
   if(frameCount%80===0){
       thunderCreatedFrame=frameCount;
       thunder = createSprite(random(10,370), random(10,30), 10, 10);
       switch(rand){
           case 1: thunder.addImage(thunder1);
           break;
           case 2: thunder.addImage(thunder2);
           break; 
           case 3: thunder.addImage(thunder3);
           break;
           case 4: thunder.addImage(thunder4);
           break;
           default: break;
       }
       thunder.scale = random(0.3,0.6)
   }

   if(thunderCreatedFrame + 10 === frameCount && thunder){
      thunder.destroy();
  }

   drop.display();
   road.display();
   man.display();

     for(var i=9; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }

   drawSprites();
}   

