//Atividade 01
const exercicio1 = () => {
    document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `| ${i} `;
  }
};

//Atividade 02
const exercicio2 = () => {
    let resultado = document.getElementById("resultado")
    document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>";
  let num = document.getElementById("num").value;
  for (let i = 0; i <= num; i += 2) {
    document.getElementById("resposta").innerHTML += `| ${i}`;
  }
};

//Atividade 03
const exercicio3 = () => {
    let num = document.getElementById("num").value;
    if (num % num == 0) {
        document.getElementById("resultado").innerHTML = `${num} é um número primo!`
    } else {
        document.getElementById("erro").innerHTML = `${num} não é um número primo!` 
    }
};
