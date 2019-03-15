import { html } from 'lit-html';
import store from '../store';

const timeFormatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

setInterval(() => {
  store.dispatch({ type: 'UPDATE_TIME' });
}, 1000);

export default {
  render() {
    const { time } = store.getState();
    const timeString = timeFormatter.format(time);
    return html`
      <style> p { font-weight: 100 } </style>
      <p> ${timeString} </p>
    `;
  },
};
