let x = 10;
let y = 5;
let proposicao1;
let proposicao2;
let proposicao3;
let proposicao4;
let resposta;

proposicao1 = x > y;
console.log("\nA proposicao_01 é: " + proposicao1);

proposicao2 = x < y;
console.log("\nA proposicao_02 é: " + proposicao2);

proposicao3 = x != y;
console.log("\nA proposicao_03 é: " + proposicao3);

proposicao4 = x == y;
console.log("\nA proposicao_04 é: " + proposicao4);


console.log("\n Conjunção"); // Conjunção


resposta = proposicao1 ^ proposicao3;
console.log("\nproposicao_01 e proposicao_03: " + resposta);

resposta = proposicao2 ^ proposicao4;
console.log("\nproposicao_02 e proposicao_04: " + resposta);

resposta = proposicao1 ^ proposicao2;
console.log("\nproposicao_01 e proposicao_02: " + resposta);

resposta = proposicao3 ^ proposicao4;
console.log("\nproposicao_03 e proposicao_04: " + resposta);




