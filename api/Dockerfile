# Dockerfile for /api
FROM node:14.21.3-bullseye
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]