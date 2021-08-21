var bg
var astronaunt,astronaunt2,meteors, planets
var astro,astro2,meteor,planet
var button,button2
var buttons,buttons2
var cats,dogs,rats,spaceships,balls,bananas
var cat,dog,rat,spaceship,banana,ball
var gameState="load"

function preload(){
    bg=loadImage("bg.png")
    astro=loadImage("astro.png")
    astro2=loadImage("astro 2.png")
    meteor=loadImage("meteor.png")
    planet=loadImage("jupiter.png")
    buttons=loadImage("start.png")
    buttons2=loadImage("next.png")
   
    cats=loadImage("cat.png")
    dogs=loadImage("dog.png")
    spaceships=loadImage("spaceship.png")
    rats=loadImage("rat.png")
    bananas=loadImage("banana.png")
    balls=loadImage("ball.png")
}




function setup(){
createCanvas(windowWidth,windowHeight)
astronaunt = createSprite(200,500);
astronaunt.addImage(astro);
astronaunt.scale=0.2

astronaunt2 = createSprite(900,100);
astronaunt2.addImage(astro2);
astronaunt2.scale=0.2


meteors = createSprite(900,800);
meteors.addImage(meteor);
meteors.scale=0.2


 planets = createSprite(400,500);
planets.addImage(planet);
planets.scale=0.2

button=createSprite(700,500,100,50)
button.addImage(buttons);
button.scale=0.25

button2=createSprite(700,500,100,50)
button2.addImage(buttons2);
button2.scale=0.5
button2.visible=false

ball = createSprite(900,200);
ball.addImage(balls);
ball.scale=0.05

dog = createSprite(200,200);
dog.addImage(dogs);
dog.scale=0.05

cat = createSprite(500,300);
cat.addImage(cats);
cat.scale=0.05

rat = createSprite(400,100);
rat.addImage(rats);
rat.scale=0.05

spaceship = createSprite(600,300);
spaceship.addImage(spaceships);
spaceship.scale=0.30

banana = createSprite(400,600);
banana.addImage(bananas);
banana.scale=0.09
}






function draw (){
background(bg);
textSize(40)
fill("purple")
strokeWeight (10)
stroke ("white")
text("WELCOME TO MISSION JUPITER",20,35)
if(mousePressedOver(button)){
planets.visible=false;
meteors.visible=false;
astronaunt.visible=false;
astronaunt2.visible=false;
gameState="PLAY"
button.visible=false;
button2.visible=true
}
if(gameState==="PLAY"){
for (var i=1;i<11;i=i+1){
switch (i){
case 1: 
text("What color was the astronaunts suit?",windowWidth/2-100, windowHeight/2)
if (mousePressedOver(button2)){
    i=i+1
    break
   
}
case 2:
text("What animal is smaller?")
if (mousePressedOver(button2)){
    i=i+2
    break
   
}
case 3:
    text("Which color is yellow?")
    if (mousePressedOver(button2)){
        i=i+1
        break
       
    }
case 4:
    text("How old are you?")
    if (mousePressedOver(button2)){
        i=i+1
        break
       
    }
case 5:
    text("Which picture is the dog?")
    if (mousePressedOver(button2)){
        i=i+1
        break
       
    }
case 6:
    text("which one is a banana?")
    if (mousePressedOver(button2)){
        i=i+1
        break
       
    }
case 7:
    text("Which one is a ball?")
    if (mousePressedOver(button2)){
        i=i+1
        break
       
    }
case 8:
    text("which color is red?")
    if (mousePressedOver(button2)){
        i=i+1
        break
       
    }
case 9:
    text("which is an airplane?")
    if (mousePressedOver(button2)){
        i=i+1
        break
       
    }
case 10:
    text("Did you enjoy the quiz?")
    if (mousePressedOver(button2)){
        i=i+1
        gameState==="END"
       
    }
}
}
}
drawSprites()
}
