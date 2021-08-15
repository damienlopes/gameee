var ghost, platform, door, tower;
var ghostimg, platformimg, doorimg, towerimg;
var gamestate = "paly";
var badgroup
var score = 0

function preload() {
  ghostimg = loadImage("ghost-standing.png");
  platformimg = loadImage("climber.png");
  doorimg = loadImage("door.png");
  towerimg = loadImage("tower.png");
}
function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300, 300, 300);
  tower.addImage("towerthing", towerimg);
  ghost = createSprite(300, 300);
  ghost.addAnimation("ghosting", ghostimg);
  ghost.scale = 0.4;
  badgroup = createGroup()

}
function draw() {
  background("black");
 
  if (gamestate == "paly") {
    tower.velocityY = 5;
    if (tower.y > 600) {
      tower.y = 300;
    }
    if (keyDown(DOWN_ARROW)) {
    ghost.y = ghost.y + 10
    
    }
    if (keyDown(UP_ARROW)) {
      ghost.y = ghost.y - 10
      
      }
      if (keyDown(RIGHT_ARROW)) {
        ghost.x = ghost.x + 10
        
        }
        if (keyDown(LEFT_ARROW)) {
          ghost.x = ghost.x - 10
          
          }
          if (ghost.isTouching(badgroup)){
          gamestate = "end"
          }
         score = score + 1
      
   bad()
  }
if (gamestate == "end"){
badgroup.setVelocityYEach(0);
tower.velocityY = 0
}

  drawSprites();
  text("score: " + score, 520, 15);
}

function bad(){
  var a
  if (frameCount% 50 == 0){
 platform = createSprite (300,70)
 a = Math.round(random(100,500))
platform.x = a 
platform. addImage ("platformthing", platformimg)
platform.velocityY = 5;
badgroup.add(platform)
door = createSprite (300, 0)
door.x = a 
door. addImage ("doorthing", doorimg)
door.velocityY = 5
badgroup.add(door)

  }
}