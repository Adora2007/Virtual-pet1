
var  dog, happyDog, foodS;
var database;
var foodStock;
var dog1, dog2;
var food;



function preload()
{
dog1=loadImage("images/dogImg.png");
dog2 = loadImage("images/dogImg1.png");
}

function setup() {

  createCanvas(500,500);
database=firebase.database();

 dog = createSprite(250,260,50,30);
dog.addImage(dog1);
dog.scale = 0.3;


foodStock = database.ref('Food');
foodStock.on("value", readStock);







}
function draw() {  
  background(46,139,88);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2);
  }


  drawSprites();

  textSize(30);
  fill("white");
 textSize(15);
    text("Note:Press UP_ARROW Key to feed Drago Milk;", 30, 60)
  //add styles here

}

function readStock(data){
 foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  }

  )
}