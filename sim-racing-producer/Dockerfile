FROM node:16-alpine

ENV NODE_ENV development

WORKDIR app

COPY package.json .
COPY package-lock.json .
COPY . .

RUN npm ci

EXPOSE 41234
EXPOSE 20777

CMD ["npm", "start"]