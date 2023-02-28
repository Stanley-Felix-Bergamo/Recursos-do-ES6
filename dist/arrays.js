"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
var alunos = ['Stanley', 'Josue', 'Stevão', 'Elias', 'Emanuel', 'Grabriel'];
var numeros = [1, 2, 3, 4, 5];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho um perfil na rede social:".concat(redesSociais[i]));
}
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

redesSociais.forEach(function (nomeRede, indice) {
  console.log("#".concat(indice, " Eu tenho um perfil na rede social:").concat(nomeRede));
});
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

var alunosMatriculado = alunos.map(function (itemAtual) {
  return itemAtual = {
    nome: itemAtual,
    curso: 'Front-end'
  };
});
alunosMatriculado.push({
  nome: 'Eliseu',
  curso: 'Back-End'
});
console.log(alunosMatriculado);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

var dobrarNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual *= 2;
});
console.log(dobrarNumeros);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

var Stanley = alunosMatriculado.find(function (item) {
  return item.nome = 'Stanley';
});
console.log(Stanley);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

var indiceDeEmanuel = alunosMatriculado.findIndex(function (item) {
  return item.nome == 'Emanuel';
});
console.log('Indice do Emanuel é:', indiceDeEmanuel);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

var alunosFront = alunosMatriculado.every(function (item) {
  return item.curso === "Front-end";
});
console.log('Todos os Alunos estão cursando Front-end ? :', alunosFront);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

var alunosBack = alunosMatriculado.some(function (item) {
  return item.curso === "Back-End";
});
var alunosFullStack = alunosMatriculado.some(function (item) {
  return item.curso === "Back-End" && item.curso === "Front-end";
});
console.log('Tem algum aluno cursando Back-End ? :', alunosBack);
console.log('\n');
console.log('Tem algum aluno Full-Stack ? :', alunosFullStack);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

var quaisAlunos = alunosMatriculado.filter(function (item) {
  return item.curso === "Back-End";
});
console.log('Quais alunos estudam Back-End ?:', quaisAlunos);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

var somar = numeros.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log('a Soma dos Arrays é :', somar);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

var nomeAlunos = alunosMatriculado.reduce(function (acumulador, itemAtual) {
  return acumulador += "".concat(itemAtual.nome, " ,");
}, '');
console.log('Alunos :', nomeAlunos);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////