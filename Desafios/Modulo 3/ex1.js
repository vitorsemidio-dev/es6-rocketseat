// parte 1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}

// umPorSegundo();


// parte 2
import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${user}`)
        console.log(data);
    } catch(err) {
        console.log('Usuario nao existe', 'getUserFromGithub');
    }
}


getUserFromGithub('vitorsemidio');
// getUserFromGithub('vitorsemidio96');


// parte 3 -- Tururu CORS blocked
class Github {
    static async getRepositories(repo) {
        try {
            const { data } = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(data);
        } catch(erro ) {
            console.log('Repositorio nao existe');
        }

    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('octocat/Hello-World');



// Parte 4
const buscaUsuario = async usuario => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(data);
    } catch(err) {
        console.log('Usuario nao existe', 'buscaUsuario');
    }
}

buscaUsuario('vitorsemidio');