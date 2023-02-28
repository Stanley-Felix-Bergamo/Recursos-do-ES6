const redesSociais = ['Facebook', 'Instagram', 'Twitter'];
const alunos = ['Stanley', 'Josue', 'Stevão', 'Elias', 'Emanuel', 'Grabriel'];
const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < redesSociais.length; i++) {

    console.log(`Eu tenho um perfil na rede social:${redesSociais[i]}`);
}

console.log('\n');
////////////////////////////////////////////////////////////////////////////////

redesSociais.forEach(function (nomeRede, indice) {

    console.log(`#${indice} Eu tenho um perfil na rede social:${nomeRede}`);
});

console.log('\n');
////////////////////////////////////////////////////////////////////////////////

const alunosMatriculado = alunos.map(function (itemAtual) {

    return itemAtual = {
        nome: itemAtual,
        curso: 'Front-end'
    }
});

alunosMatriculado.push({

    nome: 'Eliseu',
    curso: 'Back-End'
});

console.log(alunosMatriculado);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

const dobrarNumeros = numeros.map(function (numeroAtual) {

    return numeroAtual *= 2;
});

console.log(dobrarNumeros);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

const Stanley = alunosMatriculado.find(function (item) {
    return item.nome = 'Stanley';
});

console.log(Stanley);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

const indiceDeEmanuel = alunosMatriculado.findIndex(function (item) {
    return item.nome == 'Emanuel';
});

console.log('Indice do Emanuel é:', indiceDeEmanuel);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

const alunosFront = alunosMatriculado.every(function (item) {
    return item.curso === "Front-end";
});

console.log('Todos os Alunos estão cursando Front-end ? :', alunosFront);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

const alunosBack = alunosMatriculado.some(function (item) {
    return item.curso === "Back-End";
});

const alunosFullStack = alunosMatriculado.some(function (item) {
    return item.curso === "Back-End" && item.curso === "Front-end";
});

console.log('Tem algum aluno cursando Back-End ? :', alunosBack);
console.log('\n');

console.log('Tem algum aluno Full-Stack ? :', alunosFullStack);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

const quaisAlunos = alunosMatriculado.filter(function (item) {

    return item.curso === "Back-End";
});


console.log('Quais alunos estudam Back-End ?:', quaisAlunos);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

const somar = numeros.reduce(function (acumulador, itemAtual) {

    acumulador += itemAtual;
    return acumulador;
}, 0);

console.log('a Soma dos Arrays é :', somar);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////

const nomeAlunos = alunosMatriculado.reduce(function (acumulador, itemAtual) {

    return acumulador += `${itemAtual.nome} ,`;
}, '');

console.log('Alunos :', nomeAlunos);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////