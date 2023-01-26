var PLAY = 1
var END = 0
var GAME_OVER = 0
var PAUSE = 0

var cenario, cenario_png
var chao_fake
var arbusto
var palmeira

var nuvem, nuvemimg, nuvemG

var moeda_yoshi, moeda_yoshiimg
var moeda, moedaimg

var goomba


var ponteiro = 0


var gameState = PLAY


var vegetaçãoG, inimigosG, vegetacao, inimigos

var mario_pancadaImg


function preload(){
cenario_png = loadImage("Cenario .png") 
mario_correndo = loadAnimation("Mario correndo 1.png", "Mario correndo 2.png")
nuvemimg = loadImage("Nuvem.png")
//moeda_yoshiimg = loadAnimation("Yoshi.c1.png", "Yoshi.c2.png", "Yoshi.c3.png", "Yoshi.c4.png")
goomba_png = loadAnimation("Goomba1.png", "Goomba2.png")
mario_pancadaImg = loadImage("Mario pancada1.png")
}


function setup() {


createCanvas(10000, 10000)
//CENARIO
cenario = createSprite( 50, 790 ,100,100);
cenario.addImage("cenario", cenario_png)
cenario.scale = 0.3


mario = createSprite(100, 835, 100, 100)
mario.addAnimation("mario_corre", mario_correndo)


vegetaçãoG=createGroup();
inimigosG=createGroup();
nuvemG=createGroup();

}

function draw() {
background("lightblue");
drawSprites()

console.log(mouseX);
console.log(mouseY);


//Play
if (gameState === PLAY) {
ponteiro = ponteiro + Math.round(getFrameRate()/50);
cenario.velocityX = -4

//SPAWN
inimigos();
nuvem_spawn();

if (inimigosG.isTouching(mario)) {
    gameState === GAME_OVER
}

//PONTUAÇÃO
text("Pontuação: " + ponteiro, 1250, 41 )
}

//GAME OVER

else if (gameState === GAME_OVER) {
    cenario.velocityX = 0
console.log("game_over")
cenario.velocityX = 0

mario.changeImage("pancada", mario_pancadaImg)
//POSIÇÃO DO MAUSE


}

}
function inimigos() {
if (World.frameCount % Math.round(random(10, 80)) === 0){
 goomba = createSprite(1379, 845, 100, 100)
 goomba.addAnimation("goomba.img", goomba_png)
 goomba.scale = 2 
 goomba.velocityX = -5
 

 inimigosG.add(goomba);

 if (goomba.isTouching(mario)) {
    gameState = GAME_OVER;
}

    }
}

function nuvem_spawn() {
//spawn de nuvem
if (frameCount % 60 === 0) {
    nuvem = createSprite(10000, 53, 40, 10)
    nuvem.addImage("nuvem_img", nuvemimg)
    nuvem.y = Math.round(random(52,428))
    nuvem.x = Math.round(random(5000, 10000))
    nuvem.velocityX = -30
    nuvem.scale = 2

    nuvemG.add(nuvem);
}
} 
