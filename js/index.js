document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";
// document.getElementById("texto").innerHTML = * essa é umas das formas de realizar uma saída utilizando o ID do elemento
// alert(10+5);
// O alert cria uma caixa flutuante de interação com o usuário (faz funções matemáticas também)
// console.log("Oi, isso é um console.log");
// Esse comando manda uma mensagem atraves do modo desenvolvedor do navegador
let a,b,c;
a=5;
b=6;
c=7;
function minhafuncao(){
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);
    // Dentro das chaves você pode colocar um conjunto de comandos JSON,
    // Nesse exemplo todos eles estarão dentro da variável minhafuncao
}
// as palavras var let e const são utilizadas para declarar variáveis
var d =1;
var e = 5;
var f = d + e;
console.log (f);

// A partir de agora a aula é sobre variáveis

// var pote = "bombom";
// alert(pote);
// var g = 2;
// var h = 3;
// var i = g + h;
// alert(i);

// LET: Essa palavra-chave faz uma variável ser declarada apenas uma vez, assim não podendo mudar o seu valor ao decorrer do código (a não ser que esteja dentro de um escopo (chaves)).
// VAR: Essa palavra-chave é igual ao let, mas podendo atribuir outro valor a ela no decorrer do código.
// CONST: Esse não muda nem fudendo, dentro ou fora de escopo o valor da variável vai ser o primeiro atribuído a ela.
var valor1, valor2, total;
valor1 = 8;
valor2 = 10;
total = (valor1 == valor2)
// alert (total);
// Essa comparação retornar verdadeiro ou falso 9true or false), e para fazela os parâmetros devem estrar entre parenteses)

// == = Parâmentro para verificar se uma variável é igual a outra
// === = Parâmetro para verificar se uma váriavel é do mesmo tipo e igual a outra
// != = Parâmentro para verificar se uma variável é diferente a outra
// < = Verificar se um parâmetro é menor que outro
// > = Verificar se um parâmetro é maior que outro
// <= = Verificar se um parâmetro é menor ou igual que outro
// >= = Verificar se um parâmetro é maior ou igual que outro

var idade, eleitor, resultado;
idade = 18;
eleitor = (idade<18) ? "Não eleitor":"Sim, eleitor";
// alert("A resposta é: "+eleitor)
// Esse operador lógico diz que se a condição foi cumprida será atribuida um valor a varável e caso não seja cumprida o valor atrbuido será outro.

// && = e, por exemplo (idade > 60 && idade < 70) -   Se a idade foi maior que sessenta e menor que setenta.
// || = ou, por exemplo (idade > 60 && idade < 70) -   Se a idade foi maior que sessenta ou menor que setenta.
// Caso coloque uma exclamação antes do parametro, como por exemplo !(idade === 65) você esta invertendo o valor do parâmetro

// A PARTIR DE AGORA A AULA É SOBRE FUNÇÃO
function soma(valor1, valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10, 10);
// Essa função deixa pré-preparado uma função (como a soma no caso acima) e que pode ser usada a qualquer momento. Basta você inserir os valores que precisa.
function alertaHello(){
    alert("Olá mundo");
}

function paraCelsius(ValorFahrenheit){
    return (5/9) * (ValorFahrenheit - 32);
}

var x = paraCelsius(77);

// alert("A temperatura é de "+x+" graus celsius.")

function minhaFuncao(){
    var x = 2;
}
// SEMPRE QUE FOR CHAMAR A FUNÇÃO TEM QUE BOTAR AS PARENTESES DEPOIS

// A PARTIR DE AGORA A AULA É SOBRE OBJETOS!!!

const carro = {
    marca:"ford",
    modelo:"kar",
    ano:2015,
    placa:"HLT-1807",
    buzina: function(){alert("Biiiiiiiii")},
    completo: function(){
        return "A marca é "+ this.marca + " e o modelo é: "+ this.modelo
    }
};
// Para criar um objeto você usa chaves e dentro dela você utiliza dois pontos para preencher as especificações.
// Você pode criar funções dentro do objeto
// console.log(carro.marca);

// carro.buzina();

console.log(carro.completo());

// A PARTIR DA AGORA A AULA É SOBRE EVENTOS!!!

// ANOTAÇÕES:
// onclick => disparado quando recebe um click
// ondblclick => disparado quando click duplo
// onmouseover => disparado quando o mouse está sobre
// onmouseout => disparado quando o mouse sai do objeto
// onmousemove => disparado quando o mouse é movido no elemento
// onmousedown => disparado quando o click do botão for pressionado
// onmouseup = > disparado quando o click do mouse é solto
// onfocus => disparado quando o elemento recebe o foco. Válido para input
// onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
// onblur => disparado quando o elemento perde o foco
// onkeydown => disparado quando uma tecla é pressionada 
// onkeypress => disparado quando uma tecla é pressionada e solta
// onkeyup => disparado quando uma tecla é solta sobre o elemento
// onload => disparado quando a página terminou de ser carregada. Body
// onresize => disparado quando há um redimencionamento da janela

function eventoClick(){
    // alert("Você acinou um evento de click!");
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick(){
    // alert("Você acinou um evento de click!");
    document.body.style.backgroundColor = "red";
}

function ViraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function ViraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function AdicionaTexto(){
    let p = document.getElementById("teste");
    p.append("O mouse está se movendo");
    // O p é de paragrafo e o append serve para adicionar elementos.
}

function LimpaTexto(){
    document.getElementById("CampoTexto").value = "";
}

function Mudou(){
    console.log("mudou");
}

function TeclaPressionada(){
    let input = document.getElementById("CampoTexto2").value;
    console.log(input);
}

// A PARTIR DE AGORA A AULA É SOBRE MATRIZES

// Exemplos de matriz:
// a) const lista = [];
// lista[0] = arroz;
// lista[1] = feijao;
// lista[2] = sal;

// b) const lista = ["arroz","feijão","sal"];

// c) const lista = new Array["arroz","feijão","sal"];

const pessoa = ["Juan","Victor", 21];
// alert("o tamanho da matriz é: "+pessoa.length); //esse comando retorna quantas casas tem a matriz.

pessoa.push("Brasileiro"); // esse comando adiciona um elemento a matriz

console.log(pessoa); //esse comando adiciona um item à matriz.
pessoa[pessoa.length] = "mineiro" //esse comando adiciona um item à matriz.

Array.isArray(pessoa); //comando para saber se a variável é uma matriz ou não.

// pessoa.push("Brasileiro"); // esse comando adiciona um elemento a matriz
// pessoa.pop(); // o método .pop remove o ultimo item da matriz
// pessoa.shift(); // esse método remove o primeiro item da matriz
// pessoa.unshift("O gostoso do "); // esse método adiciona um elemento em primeiro lugar na matriz.
// delete pessoa[0]; // esse método coloca o valor undefined na casa escolhida.
// pessoa.splice(1,0,"Item1", "Item2"); // o primeiro número é a casa em que você vai adicionar o elemente, o segundo vai ser quantos serão os itens excluídos e após isso vem os elementos em si.
document.getElementById("texto").innerHTML = pessoa.join(" - "); // o método join permite inserir elementos entre as casas das matrizes.

const Lista1 = ["Arroz", "Feijão", "Leite", "Macarrão"];
const Lista2 = ["Suco", "Refrigerante", "Carne"];
const Lista3 = ["Salgadinho"];

const JuncaoDeLista = Lista1.concat(Lista2, Lista3); // Esse método junta duas matrizes

document.getElementById("TesteMatriz").innerHTML = JuncaoDeLista;

const jogadores = [
    "biro biro",
    "neymar",
    "pele",
    "maradona",
    "neymar",
    "messi",
    "vampeta",
    "juan"];
//const craques = jogadores.slice(2,6); //esse comando faz a matriz pegar a partir de onde você mandar até onde mandar, porém a casa que você colocar como parâmetro final não irá entrar junto com as selecionadas.

//const JogadoresOrdemAlfabética = jogadores.sort(); // o comando .sort deixa a matriz em ordem alfabética.
//document.getElementById("texto").innerHTML = JogadoresOrdemAlfabética;
//jogadores.reverse() // esse comando retorna a matriz ao contrário.

const numeros = [
    40,
    100,
    1,
    5,
    25,
    10];

numeros.sort (function (a,b) {return a -  b}); //Esse comando deixa a matriz de números em ordem crescente e se fizer b - a ele irá fazer em ordem decrescente.

function MaiorNumero(array){
    return Math.max.apply(null, array);
}
// Essa função selecionar o maior número da matriz.

// document.getElementById("texto").innerHTML = MaiorNumero(numeros);

function MenorNumero(array){
    return Math.min.apply(null, array);
}
// Essa função selecionar o menor número da matriz.

// document.getElementById("texto").innerHTML = MenorNumero(numeros);

function MaiorNumero(array){
    return Math.max.apply(null, array);
}
// Essa função selecionar o maior número da matriz.

const Maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
    return value > 20;
}

document.getElementById("texto").innerHTML = Maior20;

// IF e ELSE:

// var hora = new Date().getHours();
// alert(hora);

// if (hora < 12){
//     alert("Bom dia");
// }else if(hora < 18){
//     alert("Boa tarde!");
// }else{
//     alert("boa noite!");
// }

function verificar(){
    let nome = document.getElementById("Nome").value;

    if(nome == "" || nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "Você malou";
        p.style.color = "green"  
    }
}

// AULA SOBRE SWITCH:

function VerificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    switch (cor){
        case "cinza":
            document.body.style.backgroundColor = "gray";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
        case "preto":
            document.body.style.backgroundColor = "black";
            break;
        default:
            document.getElementById("ErroCor").innerHTML = "Nenhuma cor disponível para: "+ cor;
    }
}

function DiaDaSemana(){
    var dia = new Date().getDay();
    console.log(dia);

    switch (dia){
        case 0:
            document.getElementById("VoltarDiaSemana").innerHTML = "Hoje é domingo.";
            break;
        case 1:
            document.getElementById("VoltarDiaSemana").innerHTML = "Hoje é segunda.";
            break;
        case 2:
            document.getElementById("VoltarDiaSemana").innerHTML = "Hoje é terça.";
            break;
        case 3:
            document.getElementById("VoltarDiaSemana").innerHTML = "Hoje é quarta.";
            break;
        case 4:
            document.getElementById("VoltarDiaSemana").innerHTML = "Hoje é quinta.";
            break;
        case 5:
            document.getElementById("VoltarDiaSemana").innerHTML = "Hoje é sexta.";
            break;
        case 6:
            document.getElementById("VoltarDiaSemana").innerHTML = "Hoje é sábado.";
            break;
        default:
            document.getElementById("ErroCor").innerHTML = "Não sei que dia é hoje...";
    }
}

// A AULA AGORA É SOBRE LAÇOS DE REPETIÇÕES - FOR

for (let i=0; i<11; i++){
    if (i < 10){
        document.getElementById("TesteFor").innerHTML += i+", ";
    }else if(i == 10){
        document.getElementById("TesteFor").innerHTML += i+"."
    }
}

var ano = new Date().getFullYear(); //esse comando preenche a variável com o ano em que estamos.

for (let i=ano; i>=1940; i--){
    document.getElementById("ano").innerHTML += "<option value = '"+i+"'>"+i+"</option>";
}

const carros = ["Gol", "Fusca", "Brasilia", "Del Rey", "Chevette"];
var tamanho = carros.length - 1;

for (let i=0; i <= tamanho; i++){
    if (i < tamanho){
        document.getElementById("TesteCarros").innerHTML += carros[i] + " - ";
    }else if (i == tamanho){
        document.getElementById("TesteCarros").innerHTML += carros[i] + ".";
    }
}

function AtivarContagem() {
   //document.getElementById('tempo').innerHTML = "Começou a contar!";
    //tempo = setTimeout (function () {
        //document.getElementById('tempo').innerHTML = "Executou o SetTimeOut";
    //}, 3000); //Esse comando ativa a função apenas uma vez após dar o tempo definido.
    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;
        document.getElementById('tempo').innerHTML = soma;
        if (soma === 0){
            document.getElementById('tempo').innerHTML = "Tempo esgotado.";
            PararContagem();
        }else {
            document.getElementById('tempo').innerHTML = soma;
        }
    }, 1000);
}

function PararContagem(){
    //clearTimeout(tempo);
    //document.getElementById('tempo').innerHTML = "Parou a Contagem"; //esse comando faz o setTimeOut parar
    clearInterval(tempo);
}

// AGORA A AULA É SOBRE CLASSES

class CarrosClasse{
    constructor(Peca1, Peca2, Peca3){
        this.marca = Peca1;
        this.modelo = Peca2;
        this.ano = Peca3;
    }
}

// const CarroClasse = {
//     marca: "Fiat",
//     modelo: "uno",
//     ano: 2001
// }

const uno = new CarrosClasse("Fiat", "Uno", 2001);
console.log(uno); // você pode filtrar colocando ponto e puxando a variável que armazena o dado que deseja.

// MANIPULAÇÃO DE DATAS

let data = new Date(); // Comando base para pegar a data

let ano2024 = data.getFullYear(); //Pegar o ano
let Mes = data.getMonth(); //Ele pega o mês de 0 até 11.
console.log(Mes+1);

const MesesDoAno = ["Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"]

let MesEscrito = MesesDoAno[data.getMonth()];
console.log(MesEscrito);

let DiaMes = data.getDate(); //Pega o dia do mês
console.log(DiaMes);

let DiaSemana = data.getDay();

const DiasDaSemana = ["Domingo",
    "Segunda",
     "Terça",
     "Quarta",
     "Quinta",
      "Sexta",
      "Sabado"]

 let DiaEscrito = DiasDaSemana[data.getDay()];
 console.log(DiaEscrito);

let hora = data.getHours(); // Pega apenas as horas

let minutos = data.getMinutes(); // Pega apenas os minutos

let segundos = data.getSeconds(); // Pega apenas os segundos

let milissegundos = data.getMilliseconds(); // Pega apenas os milissegundos

let DataBr = data.toLocaleString('pt-BR', {timeStyle: 'short' }); //Pega a data no padrão brasileiro, o comando é apenas para puxar a data ou o horário

console.log(DataBr);

var hoje = new Date();
var vencimento = new Date(2025, 0, 15);

if (hoje > vencimento){
    console.log("Sua conta está vencida!");
}else{
    console.log("Ainda não venceu!");
} //Assim se faz a diferença entre duas datas

var DataInicial = new Date();
var DataFinal = new Date(2024, 11, 30);

var DiferencaTempo = DataFinal.getTime() - DataInicial.getTime();

var DiferencaDias = Math.ceil(DiferencaTempo / (24 * 60 * 60 * 1000));
console.log(DiferencaDias + " dias.");

// AULA SOBRE JSON

const casa = {
    tipo: "apartamento",
    andares: "dois",
    modo: ["aluguel", "financiamento", "compra"]
} // Objeto casa

let TextoJson = JSON.stringify(casa); //Esse comando faz o objeto virar uma string, assim podendo ser retornado ao usuário.

document.getElementById("JSON").innerHTML = TextoJson;

let OBJ = JSON.parse(TextoJson); //Transforma de volta em objeto.
console.log(OBJ.modo[0]);


function BuscarCEP (){
    let campoTexto = document.getElementById("CEPzao").value;

    const ajax = new XMLHttpRequest(); //Está falando que vai pegar a informação e algum site
    ajax .open('GET', 'https://viacep.com.br/ws/'+campoTexto+'/json/'); //Você passa o comando e a URL do site
    ajax.send(); //Você pega as informações

    ajax.onload = function (){ //Você está puxando uma função assim que o site carregar
        document.getElementById('TextoJSON').innerHTML = this.responseText;
    }
}

// ajax.onload = function (){ //Você está puxando uma função assim que o site carregar
//     document.getElementById('JSON').innerHTML = this.responseText;
//     let OBJCEP = JSON.parse(this.responseText);
//     // alert(OBJCEP.logradouro);
// }