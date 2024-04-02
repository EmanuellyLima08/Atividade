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
  let text = document.getElementById("palavra").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  for (let index = 0; index < array.length; index++) {}
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
      result.innerText = `A soma do número é ${somar}. A média da soma é ${somar / num}`;
    }
    error.innerHTML = "";
  }
};

//Atividade 11
const exercicio11 = () => {
let resposta = document.getElementById("resposta");
  for (let i = 1; contador <= 100; i++) {
    if (contador % 3 == 0) 
    contador ++
    resposta.innerHTML = `${contador}`;
  }
}
