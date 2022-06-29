const visor = document.querySelector('input')

let valor1 =0
let valor2 =0
let op = 0
let limpaVisor = false

document.addEventListener('click', e => {

    let alvo = e.target

    if (alvo.nodeName == 'BUTTON') {

        if (alvo.classList.contains('operacao')){

            valor1= Number(visor.value)

            limpaVisor = true

            if(alvo.textContent == '+'){
            op=1
        }else if(alvo.textContent =='-'){
            op =2
        }else if(alvo.textContent =='x'){
            op =3
        }else if(alvo.textContent =='/'){
            op =4
        }
    
    }else if(alvo.classList.contains('igual')){
        // valor2 =Number(visor.value)
        igual()
    }else if(alvo.classList.contains('limpar')){
       limparVisor()
    }else{
        adicionarVisor(alvo.textContent)
    }
    
    console.log(`${valor1} | ${valor2} | ${op}` )
     
    }
})

let adicionarVisor = numero => {
  
    if(limpaVisor){
        visor.value = ''
        limpaVisor = 0
    }

    if(numero == '0' && visor.value == '0'){
        visor.value=0
    }else if(visor.value =='0'){ 
        visor.value= numero
    }else{
        visor.value += numero
    }
}

let limparVisor = () => {
    
    valor1 =0
     valor2 =0
     op = 0

     visor.value=''
}

let igual = () => {
    let resultado = 0

    valor2 = Number(visor.value)

    switch (op) {
        case 1: //soma
            resultado = valor1 + valor2
            break;
        case 2: //subtraçao
            resultado = valor1 - valor2
            break;
        case 3: //mutiplicaçao
            resultado = valor1 * valor2
            break;
        case 4: //divisao
            resultado = valor1 / valor2
            break;

        default:
            break;
    }

    visor.value = resultado
}










