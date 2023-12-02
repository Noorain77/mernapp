FROM node:14.21.3-bullseye
WORKDIR /app
COPY ./package*.json ./
#RUN npm install -g npm@9.6.7
COPY . .
#RUN npm install axios
EXPOSE 3001
CMD ["npm", "start"]