# Redd'imt

Partie _front_ du projet en Vue.js (TypeScript)

## Setup

### Prettify `git log`
```
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```
Ajout d'un alias `git lg` (l'argument `--global` le rend global à tous vos repos git locaux)
```
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```
Vue des différences
```
git lg -p
```

### Installer les packages pré-requis
```
npm install
```