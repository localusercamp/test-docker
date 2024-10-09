ARG NODE_VERSION=20.18.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV dev

WORKDIR /var/www/server

COPY package-lock.json package-lock.json
COPY package.json package.json
COPY nitro.config.ts nitro.config.ts
COPY tsconfig.json tsconfig.json

RUN npm ci

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run dev