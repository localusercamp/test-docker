import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: './schema',
    dialect: 'mysql',
    dbCredentials: {
        url: 'mysql://root:root@localhost:3307/noddde',
    },
});