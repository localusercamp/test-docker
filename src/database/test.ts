import { drizzle } from 'drizzle-orm/connect';

async function main() {
    const db = await drizzle("mysql2", 'mysql://root:root@localhost:3307/noddde');
}
