import { setResponseStatus } from 'h3';
import { asc, desc } from 'drizzle-orm';

import { defineAction } from "#framework/define/defineAction";
import { useDB } from '#db/composables';
import { Todos } from '#root/src/database/schema/todos.js';

export default defineAction('get', '/app/todo', async (event) => {
    const db = await useDB();

    const todos = await db.select()
        .from(Todos)
        .orderBy(
            asc(Todos.isDone),
            desc(Todos.createdAt),
        );

    setResponseStatus(event, 200);

    const todosView = todos.map(({ id, title, description, isDone }) => {
        const doneButton = isDone ? '' : `<button id="button-done-${id}" class="absolute top-2 right-4 border border-stone-300 bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded-md">Сделано</button>`;

        return `<li class="relative ${isDone ? 'bg-green-50' : 'bg-white'}">
            <h2 class="${isDone ? 'line-through' : ''}">${title}</h2>
            <p class="${isDone ? 'line-through' : ''}">${description}</p>
            ${doneButton}
        </li>`;
    }).join("\n");

    return `<html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
            <script src="https://cdn.tailwindcss.com"></script>
        </head>

        <body class="p-6">
            <ul class="flex flex-col gap-2 w-[600px] rounded-xl border border-stone-200 p-6 mb-8">
                ${todosView}
            </ul>

            <div class="flex flex-col gap-4 w-[600px]">
                <div class="flex flex-col gap-1">
                    <label>Title</label>
                    <input id="input-title" name="title" class="rounded-md border border-stone-400 px-4 py-2">
                </div>
                
                <div class="flex flex-col gap-1">
                    <label>Description</label>
                    <textarea id="textarea-description" name="description" class="rounded-md border border-stone-400 px-4 py-2"></textarea>
                </div>
                
                <button type="button" id="button-add" class="bg-sky-400 text-white px-6 py-2 rounded-xl mt-4">Добавить</button>
            </div>

            <script>
                const inputTitle          = document.getElementById('input-title');
                const textareaDescription = document.getElementById('textarea-description');

                const buttonAdd = document.getElementById('button-add');

                buttonAdd.addEventListener('click', async () => {
                    const title = inputTitle.value ?? '';
                    const description = textareaDescription.value ?? '';

                    await fetch('http://0.0.0.0:3000/todo', { method: 'POST', body: JSON.stringify({ title, description }) });

                    window.location.reload();
                });

                const doneButtons = document.querySelectorAll('[id^="button-done-"]');

                async function markAsDone(id) {
                    await fetch('http://0.0.0.0:3000/todo/' + id + '/done', { method: 'PUT' });

                    window.location.reload();
                }

                for (const button of doneButtons) {
                    button.addEventListener('click', (e) => markAsDone(+e.target.getAttribute('id').replace('button-done-', '')));
                }
            </script>
        </body>
    </html>`;
});