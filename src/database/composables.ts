import { drizzle } from 'drizzle-orm/connect';

export async function useDB() {
    return await drizzle('mysql2', {
        connection: 'mysql://root:root@noddde-mysql/noddde',
        casing: 'snake_case',
    });
} 