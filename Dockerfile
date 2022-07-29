FROM node:16.15.1

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8015

CMD [ "npm", "start" ]