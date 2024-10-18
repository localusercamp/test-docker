import { readValidatedBody, readBody, setResponseStatus } from 'h3';

import { z } from 'zod';

import { defineAction } from "#framework/define/defineAction";
import { useDB } from '#db/composables';
import { Todos } from '#root/src/database/schema/todos.js';

export default defineAction('post', '/todo', async (event) => {
    const schema = z.object({
        title: z.string().min(3),
        description: z.string().optional(),
    });

    const input = schema.parse(await readBody(event).then(JSON.parse));

    const db = await useDB();

    await db.insert(Todos).values({
        ...input,
        isDone: false,
        createdAt: new Date,
        updatedAt: new Date,
    });

    setResponseStatus(event, 201);

    return null;
});