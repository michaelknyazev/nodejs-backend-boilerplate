FROM node:16-alpine

ARG PORT

WORKDIR /app
COPY package.json .
RUN yarn install

COPY . .

ENV MODE=production
ENV PORT=$PORT

EXPOSE ${PORT}

CMD ["node", "./src/index.js"]