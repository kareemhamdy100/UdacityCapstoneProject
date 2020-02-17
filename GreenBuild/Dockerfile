FROM node:alpine

falied on linting stage

WORKDIR /app

COPY ./package.json ./


RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm", "run", "start"]