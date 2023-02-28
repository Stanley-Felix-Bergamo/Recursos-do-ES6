function somar() {

    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

console.log('\n A Soma é :', somar(20, 30, 50));

////////////////////////////////////////////////////////////////////////////

function somarComRest(...numeros) {

    const soma = numeros.reduce((total, numerosAtual) => {
        total += numerosAtual;
        return total;
    }, 0);
    return soma;
}

console.log('\n A soma é :', somarComRest(10, 20, 90, 15));

/////////////////////////////////////////////////////////////////////////// 

const marcaA = ['Fiat', 'Ford', 'Honda'];
const marcaB = ['Bmw', 'Audi', 'Mercedes'];

const carros = marcaA.concat(marcaB);
console.log('\n', carros);

const novosCarros = [...marcaA, ...marcaB];
console.log('\n', novosCarros);

/////////////////////////////////////////////////////////////////////////// 

const carro = {
    modelo: 'Gol',
    marca: 'Volkswagen',
    cambio: 'manual',
    arCondicionado: 'sim',
    cor: 'prata',
    motor: '1.0',
    portas: 2,
    ano: 1994
}

const carroDoStanley = {
    ...carro,
    cambio: 'automático',
    cor: 'azul',
    motor: '2.7',
    portas: 4,
    ano: 2023
}
console.log('\n', carroDoStanley);

/////////////////////////////////////////////////////////////////////////// 

const { motor: motorBase } = carro;
console.log('\n Motor base é:', motorBase);

const { motor: motorDoStanley } = carroDoStanley;
console.log('\n Motor do Stanley é:', motorDoStanley);
