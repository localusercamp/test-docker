import { createApp, createRouter } from "h3";

import registerRoutes from './server/routes/index';

export const app = createApp();

const router = createRouter();

registerRoutes(router);

app.use(router);
