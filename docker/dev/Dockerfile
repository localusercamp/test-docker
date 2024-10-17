ARG NODE_VERSION=20.18.0

FROM node:${NODE_VERSION}-alpine

RUN apk update
RUN apk add git

RUN corepack enable
RUN corepack enable pnpm

USER node

WORKDIR /home/node/noddde

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN corepack install
RUN pnpm config set store-dir /home/node/.local/share/pnpm/store --global
RUN pnpm i

EXPOSE 3000

CMD ash