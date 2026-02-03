//Qual será o valor final de z? Justifique seu raciocínio.

let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);

console.log("Com x = 5 e y = 10, o x++ usa o valor 5 no cálculo, resultando em 5 * (-10) = -50. Dividindo por 2 da -25 e somando o resto de 10 % 3, que é 1, o valor final de z é -24.");