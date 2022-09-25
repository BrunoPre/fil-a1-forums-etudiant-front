# Redd'imt

Front-end part of *Redd'IMT* project in Vue (TypeScript) by [@TheElysium](https://github.com/TheElysium) and [@BrunoPre](https://github.com/BrunoPre)

Back-end part can be found here: [Back-end repo](https://github.com/PeP-dev/fil-a1-forums-etudiant) by [@PeP-dev](https://github.com/PeP-dev) and [@Jfouille](https://github.com/Jfouille)

*Note: features are missing (such as creating a group), but the essential is here to prove the feasibility* 
## Setup (frontend)

### Back-end configuration
1. Clone back-end repo
2. Load the necessary dependencies from the `pom.xml` file
3. Enable containerized PostgreSQL database by running `docker-compose up` on `src/main/docker/docker-compose.yml`
4. Run main class `src/main/java/org/filmt/projetagile/ProjetAgileApplication.java`

### Prettify `git log`
```
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```
Add `git lg` alias (`--global` argument makes it global to all your local repos)
```
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```
View differences
```
git lg -p
```

### Install pre-requisite packages
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
