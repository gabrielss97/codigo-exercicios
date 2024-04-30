/**
 * Função para verificar a quantidade de lados
 * @param {number} quantidadeLados
 * @returns {string}
 */

function solucaoLados(quantidadeLados) {
  if (quantidadeLados == 3) {
    return "TRIANGULO";
  } else if (quantidadeLados == 4) {
    return "QUADRILATERO";
  } else if (quantidadeLados == 5) {
    return "PENTAGONO";
  } else if (quantidadeLados == 6) {
    return "HEXAGONO";
  } else if (quantidadeLados == 7) {
    return "HEPTAGONO";
  } else {
    return "Figura nao reconhecida";
  }
}

console.log(solucaoLados(4)); // Deve retornar "QUADRILATERO"

/**
 * Função para verificar se ganhou ou perdeu
 * @param {string} simbolo1
 * @param {string} simbolo2
 * @param {string} simbolo3
 * @returns {string}
 */

function solucaoPremio(simbolo1, simbolo2, simbolo3) {
  if (simbolo1 === simbolo2 && simbolo2 === simbolo3) {
    return "GANHOU";
  } else {
    return "PERDEU";
  }
}

console.log(solucaoPremio("<3", "<3", "<3")); // Deve retornar "GANHOU"
console.log(solucaoPremio("<3", "s2", "<3")); // Deve retornar "PERDEU"

/**
 * Função para verificar status
 * @param {number[]} aprovados
 * @param {number} numeroInscricao
 * @returns {string}
 */

function solucaoStatus(aprovados, numeroInscricao) {
  for (let index = 0; index < aprovados.length; index++) {
    if (aprovados[index] == numeroInscricao) {
      return "APROVADO";
    }
  }

  return "REPROVADO";

  // if (aprovados.includes(numeroInscricao)) {
  //   return "APROVADO";
  // } else {
  //   return "REPROVADO";
  // }
}

const aprovados = [
  "12",
  "178",
  "1223",
  "109",
  "845",
  "350",
  "4302",
  "1034",
  "2104",
  "2011",
];
const numeroInscricao = "4302";

console.log(solucaoStatus(aprovados, numeroInscricao)); // Deve retornar "APROVADO"

/**
 * Função para calcular valor pago
 * @param {number} minimoParaDesconto
 * @param {number[]} precosCarrinho
 * @param {number} desconto
 * @returns {number}
 */

function calcularValorPago(minimoParaDesconto, precosCarrinho, desconto) {
  let total = 0;

  for (let index = 0; index < precosCarrinho.length; index++) {
    total = total + precosCarrinho[index];
  }

  if (total >= minimoParaDesconto) {
    return total - total * desconto;
  } else {
    return total;
  }
}

const minimoParaDesconto = 70;
const precosCarrinho = [20, 40.5, 1.5, 10, 8];
const desconto = 0.1;

console.log(calcularValorPago(minimoParaDesconto, precosCarrinho, desconto)); // Deve retornar 72
