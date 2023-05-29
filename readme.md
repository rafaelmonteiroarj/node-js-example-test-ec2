## inicializando

## repo

https://github.com/rafaelmonteiroarj/node-js-example-test-ec2

```sh
sudo su
```

## instalando nodejs e nvm

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
source ~/.nvm/nvm.sh

# verificar versão
nvm --version

# Listar versões instaladas
nvm list

# Listar versões disponíveis para instalação
nvm ls-remote

# instalar um determinada versão do nodejs
nvm install vX.X.X

# Desinstalar uma versão
nvm uninstall vX.X.X

# Usar uma versão do Node.js
nvm use vX.X.X
```

## instalando git

```sh
apt update -y
apt install git
git --version
```

## PM2

```sh
npm install pm2@latest -g
pm2 -v
pm2 start index.js --name backend
```
