import { setResponseStatus } from 'h3';

import { defineAction } from "#framework/define/defineAction";
import { useDB } from '#db/composables';
import { Todos } from '#root/src/database/schema/todos.js';

export default defineAction('get', '/todo', async (event) => {
    const db = await useDB();

    const todos = await db.select().from(Todos);

    setResponseStatus(event, 200);

    return todos;
});