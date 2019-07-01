import { funcaoAsyncAwait, funcaoThen, funcao } from './promise';

export function exemplo1Then() {
    funcaoThen();
    console.log('sem funcao', 1);
    console.log('sem funcao', 2);
    console.log('sem funcao', 3);
}
export function exemplo2Then() {
    console.log('sem funcao', 1);
    funcaoThen();
    console.log('sem funcao', 2);
    console.log('sem funcao', 3);
}
export function exemplo3Then() {
    console.log('sem funcao', 1);
    console.log('sem funcao', 2);
    console.log('sem funcao', 3);
    funcaoThen();
}

export function exemplo1AsyncAwait() {
    funcaoAsyncAwait();
    console.log('sem funcao', 1);
    console.log('sem funcao', 2);
    console.log('sem funcao', 3);
}
export function exemplo2AsyncAwait() {
    console.log('sem funcao', 1);
    funcaoAsyncAwait();
    console.log('sem funcao', 2);
    console.log('sem funcao', 3);
}
export function exemplo3AsyncAwait() {
    console.log('sem funcao', 1);
    console.log('sem funcao', 2);
    console.log('sem funcao', 3);
    funcaoAsyncAwait();
}

export function exemplo1Funcao() {
    funcao();
    console.log('sem funcao', 1);
    console.log('sem funcao', 2);
    console.log('sem funcao', 3);
}
export function exemplo2Funcao() {
    console.log('sem funcao', 1);
    funcao();
    console.log('sem funcao', 2);
    console.log('sem funcao', 3);
}
export function exemplo3Funcao() {
    console.log('sem funcao', 1);
    console.log('sem funcao', 2);
    console.log('sem funcao', 3);
    funcao();
}