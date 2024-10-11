# ARG NODE_VERSION=20.18.0

# FROM node:${NODE_VERSION}-alpine

# FROM alpine:3.20.3

# COPY --from=denoland/deno:bin-2.0.0 /deno /usr/local/bin/deno

# ENV NODE_ENV dev

FROM node:20.18.0-alpine

WORKDIR /var/www/noddde

USER node

EXPOSE 3000

CMD ash