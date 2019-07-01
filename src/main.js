import { exemplo1Then, exemplo2Then, exemplo3Then } from './exemplo';
import { exemplo1AsyncAwait, exemplo2AsyncAwait, exemplo3AsyncAwait } from './exemplo';
import { exemplo1Funcao, exemplo2Funcao, exemplo3Funcao } from './exemplo';

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok') }, 2000);
});

// minhaPromise()
//     .then( response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// exemplo1Then();
exemplo1AsyncAwait();
// exemplo3Funcao();