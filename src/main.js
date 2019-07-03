class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById("repo-list");

        this.registerListeners();
    }
  
    registerListeners() {
      this.formEl.onsubmit = event => 
        this.addRepository(event);
    }
  
    addRepository(event) {
  
      this.render();
        // previne que os eventos defaults aconteçam (recarregar tela, fazer get dnv)
        event.preventDefault();

        this.repositories.push({
            name: 'Rocketseat',
            description: 'ire a sua ideia do papel e dê vida à sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/Rocketseat'
        });

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
            descriptionEl.appendChild(document.createElement(repo.description));

            let linkEl = document.createElement('a');
            linkEl.appendChild(document.createTextNode(repo.html_url));
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