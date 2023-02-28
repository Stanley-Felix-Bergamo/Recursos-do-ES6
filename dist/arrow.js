"use strict";

var minhaFuncao = function minhaFuncao() {
  return 'Ola Mundo !';
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
var carro = {
  velocidadeAtual: 80,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(this);
    this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log('\n', minhaFuncao());
console.log('\n', retornaUmCarro());
console.log('\n', carro.velocidadeAtual);