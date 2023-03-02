// function Pokemon(nomePokemon, tipoPokemon) {
//     this.nome = nomePokemon;
//     this.tipo = tipoPokemon;
// }
// const pikachu = new Pokemon('Pikachu', 'elétrico');

class Pokemon {
    #hp = 380;

    constructor(nomePokemon, tipoPokemon) {
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }

    atacar(nomeAtaque) {
        console.log(`${this.nome} usou ${nomeAtaque}`);
    }

    recebeuAtaque() {
        console.log(`${this.nome} Recebeu um ataque`);
        this.#hp -= 15;
    }

    exibeHp() {
        console.log('Nivel de Hp:', this.#hp);
    }
}

// const pikachu = new Pokemon('Pikachu', 'elétrico');
// pikachu.atacar('choquedo do trovão !');
// pikachu.nome = 'Pikachu';
// pikachu.tipo = 'elétrico';
// console.log(pikachu);

class Pikachu extends Pokemon {

    constructor() {
        super('Pikachu', 'elétirco');
    }

    atacar() {
        console.log(`${this.nome} usou choquedo do trovão !`);
    }
}


const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.exibeHp();
pikachuDoAsh.atacar();
pikachuDoAsh.exibeMp();

console.log(pikachuDoAsh);
console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);
