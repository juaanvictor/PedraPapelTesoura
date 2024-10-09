function SorteioAdversario(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

var XR = (SorteioAdversario(1,3));

// for (let i=0; i < 100000000000; i++){
//     var XR = (SorteioAdversario(1,3));
// }

console.log("O sorteio deu: "+XR);

function JogadaEscolhida(){
    document.getElementById("escolhida").innerHTML = "papel.jpg";
}

function ClicouPedra(){
    console.log("Você escolheu pedra");
}

function ResultadoSorteio(){
    var BORA = XR;
    if (BORA == 1){
        document.getElementById("FINAL").innerHTML = "<img style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='pedra.jpg' alt=''>"
    } else if (BORA == 2){
        document.getElementById("FINAL").innerHTML = "<img style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='papel.jpg' alt=''>"
    } else if (BORA == 3){
        document.getElementById("FINAL").innerHTML = "<img style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='tesoura.jpg' alt=''>"
    }
}

// document.getElementById("ESCOLHAS").innerHTML = "<p style='margin-left:85px; margin-top: 60px; font-size: 30px;'>VOCÊ ESCOLHEU:</p><img style='display: inline-block; margin-left: 100px; position: absolute; top: 150px;' src='pedra.jpg' alt=''><p style='margin-left:500px; margin-top: 200px; font-size: 80px;'>X</p><p style='margin-left:700px; position: absolute; font-size: 30px; margin-top: -400px;'>COMPUTADOR:</p><img id='FINAL' style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='ResultadoSorteio()' alt=''>";

function ClicouPedra(){
    if (XR == 1){
        document.getElementById("ESCOLHAS").innerHTML = "<div id = 'ESCOLHAS1'><p style='margin-left:85px; margin-top: 60px; font-size: 30px;'>VOCÊ ESCOLHEU:</p><img style='display: inline-block; margin-left: 100px; position: absolute; top: 150px;' src='pedra.jpg' alt=''><p style='margin-left:500px; margin-top: 200px; font-size: 80px;'>X</p><p style='margin-left:700px; position: absolute; font-size: 30px; margin-top: -400px;'>COMPUTADOR:</p><img id='FINAL' style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='pedra.jpg' alt=''><p style='margin-left:420px; position: absolute; font-size: 50px; margin-top: -420px; color: red;'>EMPATE!</p><button id='AbrirFechar' onclick='FecharADiv()' style='position: absolute; width = 10px; height = 10px; left = -90%; top: 0px;'>x</button></div>";
    } else if (XR == 2){
        document.getElementById("ESCOLHAS").innerHTML = "<div id = 'ESCOLHAS1'><p style='margin-left:85px; margin-top: 60px; font-size: 30px;'>VOCÊ ESCOLHEU:</p><img style='display: inline-block; margin-left: 100px; position: absolute; top: 150px;' src='pedra.jpg' alt=''><p style='margin-left:500px; margin-top: 200px; font-size: 80px;'>X</p><p style='margin-left:700px; position: absolute; font-size: 30px; margin-top: -400px;'>COMPUTADOR:</p><img id='FINAL' style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='papel.jpg' alt=''><p style='margin-left:420px; position: absolute; font-size: 50px; margin-top: -420px; color: red;'>PERDEU!</p><button id='AbrirFechar' onclick='FecharADiv()' style='position: absolute; width = 10px; height = 10px; left = -90%; top: 0px;'>x</button></div>";
    } else if (XR == 3){
        document.getElementById("ESCOLHAS").innerHTML = "<div id = 'ESCOLHAS1'><p style='margin-left:85px; margin-top: 60px; font-size: 30px;'>VOCÊ ESCOLHEU:</p><img style='display: inline-block; margin-left: 100px; position: absolute; top: 150px;' src='pedra.jpg' alt=''><p style='margin-left:500px; margin-top: 200px; font-size: 80px;'>X</p><p style='margin-left:700px; position: absolute; font-size: 30px; margin-top: -400px;'>COMPUTADOR:</p><img id='FINAL' style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='tesoura.jpg' alt=''><p style='margin-left:420px; position: absolute; font-size: 50px; margin-top: -420px; color: red;'>GANHOU!</p><button id='AbrirFechar' onclick='FecharADiv()' style='position: absolute; width = 10px; height = 10px; left = -90%; top: 0px;'>x</button></div>";
    }
}

function ClicouPapel(){
    if (XR == 1){
        document.getElementById("ESCOLHAS").innerHTML = "<div id = 'ESCOLHAS1'><p style='margin-left:85px; margin-top: 60px; font-size: 30px;'>VOCÊ ESCOLHEU:</p><img style='display: inline-block; margin-left: 100px; position: absolute; top: 150px;' src='papel.jpg' alt=''><p style='margin-left:500px; margin-top: 200px; font-size: 80px;'>X</p><p style='margin-left:700px; position: absolute; font-size: 30px; margin-top: -400px;'>COMPUTADOR:</p><img id='FINAL' style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='pedra.jpg' alt=''><p style='margin-left:420px; position: absolute; font-size: 50px; margin-top: -420px; color: red;'>GANHOU!</p><button id='AbrirFechar' onclick='FecharADiv()' style='position: absolute; width = 10px; height = 10px; left = -90%; top: 0px;'>x</button></div>";
    } else if (XR == 2){
        document.getElementById("ESCOLHAS").innerHTML = "<div id = 'ESCOLHAS1'><p style='margin-left:85px; margin-top: 60px; font-size: 30px;'>VOCÊ ESCOLHEU:</p><img style='display: inline-block; margin-left: 100px; position: absolute; top: 150px;' src='papel.jpg' alt=''><p style='margin-left:500px; margin-top: 200px; font-size: 80px;'>X</p><p style='margin-left:700px; position: absolute; font-size: 30px; margin-top: -400px;'>COMPUTADOR:</p><img id='FINAL' style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='papel.jpg' alt=''><p style='margin-left:420px; position: absolute; font-size: 50px; margin-top: -420px; color: red;'>EMPATE!</p><button id='AbrirFechar' onclick='FecharADiv()' style='position: absolute; width = 10px; height = 10px; left = -90%; top: 0px;'>x</button></div>";
    } else if (XR == 3){
        document.getElementById("ESCOLHAS").innerHTML = "<div id = 'ESCOLHAS1'><p style='margin-left:85px; margin-top: 60px; font-size: 30px;'>VOCÊ ESCOLHEU:</p><img style='display: inline-block; margin-left: 100px; position: absolute; top: 150px;' src='papel.jpg' alt=''><p style='margin-left:500px; margin-top: 200px; font-size: 80px;'>X</p><p style='margin-left:700px; position: absolute; font-size: 30px; margin-top: -400px;'>COMPUTADOR:</p><img id='FINAL' style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='tesoura.jpg' alt=''><p style='margin-left:420px; position: absolute; font-size: 50px; margin-top: -420px; color: red;'>PERDEU!</p><button id='AbrirFechar' onclick='FecharADiv()' style='position: absolute; width = 10px; height = 10px; left = -90%; top: 0px;'>x</button></div>";
    }
}

function ClicouTesoura(){
    if (XR == 1){
        document.getElementById("ESCOLHAS").innerHTML = "<div id = 'ESCOLHAS1'><p style='margin-left:85px; margin-top: 60px; font-size: 30px;'>VOCÊ ESCOLHEU:</p><img style='display: inline-block; margin-left: 100px; position: absolute; top: 150px;' src='tesoura.jpg' alt=''><p style='margin-left:500px; margin-top: 200px; font-size: 80px;'>X</p><p style='margin-left:700px; position: absolute; font-size: 30px; margin-top: -400px;'>COMPUTADOR:</p><img id='FINAL' style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='pedra.jpg' alt=''><p style='margin-left:420px; position: absolute; font-size: 50px; margin-top: -420px; color: red;'>PERDEU!</p><button id='AbrirFechar' onclick='FecharADiv()' style='position: absolute; width = 10px; height = 10px; left = -90%; top: 0px;'>x</button></div>";
    } else if (XR == 2){
        document.getElementById("ESCOLHAS").innerHTML = "<div id = 'ESCOLHAS1'><p style='margin-left:85px; margin-top: 60px; font-size: 30px;'>VOCÊ ESCOLHEU:</p><img style='display: inline-block; margin-left: 100px; position: absolute; top: 150px;' src='tesoura.jpg' alt=''><p style='margin-left:500px; margin-top: 200px; font-size: 80px;'>X</p><p style='margin-left:700px; position: absolute; font-size: 30px; margin-top: -400px;'>COMPUTADOR:</p><img id='FINAL' style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='papel.jpg' alt=''><p style='margin-left:420px; position: absolute; font-size: 50px; margin-top: -420px; color: red;'>GANHOU!</p><button id='AbrirFechar' onclick='FecharADiv()' style='position: absolute; width = 10px; height = 10px; left = -90%; top: 0px;'>x</button></div>";
    } else if (XR == 3){
        document.getElementById("ESCOLHAS").innerHTML = "<div id = 'ESCOLHAS1'><p style='margin-left:85px; margin-top: 60px; font-size: 30px;'>VOCÊ ESCOLHEU:</p><img style='display: inline-block; margin-left: 100px; position: absolute; top: 150px;' src='tesoura.jpg' alt=''><p style='margin-left:500px; margin-top: 200px; font-size: 80px;'>X</p><p style='margin-left:700px; position: absolute; font-size: 30px; margin-top: -400px;'>COMPUTADOR:</p><img id='FINAL' style='display: inline-block; margin-left: 700px; position: absolute; top: 150px;' src='tesoura.jpg' alt=''><p style='margin-left:420px; position: absolute; font-size: 50px; margin-top: -420px; color: red;'>EMPATE!</p><button id='AbrirFechar' onclick='FecharADiv()' style='position: absolute; width = 10px; height = 10px; left = -90%; top: 0px;'>x</button></div>";
    }
}

const SomarNoMeu = document.getElementById('MaisEu');

let count = 0;
let IntervalId = 0;

function MudarValorMeu(){
    document.getElementById("PlacarSeu").innerHTML = count;
}

function MudarValorPc(){
    document.getElementById("PlacarPC").innerHTML = count;
}

function AumentarEuUm(){
     IntervalId = setInterval (() => {
             count += 1;
            MudarValorMeu();
         }, 100);
}

function DiminuirEuUm(){
     IntervalId = setInterval (() => {
            count -= 1;
           MudarValorMeu();
         }, 100);
}

function AumentarRoboUm(){
    IntervalId = setInterval (() => {
            count += 1;
           MudarValorPc();
        }, 100);
}

function DiminuirRoboUm(){
    IntervalId = setInterval (() => {
           count -= 1;
          MudarValorPc();
        }, 100);
}

function ParaAdicaoEu(){
    clearInterval(IntervalId);
}

function Resetar1(){
    count = 0;
    MudarValorMeu();
}

function Resetar2(){
    count = 0;
    MudarValorPc();
}

function FecharADiv(){
    document.getElementById("ESCOLHAS1").style.display = "none";
}