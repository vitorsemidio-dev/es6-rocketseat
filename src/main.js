class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById("repo-form");

        this.registerHandlers();
    }


    // registra os eventos
    registerHandlers() {
        this.formEl.onsubmit = evento => this.addRepository(evento);
    }


    addRepository(event) {
        // previne que os eventos defaults aconteçam (recarregar tela, fazer get dnv)
        event.preventDefault();

        this.repositories.push({
            name: 'Rocketseat',
            description: 'ire a sua ideia do papel e dê vida à sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/Rocketseat'
        });

        console.log(this.repositories);
    }
}

new App();