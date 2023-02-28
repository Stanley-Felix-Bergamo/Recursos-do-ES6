const minhaFuncao = () => 'Ola Mundo !';

const retornaUmCarro = () => ({ modelo: 'Ka', fabricante: 'Ford' });

const carro = {

    velocidadeAtual: 80,

    acelerar: function () {
        console.log(this);
        this.velocidadeAtual += 10;
    },

    frear: function () {
        console.log(this);
        this.velocidadeAtual -= 10;
    },
}



carro.acelerar();
carro.frear();

console.log('\n', minhaFuncao());
console.log('\n', retornaUmCarro());
console.log('\n', carro.velocidadeAtual);

