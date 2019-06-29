const usuario = { nome: 'Emidio' };
const arr = [1, 2, 3];

usuario.nome = 'abc';
arr[1] = 10;
console.log(usuario, arr);

function teste(x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y);
    }
}

teste(10);