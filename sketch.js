var ball, ballPos;
var database, position;
    function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballPos = database.ref("ball/position");
    ballPos.on("value", readposition, showerror);
}

function draw(){
    background("white");
    if(position!==undefined) {


    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
 database.ref("ball/position").set({
 "x":position.x + x, 
 "y":position.y + y
 })  
}
function readposition(data) {
position = data.val();
ballPos.x = position.x;
ballPos.y = position.y;    
}
function showerror() {
console.log("unable to read database");    
}