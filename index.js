var can = document.getElementById('canvas');

can.height = 600;
can.width = 1200;

var ctx = can.getContext('2d');

// Raquetes
var xEsquerda = 0 + 10;
var yEsquerda = 300;
var xDireita = can.width - 30;
var yDireita = 300;

// Bola
var xBola = can.width/2;
var yBola = can.height/2;

var xCima = 0;
var yCima = can.width;
var xBaixo = can.height + 10;
var yBaixo = can.width;

var xDirecao = 1;
var yDirecao = 1;

var pontoDireita = 0;
var pontoEsquerda = 0;

function draw(){

    // Marcar Pontuação
    if( xBola > xDireita){

        pontoEsquerda++;

        xBola = can.width/2;
        yBola = can.height/2;

    }else if(xBola < 0){

        pontoDireita++;

        xBola = can.width/2;
        yBola = can.height/2;
    }

    // Raquete Direita
    if( xBola == xDireita && ( yBola == yDireita || (yBola > yDireita && yBola < yDireita + 100 ) ) ){

        xDirecao = -1;
    }

    // Raquete Esquerda
    if( (xBola -2 == xEsquerda) && ( yBola == yEsquerda || (yBola > yEsquerda && yBola < yEsquerda + 100 ) ) ){

        xDirecao = +1;
    }

    if( yBola == 0 ){

        yDirecao = 1;
    }

    if( yBola == can.height ){

        yDirecao = -1;
    }

    if(yDirecao == 1){

        yBola = (yBola + 6);

    }else{
        yBola = (yBola - 6);
    }

    if(xDirecao == 1){

        xBola = (xBola + 6);
    }else{

        xBola = (xBola - 6);
    }
    
    ctx.font = '48px serif';
    ctx.fillStyle = "#ffffff";
    ctx.fillText(pontoEsquerda, 500, 50);
    
    ctx.font = '48px serif';
    ctx.fillStyle = "#ffffff";
    ctx.fillText(pontoDireita, 680, 50);

    ctx.beginPath();

    // Raquete Esquerda
    ctx.fillStyle = 'rgba(255,255,255,255)';
    ctx.fillRect(xEsquerda, yEsquerda, 20, 100);
    ctx.fill();

    // Raquete Direita
    ctx.fillStyle = 'rgba(255,255,255,255)';
    ctx.fillRect(xDireita, yDireita, 20, 100);
    ctx.fill();

    // Bola
    ctx.fillStyle = 'rgba(255,255,255,255)';
    ctx.fillRect(xBola, yBola, 20, 20);
    ctx.fill();

    // Divisão Meio
    ctx.fillStyle = 'rgba(255,255,255,255)';
    ctx.fillRect(can.width/2, 0, 10, 1000);
    ctx.fill();

    // Cima
    ctx.fillStyle = 'rgba(255,255,255,255)';
    ctx.fillRect(0, 0, can.width, 10);
    ctx.fill();

    // Baixo
    ctx.fillStyle = 'rgba(255,255,255,255)';
    ctx.fillRect(0, can.height -10, can.width, 10);
    ctx.fill();

    // Fundo
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(0, 0, can.width, can.height);

    requestAnimationFrame(draw);
}
draw();

function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;

    return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
    var str = keyPressed(evt);
    
    if(str == 'q'){
        yEsquerda = yEsquerda - 20;
    }
     
    if(str == 'a'){
        yEsquerda = yEsquerda + 20;
    }

    if(str == 'p'){
        yDireita = yDireita - 20;
    }
     
    if(str == 'ç'){
        yDireita = yDireita + 20;
    }
};