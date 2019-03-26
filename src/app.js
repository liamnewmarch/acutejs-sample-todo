import { createApp } from '@acutejs/core';
import litHtml from '@acutejs/plugin-lit-html';
import redux from '@acutejs/plugin-redux';
import { render } from 'lit-html';

import TodoClear from './components/TodoClear.js';
import TodoForm from './components/TodoForm.js';
import TodoItem from './components/TodoItem.js';
import TodoList from './components/TodoList.js';

import store from './store.js';

createApp({
  components: {
    TodoClear,
    TodoForm,
    TodoItem,
    TodoList,
  },
  plugins: [
    litHtml({
      render,
    }),
    redux({
      store,
    }),
  ],
});
