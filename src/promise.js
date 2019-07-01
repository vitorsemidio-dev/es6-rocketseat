export async function funcaoAsyncAwait() {
    console.log(await lerArquivo1());
    console.log('funcaoAsyncAwait', 1);
    console.log(await lerArquivo2());
    console.log('funcaoAsyncAwait', 2);
    console.log(await lerArquivo3());
    console.log('funcaoAsyncAwait', 3);
}

export function funcao() {
    console.log(lerArquivo1());
    console.log('funcao', 1);
    console.log(lerArquivo2());
    console.log('funcao', 2);
    console.log(lerArquivo3());
    console.log('funcao', 3);
}

export function funcaoThen() {
    lerArquivo1().then(dados => console.log(dados));
    console.log('funcaoThen', 1);
    lerArquivo2().then(dados => console.log(dados));
    console.log('funcaoThen', 2);
    lerArquivo3().then(dados => console.log(dados));
    console.log('funcaoThen', 3);
}

const lerArquivo1 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Conteudo arquivo 1'), 2000);
})
const lerArquivo2 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Conteudo arquivo 2'), 1500);
})
const lerArquivo3 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Conteudo arquivo 3'), 3000);
})