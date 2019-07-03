import api from './api';

class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById("repo-list");
        this.inputEl = document.querySelector('input[name=repository]');

        this.registerListeners();
    }
  
    registerListeners() {
      this.formEl.onsubmit = event => 
        this.addRepository(event);
    }
  
    async addRepository(event) {
        // previne que os eventos defaults aconteçam (recarregar tela, fazer get dnv)
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0) return;

        const response = await api.get(`/repos/${repoInput}`);
        const { data } = response;
        const { name, description, html_url, owner: { avatar_url } } = data;

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        });

        this.inputEl.value = '';
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.appendChild(document.createTextNode('Acessar'));
            linkEl.setAttribute('href', repo.html_url);
            linkEl.setAttribute('target', '_blank');

            let listItemEl = document.createElement('li');

            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
  }
  
  new App();