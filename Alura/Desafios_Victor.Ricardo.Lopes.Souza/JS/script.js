alert("Bem vindo ao site");
let nota1 = Number(prompt("Digite sua nota: "));
let nota2 = Number(prompt("Digite sua segunda nota: "));
let media = (nota1 + nota2) / 2;

if (media >= 6){
    alert("Aprovado");
} else {
    alert("Reprovado");
}
