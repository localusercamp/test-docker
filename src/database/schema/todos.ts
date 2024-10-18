import { boolean, int, mysqlTable, text, varchar, datetime } from 'drizzle-orm/mysql-core';

export const Todos = mysqlTable('todos', {
    id: int().primaryKey().autoincrement(),
    title: varchar({ length: 255 }).notNull(),
    description: text(),
    isDone: boolean().notNull().default(false),
    createdAt: datetime(),
    updatedAt: datetime(),
});