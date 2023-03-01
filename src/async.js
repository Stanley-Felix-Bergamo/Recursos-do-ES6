const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {

    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch (erro) {
        reject('Houve um erro na funcaoMuitoPesadaPromise', erro);
    }
});


const promiseComParametros = (login, senha) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)

    });

}


// function execucao() {
//     console.log('Inicio do Programa');
//     console.log('Tarefa 1 ...');
//     promiseComParametros('Stanley', 564732).then(resultado => console.log(resultado));
//     funcaoMuitoPesadaPromise.then(resultado => console.log('Tarefa muito pesada', resultado)).catch(erro => console.log(erro));
//     console.log('Tarefa 2 ...');
//     console.log('Tarefa 3 ...');
//     console.log('Fim do Programa');
// }

// execucao();


async function execucaoPrincipal() {

    console.log('Inicio do Programa');
    console.log('Tarefa 1 ...');

    promiseComParametros('Stanley', 564732).then(resultado => console.log(resultado));

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log('Tarefa muito pesada:', resultado);

    } catch (erro) {
        console.log('Houve um erro', erro)
    }
    console.log('Tarefa 2 ...');
    console.log('Tarefa 3 ...');
    console.log('Fim do Programa');
}

execucaoPrincipal();