FROM node:12-alpine

WORKDIR /app

COPY . .

RUN yarn install --production

EXPOSE 8080

CMD ["node", "/app/src/server.js"]