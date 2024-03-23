FROM node:21-slim

WORKDIR /code

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY src /code/src
COPY tsconfig.json .

CMD ["npm", "start"]