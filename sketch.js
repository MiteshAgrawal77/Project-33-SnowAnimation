const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){   
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata"); 

    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;

    var hour = datetime.slice(11,13);


    if(hour>=17 && hour<=20){
        bg= "snow3.jpg";
    }else if(hour>=10 && hour<=17){
        bg= "snow1.jpg";
    }else if(hour>=20 && hour<=00){
        bg= "snow2.jpg";
    }else if(hour>=00 && hour<=10){
        bg= "snow3.jpg";
    }

    backgroundImg = loadImage(bg)


}