//Atividade 01
const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `| ${i} `;
  }
};

//Atividade 02
const exercicio2 = () => {
  let resultado = document.getElementById("resultado");
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  let num = document.getElementById("num").value;
  for (let i = 0; i <= num; i += 2) {
    document.getElementById("resposta").innerHTML += `| ${i}`;
  }
};

//Atividade 03
const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `${num} não é válido! Informar um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";
    let primo = true; //declarei variável para primo
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }
    primo
      ? (result.innerText = `${num} é um número primo!`)
      : (error.innerText = `${num} não é um número primo!`);
  }
};

//Atividade 04
const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let resultado = document.getElementById("resultado");
  for (let i = 0; i <= 10; i++) {
    resultado.innerText = `${num} . 0 = ${num * 0} 
  ${num} . 1 = ${num * 1}
  ${num} . 2 = ${num * 2}
  ${num} . 3 = ${num * 3}
  ${num} . 4 = ${num * 4}
  ${num} . 5 = ${num * 5}
  ${num} . 6 = ${num * 6}
  ${num} . 7 = ${num * 7}
  ${num} . 8 = ${num * 8}
  ${num} . 9 = ${num * 9}
  ${num} . 10 = ${num * 10}`;
  }
};

//Atividade 05
const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  contador = 0;

  if (num <= 0) {
    error.innerText = `${num} não é válido! Informar um número positivo!`;
    result.innerText = "";
  } else {
    while (num >= contador) {
      if (contador % 2 !== 0) result.innerText += ` | ${contador}`;
      contador++;
    }
    error.innerHTML = "";
  }
};

//Atividade 06
const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let somar = 0;
  contador = 0;

  if (num <= 0) {
    error.innerText = `${num} não é válido! Informar um número positivo!`;
    result.innerText = "";
  } else {
    while (num >= contador) {
      if (contador % 2 == 0) somar += contador;
      contador++;
    }
    error.innerHTML = "";
    result.innerText = `${somar}`;
  }
};

//Atividade 07
const exercicio7 = () => {
  //let num = document.getElementById("num").value;
  let resposta = document.getElementById("resposta");

  while (contador > 0) {
    resposta.innerHTML += `| ${contador} `;
    contador--;
  }
};
contador = 10;

//Atividade 08
const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";
  let inversa = "";

  if (palavra == "") {
    error.innerText = `Informe uma palavra!`;
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};

//Atividade 09
let resposta = document.getElementById("resposta");
let somar = 0;

const exercicio9 = () => {
  for (let i = 1; contador <= 100; i++) {
    if (i <= 100) somar += contador;
    contador++;
  }
  resposta.innerText = `${somar}`;
};
contador = 1;

//Atividade 10
const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  contador = 0;

  //result.innerText = "";
  if (num <= 0) {
    error.innerText = `${num} não é válido! Informar um número positivo!`;
    result.innerText = "";
  } else {
    while (num >= contador) {
      somar += contador;
      contador++;
      result.innerText = `A soma do número é ${somar}. A média da soma é ${
        somar / num
      }`;
    }
    error.innerHTML = "";
  }
};

//Atividade 11
const exercicio11 = () => {
  let resposta = document.getElementById("resposta");

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      resposta.innerText += ` | ${i} `;
    }
  }
};

//Atividade 12
const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let soma = 0;

  result.innerText = "";
  if (num <= 0) {
    error.innerText = `${num} não é válido! Informar um número positivo!`;
    result.innerText = "";
  } else {
    for (let i = 0; i < num.length; i++) {
      soma += parseInt(num[i]);
    }
    result.innerHTML += `${soma}`;
    error.innerText = "";
  }
};

//Atividade 13
const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let menor, maior;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  } else {
    menor = num2;
    maior = num1;
  }

  if (menor <= 0 || maior <= 0) {
    error.innerText = `O número não é válido! Insira um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let numPrimo = menor; numPrimo <= maior; numPrimo++) {
      let primo = true;
      for (let i = 2; i < numPrimo; i++) {
        if (numPrimo % i == 0) primo = false;
      }
      primo && (result.innerText += ` | ${numPrimo} `);
    }
  }
};

//Atividade 14
const exercicio14 = () => {
  let lado1 = document.getElementById("num1").value;
  let lado2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  error.innerText = "";
  if (lado1 >= 0 && lado2 >= 0) {
    let area = lado1 * lado2;
    result.innerHTML = `A área é ${area}`;
  } else {
    error.innerText = `Informe um número postivo!`;
    result.innerHTML = "";
  }
};

//Atividade 15
const exercicio15 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let frase = document.getElementById("palavra").value;
  let sim = frase.split("");
  let vogais = ["a", "e", "i", "o", "u"];
  let consoantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  result.innerText = "";
  error.innerText = "";
  if (frase == "") {
    error.innerText = "Digite frase";
  } else {
    for (let p = 0; p < frase.length; p++) {
      for (let i = 0; i < vogais.length; i++) {
        if (frase[p] == vogais[i]) {
          result.innerText += vogal = ` | ${frase[p]} `;
        }
      }
      for (let s = 0; s < consoantes.length; s++) {
        if (frase[p] == consoantes[s]) {
          error.innerText += consoante = ` | ${frase[p]} `;
        }
      }
    }
  }
};

//Atividade 16
const exercicio16 = () => {
  let raio = document.getElementById("num1").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  error.innerText = "";

  if (raio > 0) {
    let circunf = 2 * Math.PI * raio;
    result.innerHTML = `A área de um círculo com ${raio} de raio é: ${circunf.toFixed(
      2
    )}`;
  } else {
    error.innerText = `Informe um número positivo!`;
    result.innerHTML = "";
  }
};

//Atividade 17
const exercicio17 = () => {
  let base = document.getElementById("num1").value;
  let altura = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  error.innerText = "";
  if (base >= 0 && altura >= 0) {
    let area = (base * altura) / 2;
    result.innerHTML = `A área é ${area}`;
  } else {
    error.innerText = `Informe um número postivo!`;
    result.innerHTML = "";
  }
};

//Atividade 18
const exercicio18 = () => {
  let baseMaior = document.getElementById("num1").value * 1; // utilizar o *1 ou usar perseFloat
  let baseMenor = document.getElementById("num2").value * 1;
  let altura = document.getElementById("num3").value * 1;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  error.innerText = "";
  if (baseMaior >= 0 && baseMenor >= 0 && altura >= 0) {
    let area = ((baseMaior + baseMenor) * altura) / 2;
    result.innerHTML = `A área é ${area}`;
  } else {
    error.innerText = `Informe um número postivo!`;
    result.innerHTML = "";
  }
};

//Atividade 19
const exercicio19 = () => {
  let dataNascString = document.getElementById("data").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let dataNasc = new Date(dataNascString);
  let dataAtual = new Date();
  let difAnos;

  if (!isNaN(dataNasc.getTime())) {
    // isNaN() verifica se um valor não é um número (NaN - "Not a Number")
    difAnos = dataAtual.getFullYear() - dataNasc.getFullYear();

    if (
      dataAtual.getMonth() < dataNasc.getMonth() ||
      (dataAtual.getMonth() === dataNasc.getMonth() &&
        dataAtual.getDate() < dataNasc.getDate())
    ) {
      difAnos--;
    }

    console.log(difAnos);
    result.innerHTML = `O usuário tem ${difAnos} anos!`;
    error.innerHTML = "";
  } else {
    error.innerHTML = `Data inválida!`;
    result.innerHTML = "";
  }
};

//Atividade 20
const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let fraseInv = "";

  if (frase === "") {
    error.innerText = "Insira uma frase!";
    result.innerText = "";
  } else {
    for (var i = frase.length - 1; i >= 0; i--) {
      fraseInv += frase[i];
    }
    result.innerText = `${fraseInv}`;
    error.innerText = "";
  }
};

//Atividade 21
const exercicio21 = () => {
  let texto = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let frase = texto.split(" ");

  error.innerText = "";
  result.innerText = "";
  if (texto == "") {
    error.innerText = `Insira uma frase!`;
  } else {
    let novoTexto = frase.join("");
    result.innerText = `${novoTexto}`;
  }
};

//Atividade 22
var soma1 = 0;
const exercicio22 = () => {
  let num = parseInt(document.getElementById("num").value);
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let contador = 0;

  if (num <= 0 || isNaN(num)) {
    //para verificar se num é um número válido
    error.innerText = `${num} não é válido! Insira um número positivo!`;
    result.innerText = "";
  } else if (soma1 <= 100) {
    soma1 += parseInt(num);
    result.innerText = soma1;
    error.innerText = "";
    contador++;
  }
};

//Atividade 23
const exercicio23 = () => {
  let frase = document.getElementById("frase").value.toLowerCase();
  let palavra = document.getElementById("palavra").value.toLowerCase();
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let palavrasFrase = frase.split(" ");
  let contador = 0;

  for (let i = 0; i < palavrasFrase.length; i++) {
    if (palavrasFrase[i] === palavra) {
      contador++;
    } else {
      error.innerText = `Preencha os campos!`;
      result.innerText = "";
    }
  }
  result.innerText = `A palavra '${palavra}' apareceu ${contador} vezes na frase!`;
  error.innerText = "";
};

//Atividade 24
const exercicio24 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

}

//Atividade 25
