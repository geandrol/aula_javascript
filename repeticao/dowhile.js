import leia from 'readline-sync';

let continuar = false;

do{
 
    console.log("joguinho de adivinhação!");
    let numero = leia.questionInt("Digite um numero:  ");
    const numeroSecreto = Math.floor(Math.random() * 11);

    if(numero == numeroSecreto){
        console.log("Acertou!");
    }else{
        console.log("Errou!");  
        console.log("O numero secreto era: " + numeroSecreto);
    }

   continuar = leia.keyInYN("Quer continuar jogando pague R$ 350? ");

}while(continuar);