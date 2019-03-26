import { html } from 'lit-html';
import { clearCompletedTodos } from '../actions';
import store from '../store.js';
import css from './TodoClear.css';

const clear = () => {
  store.dispatch(clearCompletedTodos());
};

export default {
  render() {
    return html`
      <style>${css}</style>
      <button @click=${clear} type="button"> Clear done </a>
    `;
  },
};
