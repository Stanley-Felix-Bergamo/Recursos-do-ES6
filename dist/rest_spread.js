"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function somar() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log('\n A Soma é :', somar(20, 30, 50));

////////////////////////////////////////////////////////////////////////////

function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numerosAtual) {
    total += numerosAtual;
    return total;
  }, 0);
  return soma;
}
console.log('\n A soma é :', somarComRest(10, 20, 90, 15));

/////////////////////////////////////////////////////////////////////////// 

var marcaA = ['Fiat', 'Ford', 'Honda'];
var marcaB = ['Bmw', 'Audi', 'Mercedes'];
var carros = marcaA.concat(marcaB);
console.log('\n', carros);
var novosCarros = [].concat(marcaA, marcaB);
console.log('\n', novosCarros);

/////////////////////////////////////////////////////////////////////////// 

var carro = {
  modelo: 'Gol',
  marca: 'Volkswagen',
  cambio: 'manual',
  arCondicionado: 'sim',
  cor: 'prata',
  motor: '1.0',
  portas: 2,
  ano: 1994
};
var carroDoStanley = _objectSpread(_objectSpread({}, carro), {}, {
  cambio: 'automático',
  cor: 'azul',
  motor: '2.7',
  portas: 4,
  ano: 2023
});
console.log('\n', carroDoStanley);

/////////////////////////////////////////////////////////////////////////// 

var motorBase = carro.motor;
console.log('\n Motor base é:', motorBase);
var motorDoStanley = carroDoStanley.modelo;
console.log('\n Motor do Stanley é:', motorDoStanley);