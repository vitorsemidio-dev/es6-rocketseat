class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List{
    constructor() {
        super();
        this.usuario = 'Emidio';
    }

    mostrarUsuario() {
        console.log(this.usuario);
    }
}

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}


const MinhaList = new TodoList();

document.getElementById('button').onclick = () => {
    MinhaList.add('Novo todo');
    MinhaList.mostrarUsuario();
    console.log(Matematica.soma(1, 15));
}