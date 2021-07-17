const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
  Ghoul = loadImage("download.png");
  Red = loadImage("download (5).png");
  Blue = loadImage("download (6).png");
  Green = loadImage("download (7).png");
  Yellow = loadImage("download (8).png");

  RedG = loadImage("download (1).png");
  BlueG = loadImage("download (2).png");
  GreenG = loadImage("download (4).png");
  YellowG = loadImage("download (3).png");
}


function setup(){
    createCanvas(windowWidth-10,windowHeight-20);
    engine = Engine.create();
    world = engine.world;

    //--------------------------------------------- GHOUL SPRITE---------------------------------------------------------------
    ghoul = createSprite(width/2,height/2);
    ghoul.addImage(Ghoul);
    ghoul.scale = 1.5

    ghoul.setCollider( "circle" , 0, 0 , 150 )

    ghoul.debug = true
    
    //--------------------------------------------------- PLAYERS----------------------------------------------------------------
    red = createSprite(150,150)
    red.addImage(Red);
    red.scale = 1.3
  


    blue = createSprite(width-150,150)
    blue.addImage(Blue);
    blue.scale = 1.3

    green = createSprite(150,height-150)
    green.addImage(Green);
    green.scale = 1.3

    yellow = createSprite(width-150,height-150)
    yellow.addImage(Yellow);
    yellow.scale = 1.3

    

    //----------------------------------------------------- GHOUL PLAYERS-----------------------------------------------------------
    redG = createSprite(150,150)
    redG.addImage(RedG);
    redG.scale = 1.5
    redG.visible = false

  

    blueG = createSprite(width-150,150)
    blueG.addImage(BlueG);
    blueG.scale = 1.5
    blueG.visible = false

    greenG = createSprite(150,height-150)
    greenG.addImage(GreenG);
    greenG.scale = 1.5
    greenG.visible = false
    
    yellowG = createSprite(width-150,height-150)
    yellowG.addImage(YellowG);
    yellowG.scale = 1.5
    yellowG.visible = false

    //--------------------------------- velocity

    red.velocityY = 2
    red.velocityX = 3

    green.velocityY = -2
    green.velocityX = 3

}

function draw(){
    background("#6faf9c");
    Engine.update(engine);
    
    createEdgeSprites()

    //console.log("red   " +( ghoul.x - red.x))
  // console.log("blue   " + (ghoul.x - blue.x))
   // console.log("green   " + (ghoul.x - green.x))
   //console.log("yellow   " + (ghoul.x - yellow.x))

   if(( ghoul.x - red.x) > ((ghoul.x - blue.x) &&(ghoul.x - green.x) && (ghoul.x - yellow.x)) )
    {
      console.log("red red red")
    }
    else{
      console.log("noooo")

    }
   
   
   
   //------------------------------velocity 0 for players-----------------------------
    red.velocityX = 0
   red.velocityY = 0
    
    blue.velocityX = 0
    blue.velocityY = 0
    
    green.velocityX = 0
    green.velocityY = 0
    
    yellow.velocityX = 0
    yellow.velocityY = 0

    //----------------------------velocity 0 for enemies-------------------------------------
    redG.velocityX = 0
    redG.velocityY = 0
    
    blueG.velocityX = 0
    blueG.velocityY = 0
    
    greenG.velocityX = 0
    greenG.velocityY = 0
    
    yellowG.velocityX = 0
    yellowG.velocityY = 0

    //------------------------------------moving according the arrow keys---------------------------------

    if(keyDown(UP_ARROW)){  //--------------------- UP ---------------------------------------------------
      
      red.velocityY = -6
      blue.velocityY = -6
      green.velocityY = -6
      yellow.velocityY = -6
      
     
      redG.velocityY = -6
      blueG.velocityY = -6
      greenG.velocityY = -6
      yellowG.velocityY = -6
    } 

    if(keyDown(DOWN_ARROW)){//--------------------- DOWN---------------------------------------------------
      
      red.velocityY = 6
      blue.velocityY = 6
      green.velocityY = 6
      yellow.velocityY = 6
      
     
      redG.velocityY = 6
      blueG.velocityY = 6
      greenG.velocityY = 6
      yellowG.velocityY = 6
    } 
      
    
    if(keyDown(LEFT_ARROW)){ //--------------------- LEFT ---------------------------------------------------
      
      red.velocityX = -6
      blue.velocityX = -6
      green.velocityX = -6
      yellow.velocityX = -6
      
     
      redG.velocityX = -6
      blueG.velocityX = -6
      greenG.velocityX = -6
      yellowG.velocityX = -6
    } 

    
    if(keyDown(RIGHT_ARROW)){ //--------------------- RIGHT ---------------------------------------------------
      
      red.velocityX = 6
      blue.velocityX = 6
      green.velocityX = 6
      yellow.velocityX = 6
      
     
      redG.velocityX = 6
      blueG.velocityX = 6
      greenG.velocityX = 6
      yellowG.velocityX = 6
    } 

    /*if(ghoul.x - red.x <= ghoul.width/2 + red.width/2 || ghoul.y - red.y <= ghoul.height/2 + red.height/2){

      ghoul.x = red.x
      ghoul.y = red.y
    }*/
  

    
    
    
    
    
    drawSprites()
}

