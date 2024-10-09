function ViraVermelho(){
    let TextoInicial = document.getElementById("apresentacao");
    TextoInicial.style.color = "red";
}

function VirarPreto(){
    let TextoInicial = document.getElementById("apresentacao");
    TextoInicial.style.color = "black";
}

function PiscarComeco(){
    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
        if (soma % 2 == 0){
            let piscando1 = document.getElementById('ComecarJogo');
            piscando1.style.backgroundColor = "white"
            piscando1.style.color = "red"
        }else {
            let piscando2 = document.getElementById('ComecarJogo');
            piscando2.style.backgroundColor = "red"
            piscando2.style.color = "white"
        }
    }, 300);
}

function PiscarFim(){
    //clearTimeout(tempo);
    //document.getElementById('tempo').innerHTML = "Parou a Contagem"; //esse comando faz o setTimeOut parar
    clearInterval(tempo);
    let piscando3 = document.getElementById('ComecarJogo');
    piscando3.style.backgroundColor = "red"
    piscando3.style.color = "white"
}

function comecou(){
   window.location = "jogo.html";
}