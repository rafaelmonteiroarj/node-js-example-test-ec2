FROM node:18-alpine As development

WORKDIR /usr/src/app

# vamos definir que todo o projeto seja copiado para dentro do nosso diretorio de trabalho WORKDIR
# COPY . .  -> Colocamos dois pontos separados, o primeiro para indicar a pasta do projeto e o segundo o diretorio de trabalho
# como ja definimos o workir não precisamos colocar o caminho, por isso colocamos apenas o ponto (.)
COPY . /usr/src/app

RUN ls -la
RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]