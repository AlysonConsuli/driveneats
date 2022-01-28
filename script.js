function wpp(){
    prompt('Nome: ');
    prompt('Endereço: ');
}

function selecionarCarne(caixa){
    //const caixa = document.querySelector('.opcao')

    const secaoCarne = document.querySelector(".carne");
    //const possuiCaixaNaCarne = secaoCarne.classList.contains("temCaixa");
    
    //if(possuiCaixaNaCarne){
        const op1 = document.querySelector('.um')
        op1.classList.remove('boxGreen')
        const icone1 = op1.querySelector('ion-icon')
        icone1.classList.add('escondido')
        
        const op2 = document.querySelector('.dois')
        op2.classList.remove('boxGreen')
        const icone2 = op2.querySelector('ion-icon')
        icone2.classList.add('escondido')

        const op3 = document.querySelector('.tres')
        op3.classList.remove('boxGreen')
        const icone3 = op3.querySelector('ion-icon')
        icone3.classList.add('escondido')
        
        caixa.classList.add('boxGreen')
        const icone = caixa.querySelector('ion-icon')
        icone.classList.remove('escondido')

        secaoCarne.classList.add("temCaixa")

    /*}else{
        caixa.classList.add('boxGreen')
        const icone = caixa.querySelector('ion-icon')
        icone.classList.remove('escondido')
        secaoCarne.classList.add("temCaixa")
    }*/

}

/*function selecionarBebida(caixa){

    const secaoCarne = document.querySelector(".carne");
    
    const op1 = document.querySelector('.um')
    op1.classList.remove('boxGreen')
    const icone1 = op1.querySelector('ion-icon')
    icone1.classList.add('escondido')
    
    const op2 = document.querySelector('.dois')
    op2.classList.remove('boxGreen')
    const icone2 = op2.querySelector('ion-icon')
    icone2.classList.add('escondido')

    const op3 = document.querySelector('.tres')
    op3.classList.remove('boxGreen')
    const icone3 = op3.querySelector('ion-icon')
    icone3.classList.add('escondido')
    
    caixa.classList.add('boxGreen')
    const icone = caixa.querySelector('ion-icon')
    icone.classList.remove('escondido')

    secaoCarne.classList.add("temCaixa")
}*/