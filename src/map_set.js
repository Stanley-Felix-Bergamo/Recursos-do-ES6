let meuMap = new Map();

meuMap.set('nome', 'Stanley');
meuMap.set('stack', 'html, css, js');
meuMap.set('teste', 'testado');

const nome = meuMap.get('nome');

console.log('\n meuMap:', meuMap);
console.log('\n nome:', nome);
console.log('\n meuMap.size:', meuMap.size);
console.log('\n meuMap.has:', meuMap.has('sobrenome'));

for (let chave of meuMap.keys()) {
    console.log('\n Chaves:', chave);
}

for (let valor of meuMap.values()) {
    console.log('\n Valor:', valor);
}

for (let entrada of meuMap.entries()) {
    console.log('\n Entrada:', entrada);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`\n Entrada formatada, ${chave}: ${valor}`);
}

meuMap.delete('teste');
console.log('\n meuMap.delete() foi chamado:');
console.log('\n meuMap.size:', meuMap.size);


meuMap.clear();
console.log('\n menu.clear() foi chamado');
console.log('\n meuMap.size:', meuMap.size);
console.log('\n');

///////////////////////////////////////////////////////////////////////////////////////////////

const cpfs = new Set();

cpfs.add('06938838046');
cpfs.add('93745757017');
cpfs.add('41634468007');

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['html', 'c', 'java', 'java', 'javascript', 'html', 'css', 'scss', 'scss'];

const arrayComoSet = new Set([...array]);

const arraySemItensDuplicados = [...arrayComoSet];


console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

console.log('\n ArrayComoSet', arrayComoSet);
console.log('\n arraySemItensDuplicados', arraySemItensDuplicados);








