# Ref: https://www.tomray.dev/nestjs-docker-production
ARG NODE_VERSION=20.10
ARG LINUX_VERSION=alpine3.19

FROM node:${NODE_VERSION}-${LINUX_VERSION} AS development

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV dev

RUN npx prisma generate
RUN npm run build

CMD [ "node", "dist/main.js" ]