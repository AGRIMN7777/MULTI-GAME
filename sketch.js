var canvas ;
var backGroundImg ;
var GameState = 0 ;
var playerCount ;
var database ;
var form ,player ,game ;

function setup(){
    database = firebase.database();
   canvas = createCanvas(600,600);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    drawSprites();
}