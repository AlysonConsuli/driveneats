function wpp(){
    prompt('Nome: ');
    prompt('Endereço: ');
}

function selecionarCarne(caixa){
    //const caixa = document.querySelector('.opcao')

    const secaoCarne = document.querySelector(".carne");
  
    const carne1 = document.querySelector('.carne .um')
    carne1.classList.remove('boxGreen')
    const iconeCarne1 = carne1.querySelector('ion-icon')
    iconeCarne1.classList.add('escondido')
    
    const carne2 = document.querySelector('.carne .dois')
    carne2.classList.remove('boxGreen')
    const iconeCarne2 = carne2.querySelector('ion-icon')
    iconeCarne2.classList.add('escondido')

    const carne3 = document.querySelector('.carne .tres')
    carne3.classList.remove('boxGreen')
    const iconeCarne3 = carne3.querySelector('ion-icon')
    iconeCarne3.classList.add('escondido')
    
    caixa.classList.add('boxGreen')
    const icone = caixa.querySelector('ion-icon')
    icone.classList.remove('escondido')

    secaoCarne.classList.add('temCaixa')
    
    fecharPedido()
}

function selecionarBebida(caixa){

    const secaoBebida = document.querySelector(".bebida");
    
    const bebida1 = document.querySelector('.bebida .um')
    bebida1.classList.remove('boxGreen')
    const iconeBebida1 = bebida1.querySelector('ion-icon')
    iconeBebida1.classList.add('escondido')

    const bebida2 = document.querySelector('.bebida .dois')
    bebida2.classList.remove('boxGreen')
    const iconeBebida2 = bebida2.querySelector('ion-icon')
    iconeBebida2.classList.add('escondido')

    const bebida3 = document.querySelector('.bebida .tres')
    bebida3.classList.remove('boxGreen')
    const iconeBebida3 = bebida3.querySelector('ion-icon')
    iconeBebida3.classList.add('escondido')
    
    caixa.classList.add('boxGreen')
    const icone = caixa.querySelector('ion-icon')
    icone.classList.remove('escondido')

    secaoBebida.classList.add('temCaixa')

    fecharPedido()
}

function selecionarSobremesa(caixa){
    
    const secaoSobremesa = document.querySelector('.sobremesa')

    const sobremesa1 = document.querySelector('.sobremesa .um')
    sobremesa1.classList.remove('boxGreen')
    const iconeSobremesa1 = sobremesa1.querySelector('ion-icon')
    iconeSobremesa1.classList.add('escondido')

    const sobremesa2 = document.querySelector('.sobremesa .dois')
    sobremesa2.classList.remove('boxGreen')
    iconeSobremesa2 = sobremesa2.querySelector('ion-icon')
    iconeSobremesa2.classList.add('escondido')

    const sobremesa3 = document.querySelector('.sobremesa .tres')
    sobremesa3.classList.remove('boxGreen')
    const iconeSobremesa3 = sobremesa3.querySelector('ion-icon')
    iconeSobremesa3.classList.add('escondido')

    caixa.classList.add('boxGreen')
    const iconeCaixa = caixa.querySelector('ion-icon')
    iconeCaixa.classList.remove('escondido')

    secaoSobremesa.classList.add('temCaixa')

    fecharPedido()
}

function fecharPedido(){
    const secaoCarne = document.querySelector(".carne");
    const secaoBebida = document.querySelector(".bebida");
    const secaoSobremesa = document.querySelector('.sobremesa')
    
    const selecionouCarne = secaoCarne.classList.contains('temCaixa')
    const selecionouBebida = secaoBebida.classList.contains('temCaixa')
    const selecionouSobremesa = secaoSobremesa.classList.contains('temCaixa')
    
    const botao = document.querySelector('button')
    const textoBotao = botao.querySelector('span')

    if(selecionouCarne && selecionouBebida && selecionouSobremesa){
        textoBotao.innerHTML = 'Fechar pedido'
        botao.classList.add('fundoVerde')
    }
   
}