<h1 align="center">Project Rescue</h1>

<div align="center">
    <img src="./assets/banner.png">
</div>

<h3 align="center"> 
    Aplicação React/NodeJS baseada na utilização da ferramenta Leaflet, isto é, uma biblioteca JavaScript de geolocalização, para criação e visualização de registros de animais encontrados e/ou abandonados.
</h3>

<p align="center">
    <a href="#-sobre">Sobre</a> •
    <a href="#-status-do-projeto">Status do Projeto</a> • 
    <a href="#-features">Features</a> • 
    <a href="#-pré-requisitos">Pré-requisitos</a> • 
    <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a> • 
    <a href="#-autor">Autor</a> •
    <a href="#-readme-versions">README versions</a>
</p>

<p align="center">
    <img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=00FFA3&style=for-the-badge" />
    <img src="https://img.shields.io/static/v1?label=yarn&message=v1.22.5&color=00FFA3&style=for-the-badge" />
    <img src="https://img.shields.io/static/v1?label=dependencies&message=up-to-date&color=00FFA3&style=for-the-badge&logo" />
</p>

<br/>

### 🎯 Sobre

Possuindo como foco principal a luta pela redução do número de animais abandonados no Brasil, a aplicação Project Rescue busca, através da criação e visualização de registros, de amplo acesso, de animais encontrados e/ou abandonados, unificar a tecnologia à esta causa.

<hr />

### 🏁 Status do Projeto
<h3 align="center">
	🚧 Project Rescue 🕹️  Em construção...  🚧
</h3>

<hr />

### 🏆 Features

- [X] Criar os estilos globais da aplicação;
- [X] Implementar o componente da barra de navegação superior;
- [X] Adicionar o componente da barra de navegação lateral;
- [X] Implementar o componente do mapa;
- [X] Adicionar o componente do formulário de cadastro de registros;
- [X] Acrescer à aplicação os componentes de exibição de registros de animais encontrados e perdidos;
- [X] Configurar o marcador do mapa, adicionando o seu design e posições padrão das mensagens de pop-up;
- [x] Obter os dados latitudinais e longitudinais do ponto do mapa em que o usuário clicou e utilizá-los como base para o posicionamento do marcador;
- [x] Realizar o compartilhamento dos dados posicionais (latitude e longitude) entre o mapa e o formulário de cadastro de registros;
- [X] Realizar a inserção dos dados de registro no banco de dados;
- [X] Exibir os registros, separados pelo estatus de registro do animal, isto é, desaparecido ou encontrado, para o usuário;
- [ ] Implementar a responsividade da aplicação; e
- [ ] Obter, do banco de dados, as informações de todos os marcadores de registros cadastrados e exibi-los no mapa.

<hr />

### ✅ Pré-requisitos

Hey Dev, antes de começar você precisará realizar a instalação de duas ferramentas, o [GIT](https://git-scm.com) e o [Node.js](https://nodejs.org/en/). 

Além, é claro, de um bom editor de código à sua escolha, muito embora eu recomende fortemente o [VSCode](https://code.visualstudio.com/).

Bom, tendo tudo instalado e pronto, podemos dar sequência:

### :octocat: Clonando o projeto
```bash
# Clone o repositório do projeto
$ git clone <https://github.com/ThiagoBrito-Dev/Project_Rescue>

# Acesse a pasta do projeto no terminal/cmd
$ cd Project_Rescue
```

### ⚙️ Rodando o back-end

```bash
# Acesse a pasta do servidor, onde a mágica do back-end acontece
$ cd server

# Instale as dependências que se encontram no arquivo package.json
$ yarn add / npm install

# Execute a aplicação
$ yarn dev

# E por fim, acesse o servidor local na porta 3000, isto é, <http://localhost:3000>
```

### 🖥️ Rodando o front-end

```bash
# Vá para onde a mágica acontece
$ cd web

# Instale as dependências que se encontram no arquivo package.json
$ yarn add / npm install

# Execute a aplicação
$ yarn start

# E, finalmente, acesse o servidor local na porta 3000, isto é, <http://localhost:3000>
```

<hr />

### 🔮 Tecnologias utilizadas
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [Leaflet](https://leafletjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_brazil_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624308&gclid=Cj0KCQiAv6yCBhCLARIsABqJTjYiu8ZvQZLyxuv1uIqJGJDDGIv2Qju9dCqarAaLSnQIWAc1uFkB3qkaAlbIEALw_wcB)

<hr />

### 🎓 Autor

<div align="center">
    <img src="https://avatars.githubusercontent.com/u/71851038?s=460&u=045ad8499de94cfde24135d2453d7ffc1d72ebda&v=4" width="350px">
</div>

<h3 align="center">🤝 Thiago Raniery Brito</h3>

<h4 align="center">E aí Dev, gostou da aplicação? Bom, se quiser, fique à vontade para entrar em contato comigo por aqui ou pelas tags abaixo.</h4>

<br/>

<div align="center">
    <a href="https://www.linkedin.com/in/thiagoranierybrito/">
        <img src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiagoranierybrito/">
    </a>
    <a href="mailto:thiagobritotrs@gmail.com">
        <img src="https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thiagobritotrs@gmail.com">
    </a>
</div>

<hr>

### 📚 README versions

<p>
    <a href="https://github.com/ThiagoBrito-Dev/Project_Rescue/blob/main/README.md">Portuguese (pt-br)</a>
    |
    <a href="https://github.com/ThiagoBrito-Dev/Project_Rescue/blob/main/README-en.md">English (en-us)</a>
</p>
