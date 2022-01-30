let carneSelecionada = null
let bebidaSelecionada = null
let sobremesaSelecionada = null
let precoCarne = 0
let precoBebida = 0
let precoSobremesa = 0
let total = 0

function selecionar(clicado, classeSecao, nome, preco) {
    deselecionar(classeSecao);
    clicado.classList.add("boxGreen");
    const icone = clicado.querySelector("ion-icon");
    icone.classList.remove("escondido");
    
    const secaoSelecionada = document.querySelector('.'+classeSecao)
    secaoSelecionada.classList.add('selecionou')

    if (classeSecao === 'carne'){
        carneSelecionada = nome
        precoCarne = preco
    } else if(classeSecao === 'bebida'){
        bebidaSelecionada = nome
        precoBebida = preco
    } else if(classeSecao === 'sobremesa'){
        sobremesaSelecionada = nome
        precoSobremesa = preco
    }
    total = (precoCarne + precoBebida + precoSobremesa).toFixed(2)

    fecharPedido()
  }

  function deselecionar(classeSecao){
    const selecionado = document.querySelector('.'+classeSecao+' .boxGreen');
    if (selecionado !== null) {
        selecionado.classList.remove('boxGreen');
        const iconeSelecionado = selecionado.querySelector('ion-icon');
        iconeSelecionado.classList.add('escondido');
    }
}

function fecharPedido(){
    const secaoCarne = document.querySelector('.carne')
    const secaoBebida = document.querySelector('.bebida')
    const secaoSobremesa = document.querySelector('.sobremesa')

    let selecionouCarne = secaoCarne.classList.contains('selecionou')
    let selecionouBebida = secaoBebida.classList.contains('selecionou')
    let selecionouSobremesa = secaoSobremesa.classList.contains('selecionou')

    if(selecionouCarne && selecionouBebida && selecionouSobremesa){
        const botao = document.querySelector('button')
        const textoBotao = botao.querySelector('span')
        botao.classList.add('fundoVerde')
        textoBotao.innerHTML = 'Fechar pedido'
    }
}

function wpp() {
    const botao = document.querySelector('button')
    const liberado = botao.classList.contains('fundoVerde')
    if(liberado){
        let nomeComprador = prompt('Qual é o seu nome?')
        let endereco = prompt('Qual é o seu endereço?')
        let msg = 'Olá, gostaria de fazer o pedido: \n- Prato: ' + 
        carneSelecionada + '\n- Bebida: ' + 
        bebidaSelecionada + '\n- Sobremesa: ' + 
        sobremesaSelecionada + '\nTotal: R$ ' + total +
        '\n\nNome: ' + nomeComprador + '\nEndereco: ' + endereco
        window.open("https://wa.me/5522999409879?text=" + encodeURIComponent(msg));
    }
}

function revisao(){
    let revisaoCarne = document.querySelector('.revisaoCarne p:first-child')
    revisaoCarne.innerHTML = carneSelecionada
    let revisaoPrecoCarne = document.querySelector('.revisaoCarne p:last-child')
    revisaoPrecoCarne.innerHTML = precoCarne.toFixed(2).replace(".", ",")
    
    let revisaoBebida = document.querySelector('.revisaoBebida p:first-child')
    revisaoBebida.innerHTML = bebidaSelecionada
    let revisaoPrecoBebida = document.querySelector('.revisaoBebida p:last-child')
    revisaoPrecoBebida.innerHTML = precoBebida.toFixed(2).replace(".", ",")

    let revisaoSobremesa = document.querySelector('.revisaoSobremesa p:first-child')
    revisaoSobremesa.innerHTML = sobremesaSelecionada
    let revisaoPrecoSobremesa = document.querySelector('.revisaoSobremesa p:last-child')
    revisaoPrecoSobremesa.innerHTML = precoSobremesa.toFixed(2).replace(".", ",")

    let revisaoTotal = document.querySelector('.revisaoTotal p:last-child')
    revisaoTotal.innerHTML = 'R$ ' + total.replace(".", ",")

    let fundo = document.querySelector('.fundo')
    fundo.classList.remove('escondido')

    let revisao = document.querySelector('.revisao')
    revisao.classList.remove('escondido')
}

function cancelar(){
    let fundo = document.querySelector('.fundo')
    fundo.classList.add('escondido')

    let revisao = document.querySelector('.revisao')
    revisao.classList.add('escondido')
}