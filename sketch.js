var canvas,bg;
var together;
var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;

function preload() {
     
    //bg = loadImage("imagenes/garden.png");
    bg = loadImage("Imagenes/garden.png");
    //carga aquí las imágenes
    tomImg1 =loadAnimation("Imagenes/tomOne.png");
    tomImg2=loadAnimation("Imagenes/tomTwo.png","Imagenes/tomThree.png");
    tomImg3=loadAnimation("Imagenes/tomFour.png");
    jerryImg1=loadAnimation("Imagenes/jerryOne.png");
    jerryImg2=loadAnimation("Imagenes/jerryTwo.png","Imagenes/jerryThree.png");
    jerryImg3=loadAnimation("Imagenes/jerryFour.png");
   

}

function setup(){
    canvas = createCanvas(1000,800);
    
    //crea aquí los sprites de Tom y Jerry
    tom=createSprite(870,600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale=0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryImg1);
    jerry.scale=0.15;
 
}

function draw() {

    background(bg);
    
    //Escribe aquí la condición para evaluar si Tom y Jerry chocan
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocityX=0;
       tom.addAnimation("tomLastImage",tomImg3);
       tom.x=300;
       tom.scale=0.2;
       tom.changeAnimation("tomLastImage");
       jerry.addAnimation("jerryLastImage",jerryImg3);
       jerry.scale=0.15;
       jerry.changeAnimation("jerryLastImage");
       
    }
    drawSprites();
}


function keyPressed(){

//Escribe aquí el código para la animación de movimeinto y cambio

if(keyCode === LEFT_ARROW){

    tom.velocityX = -5;
    tom.addAnimation("tomRunning",tomImg2);
    tom.changeAnimation("tomRunning");
   

    jerry.addAnimation("jerryTeasing",jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
    
   }  
}