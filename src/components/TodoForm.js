import { html } from 'lit-html';

import { addTodo } from '../actions';
import store from '../store.js';

import css from './TodoForm.css';

const example = 'Add a task…';
const label = 'Add';

const submit = (event) => {
  event.preventDefault();
  const input = event.target.querySelector('input');
  store.dispatch(addTodo(input.value));
  input.value = '';
};

export default {
  props: {
    text: {
      default: '',
      type: String,
    },
  },
  render() {
    return html`
      <style>${css}</style>
      <form @submit=${submit}>
        <input name="text" placeholder="${example}" type="text">
        <button>${label}</button>
      </form>
    `;
  },
};
