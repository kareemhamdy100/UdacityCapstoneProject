FROM node:alpine


WORKDIR /app

COPY ./package.json ./

RUN  npm cache clean -f
RUN npm install -g n
RUN n stable

RUN npm install

COPY . . 

EXPOSE 3000

