FROM node:18.15.0

WORKDIR /app

COPY . /app
RUN npm install -g npm@9.6.2
RUN npm install --force

EXPOSE 3000

CMD [ "npm", "start" ]