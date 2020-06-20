var player1;
var fighter1;
var fighter2;
var fighter3;
var fighter4;
var playerCount = 0;
var database;
var gameState = 0;
var allPlayers;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  fighter1 = createSprite(600, 350, 20, 20);
  fighter1.shapeColor = "blue"
  fighter1.visible = false
  fighter2 = createSprite(600, 150, 20, 20);
  fighter2.shapeColor = "red"
  fighter2.visible = false
  fighter3 = createSprite(200, 350, 20, 20);
  fighter3.shapeColor = "green"
  fighter3.visible = false
  fighter4 = createSprite(200, 150, 20, 20);
  fighter4.shapeColor = "yellow"
  fighter4.visible = false

  if(gameState === 0){
    Player.getCount();
    form = new Form();
  }
}

function draw() {
  background(128);
  form.display();
  if(playerCount === 4){
    background(37)
    game = new Game();
    game.update(1);
    gameState = 1
  }
  if (gameState === 1){
    game.start();
    fighter1.visible = true
    fighter2.visible = true
    fighter3.visible = true
    fighter4.visible = true
  }
}
