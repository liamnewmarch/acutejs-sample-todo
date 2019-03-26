import { html } from 'lit-html';
import store from '../store';
import { toggleTodo } from '../actions';
import css from './TodoItem.css';

export default {
  props: {
    completed: {
      default: false,
      type: Boolean,
    },
    id: {
      default: NaN,
      type: Number,
    },
  },
  events: {
    input() {
      store.dispatch(toggleTodo(this.props.id));
    },
  },
  render({ completed }) {
    return html`
      <style>${css}</style>
      <label>
        <input type="checkbox" ?checked=${completed}>
        <slot></slot>
      </label>
    `;
  },
};
