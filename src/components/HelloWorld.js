import { html } from 'lit-html';

const link = new URL('https://github.com/liamnewmarch/acutejs');

const css = `
h1 {
  font-size: 1.8em;
}

p {
  color: #b50;
}

a {
  color: inherit;
}`;

export default {
  props: {
    title: {
      default: 'Oops, no title!',
      type: String,
    },
  },
  render({ title }) {
    return html`
      <style> ${css} </style>
      <h1> ${title} </h1>
      <p> This is an <a href="${link}">Acute</a> app </p>
      <current-time></current-time>
    `;
  },
};
