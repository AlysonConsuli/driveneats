function wpp(){
    prompt('Nome: ');
    prompt('Endereço: ');
}

function deselecionar(classeSecao){
    const selecionado = document.querySelector('.'+classeSecao+' .boxGreen');
    if (selecionado !== null) {
        selecionado.classList.remove('boxGreen');
        const iconeSelecionado = selecionado.querySelector('ion-icon');
        iconeSelecionado.classList.add('escondido');
    }
}

function selecionar(clicado, classeSecao) {
    deselecionar(classeSecao);
    clicado.classList.add("boxGreen");
    const icone = clicado.querySelector("ion-icon");
    icone.classList.remove("escondido");
    
    const secaoSelecionada = document.querySelector('.'+classeSecao)

    secaoSelecionada.classList.add('selecionou')

    fecharPedido()
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
