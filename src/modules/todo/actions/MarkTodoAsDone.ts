import { setResponseStatus } from 'h3';
import { z } from 'zod';
import { eq } from 'drizzle-orm';

import { defineAction } from "#framework/define/defineAction";
import { useDB } from '#db/composables';
import { Todos } from '#root/src/database/schema/todos.js';

export default defineAction('put', '/todo/:id/done', async (event) => {
    const params = z.object({
        id: z.coerce.number().min(1),
    });

    const { id } = params.parse(event.context.params);

    const db = await useDB();

    const todos = await db.update(Todos)
        .set({ isDone: true })
        .where(eq(Todos.id, id));

    setResponseStatus(event, 200);

    return todos;
});