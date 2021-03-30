<h1 align="center">Project Rescue</h1>

<div align="center">
    <img src="./assets/banner.png">
</div>

<h3 align="center">
    React/NodeJS application based on the use of the Leaflet tool, that is, a JavaScript geolocation library, for creating and viewing records of animals found and/or abandoned.
</h3>

<p align="center">
    <a href="#-about-the-project">About the project</a> •
    <a href="#-status">Status</a> • 
    <a href="#-features">Features</a> • 
    <a href="#-prerequisites">Prerequisites</a> • 
    <a href="#-applied-technologies">Applied technologies</a> • 
    <a href="#-author">Author</a> •
    <a href="#-readme-versions">README versions</a>
</p>

<p align="center">
    <img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=00FFA3&style=for-the-badge" />
    <img src="https://img.shields.io/static/v1?label=yarn&message=v1.22.5&color=00FFA3&style=for-the-badge" />
    <img src="https://img.shields.io/static/v1?label=dependencies&message=up-to-date&color=00FFA3&style=for-the-badge&logo" />
</p>

<br/>

### 🎯 About the project

Having as main focus the fight for the reduction of the number of abandoned animals in Brazil, the Project Rescue application seeks, through the creation and visualization of records, of ample access, of found and / or abandoned animals, to unify the technology to this cause.

<hr />

### 🏁 Status
<h3 align="center">
	🚧 Project Rescue 🕹️  In progress...  🚧
</h3>

<hr />

### 🏆 Features

- [X] Create the global styles of the application;
- [X] Implement the top navigation bar component;
- [X] Add the side navigation bar component;
- [X] Implement map component;
- [X] Add the records registration form component;
- [X] Add to the application the components of displaying records of found and lost animals;
- [X] Configure the map marker, adding your design and default pop-up message positions;
- [x] Obtain the latitudinal and longitudinal data of the point on the map that the user clicked on and use them as a basis for positioning the marker;
- [x] Share positional data (latitude and longitude) between the map and the registration form;
- [X] Perform registration data insertion in the database;
- [X] Display the records, separated by the animal's registration status, that is, disappeared or found, for the user;
- [ ] Implement application reponsivity; and
- [ ] Obter, do banco de dados, as informações de todos os marcadores de registros cadastrados e exibi-los no mapa.

<hr />

### ✅ Prerequisites

Hey Dev, before starting you will need to install two tools, [GIT](https://git-scm.com) and [Node.js](https://nodejs.org/en/).

In addition, of course, to a good code editor of your choice, although I strongly recommend [VSCode](https://code.visualstudio.com/).

Well, having everything installed and ready, we can proceed:

### :octocat: Cloning the project
```bash
# Clone the project repository
$ git clone <https://github.com/ThiagoBrito-Dev/Project_Rescue>

# Access the project folder through the terminal / cmd
$ cd Project_Rescue
```

### ⚙️ Running the back-end

```bash
# Access the server folder, where the backend magic happens.
$ cd server

# Install the dependencies that are located in the package.json file
$ yarn add / npm install

# Run the application
$ yarn dev

# And, for finish, access the local server on port 3000, that is, <http: // localhost: 3000>
```

### 🖥️ Running the front-end

```bash
# Go to where the magic happens
$ cd web

# Install the dependencies that are located in the package.json file
$ yarn add / npm install

# Run the application
$ yarn start

# And, finally, access the local server on port 3000, that is, <http: // localhost: 3000>
```

<hr />

### 🔮 Applied Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [Leaflet](https://leafletjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_brazil_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624308&gclid=Cj0KCQiAv6yCBhCLARIsABqJTjYiu8ZvQZLyxuv1uIqJGJDDGIv2Qju9dCqarAaLSnQIWAc1uFkB3qkaAlbIEALw_wcB)

<hr />

### 🎓 Author

<div align="center">
    <img src="https://avatars.githubusercontent.com/u/71851038?s=460&u=045ad8499de94cfde24135d2453d7ffc1d72ebda&v=4" width="350px">
</div>

<h3 align="center">🤝 Thiago Raniery Brito</h3>

<h4 align="center">Hey Dev, did you like the application? Well, if you want, feel free to get in touch with me for here or through the tags below.</h4>

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