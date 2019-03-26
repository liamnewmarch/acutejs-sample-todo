import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import store from '../store.js';
import css from './TodoList.css';

const complete = 'Hooray, you have no tasks to do.';

export default {
  render() {
    const { todos } = store.getState();
    return html`
      <style>${css}</style>
      <p ?hidden=${todos.length}>${complete}</p>
      ${repeat(todos, todo => todo.id, todo => html`
        <todo-item id=${todo.id} ?completed=${todo.completed}>
          ${todo.text}
        </todo-item>
      `)}
      <todo-clear ?hidden=${!todos.length}></todo-clear>
    `;
  },
};
