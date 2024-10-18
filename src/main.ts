import { createApp, createRouter } from "h3";

export const app = createApp();

const router = createRouter();

// TODO: Needs to be auto-registered.
import ViewTodosAction from '#modules/todo/actions/ViewTodos';
import CreateTodoAction from '#modules/todo/actions/CreateTodo';
import MarkTodoAsDoneAction from '#modules/todo/actions/MarkTodoAsDone';

ViewTodosAction(router);
CreateTodoAction(router);
MarkTodoAsDoneAction(router);

app.use(router);
