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

    secaoCarne.classList.add("temCaixa")
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

    secaoBebida.classList.add("temCaixa")
}