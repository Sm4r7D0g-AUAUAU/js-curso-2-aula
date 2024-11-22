let listaDeNumerosSorteado = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavratentativa}!`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela ('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela ('p','O número secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElemntosNaLista = listaDeNumerosSorteado.length;
    
    if (quantidadeDeElemntosNaLista = 3){
        listaDeNumerosSorteado = [];
    }
    if(listaDeNumerosSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteado.push(numeroEscolhido);
        console.log(listaDeNumerosSorteado)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reinciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
