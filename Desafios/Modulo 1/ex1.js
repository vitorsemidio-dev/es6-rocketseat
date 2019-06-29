class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}


class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}


const user1 = new Usuario('email@teste.com', 'senhaTeste');
const adm1 = new Admin('adm@teste.com', 'senhaAdm');

console.log(user1.isAdmin());
console.log(adm1.isAdmin());