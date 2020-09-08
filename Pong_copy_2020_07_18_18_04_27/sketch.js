var userPaddle,  playerScore, ball;

function preload(){
  
}

function setup() {
  
createCanvas(400,400);

//create a user paddle sprite
userPaddle = createSprite(390,200,10,70);


//create the pong ball
ball = createSprite(200,200,12,12);
}



function draw() {  
  //fill the computer screen with white color
  background("white");
  edges = createEdgeSprites();
  
  
  //give velocity to the ball when the user presses play
  //assign random velocities later for fun
  if (keyDown("space")) {
    ball.velocityX = 5  
  }

  
  if(ball.isTouching(userPaddle)){
    ball.x =200;
    ball.y = 200;
    ball.velocityX = 0

  }

  

  
  drawSprites()
}
