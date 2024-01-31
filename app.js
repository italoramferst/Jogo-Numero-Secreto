let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10:');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', "Acertou");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', "o numero secreto é menor");
        }else{
            exibirTextoNaTela('p', "o numero secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroaleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElemtnosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElemtnosNaLista == numeroLimite){
    listaDeNumerosSorteados = []
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroaleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector ('input');
     chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroaleatorio ();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disablled',true);
}