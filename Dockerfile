FROM node:20-alpine

RUN apk update && apk add git
COPY package.json .
RUN npm i x-asena
COPY . .
EXPOSE 8080

CMD ["node", "index.js"]
