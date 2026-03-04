import leia from 'readline-sync';

let numero1;
let numero2;
let operador;
let resultado;

numero1 = leia.questionFloat("Digite o primeiro numero: ");
operador = leia.question("Digite o operador: ");
numero2 = leia.questionFloat("Digite o segundo numero: ");

switch (operador) {
    case "+":
        resultado = numero1 + numero2;
        console.log(`${numero1} + ${numero2} = ${resultado.toFixed(2)}`);
        break;

    case "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;

    case "*":
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;

    case "/":
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    default:
        console.log("Operador invalido");
        break;

}
