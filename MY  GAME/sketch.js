var bgImage
var burger,cola,dal,fruits,momos,vegetables,vegetables2,pizza,person,gameState,eatingBoy
var burgerImg,colaImg,dalImg,fruitsImg,momosImg,vegetablesImg,vegetables2Img,pizzaImg,personImg,score,boyImg
score=0
gameState="START"
function preload(){
    bgImage=loadImage("path.png")
    boyImg=loadImage("eatingBoy.png")
    burgerImg=loadImage("burger.png")
    colaImg=loadImage("cola.png")
    dalImg=loadImage("dal.png")
    momosImg=loadImage("momos.png")
    vegetablesImg=loadImage("vegetables.png")
    vegetables2Img=loadImage("vegetables2.png")
    pizzaImg=loadImage("pizza.png")
    personImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
    fruitsImg=loadImage("fruits.png")
}
function setup(){

    createCanvas(600,600)
    

path=createSprite(300,300)
path.addImage(bgImage)
path.scale=1
path.velocityY=3

person=createSprite(300,500)
person.addAnimation("person",personImg)
path.visible=false
person.visible=false



healthyGroup=new Group
junkGroup=new Group
}


function draw(){
background("black")

if(gameState==="START"){
    background("yellow")
    textSize(26)
    stroke(0)
    fill("red")
    text("If we eat the Junk Food our score will decrease.",20,310)
    text("If we eat the Healthy Food our score will increase.",20,350)
    fill("green")
    text("Press SPACE to Start",130,400)
    stroke(0)
    fill("blue")
    textSize(40)
    text("FAT TO FIT",165,80)
    image(boyImg,150,150)
    
    
}
 
if(keyDown("SPACE")){
    gameState="PLAY"
    person.visible=true
    path.visible=true
}
if(gameState==="PLAY"){



if(keyDown("LEFT_ARROW")){
 person.x=person.x-2.5
  }
  if(keyDown("RIGHT_ARROW")){
    person.x=person.x+2.5
  }

  if(path.y>400){
    path.y=200   
}

if(person.x<=150){
    person.x=200
}
if(person.x>=400){
    person.x=385
}


textSize(30)
stroke (0)
fill("red")
text ("Score:"+score,450,40)

if(healthyGroup.isTouching(person)){
   healthyGroup.destroyEach()
    score=score+10
   }

   else if(junkGroup.isTouching(person)){
   junkGroup.destroyEach()
   score=score-10
   }
   
  
   

drawSprites()
spawnHealthyFood()
spawnJunkFood()
}
}
function spawnHealthyFood(){
if(frameCount%150===0){
    healthyFood=createSprite(400,0)
    
    var r = Math.round(random(1,2));
         if(r==1){
        healthyFood.x=Math.round(random(190,250)) 
        } 
        else if(r==2){
         healthyFood.x=Math.round(random(250,350))
         }
         healthyFood.velocityY=3
    //healthyFood.x=Math.round(random(190,350))
    healthyFood.velocityY=6+score/100
    healthyFood.lifetime=200
    healthyFood.scale=0.15
    var rand=Math.round(random(1,4))
    switch(rand){
        case 1:
            healthyFood.addImage(dalImg);
            break;
        case 2:
            healthyFood.addImage(vegetablesImg);
            break;
        case 3: 
            healthyFood.addImage(vegetables2Img);
            break;
        case 4: 
            healthyFood.addImage(fruitsImg);
            break;
    }
    healthyGroup.add(healthyFood)
}
}

function spawnJunkFood(){
    if(frameCount%150===0){
        junkFood=createSprite(500,0)
        
        var r = Math.round(random(1,2));
         if(r==2){
        junkFood.x=Math.round(random(190,250)) 
        } 
        else if(r==1){
         junkFood.x=Math.round(random(250,350))
         }
         junkFood.velocityY=1
        //junkFood.x=Math.round(random(190,350))
 junkFood.velocityY=4+score/100
        junkFood.lifetime=200
        junkFood.scale=0.15
    var rand=Math.round(random(1,4))
    switch(rand){
            case 1:
            junkFood.addImage(momosImg);
            break;
            case 2:
            junkFood.addImage(pizzaImg);
            break;
            case 3: 
            junkFood.addImage(colaImg);
            break;
            case 4: 
            junkFood.addImage(burgerImg);
            break;
    }
    junkGroup.add(junkFood)
    }  
}
