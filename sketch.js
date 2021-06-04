const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowfalling = [];
var ground
var player;
var backgroundImg = 0;
function preload(){

  BackGround1 = loadImage("snow2.jpg");
  BackGround2 = loadImage("snow1.jpg");
  BackGround3 = loadImage("snow3.jpg")
}

function setup() {

    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height -20, width, 40, (150, 92, 45))

    player = new Player( 200, 200);
  
}

function draw() {

  if(backgroundImg === 0){

    BackGround = BackGround1;

  } 
  if(backgroundImg === 1){

    BackGround = BackGround2;

  }
  if(backgroundImg === -1){

    BackGround = BackGround3;

  }

  background(BackGround); 
  

  Engine.update(engine);

  if(player.body.position.x > width-10 && backgroundImg <=1 && backgroundImg >= -1){

    Matter.Body.setPosition(player.body, {x:75, y: player.body.position.y});
    backgroundImg += 1

  }
  if(player.body.position.x < 10 && backgroundImg <=1 && backgroundImg >=-1){
    
    Matter.Body.setPosition(player.body, {x:width-75, y: player.body.position.y});
    backgroundImg -= 1

  }
  console.log(backgroundImg);

  if(frameCount % 20 === 0){

    snowfalling.push(new Snowflakes(random(100, width - 100), 10));

}
  
for(var i=0; i<snowfalling.length; i++){
    snowfalling[i].display();
  }

  player.display();

  ground.display();

  drawSprites(); 

  fill("black");
  textSize(30);
  text("Press the Right and Left Arrow key to Move", 300, 200);
  textSize(20);
  fill("yellow");

  if(backgroundImg=== 0 || backgroundImg === 1){

    text("Move towards corners for new area", 10, 400);

  }
  
  if(backgroundImg === 0 || backgroundImg === -1){

    text("Move towards the corners for new area", width-360, 400);

  }
  
}

function keyPressed(){

  if(keyCode === RIGHT_ARROW){

    Matter.Body.setPosition(player.body, {x: player.body.position.x+50, y:player.body.position.y})

  }
  if(keyCode === LEFT_ARROW){

    Matter.Body.setPosition(player.body, {x: player.body.position.x-50, y:player.body.position.y})

  }

}