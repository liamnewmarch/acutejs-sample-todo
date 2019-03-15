import { createApp } from '@acutejs/core';
import litHtml from '@acutejs/plugin-lit-html';
import redux from '@acutejs/plugin-redux';
import { render } from 'lit-html';

import CurrentTime from './components/CurrentTime.js';
import HelloWorld from './components/HelloWorld.js';

import store from './store.js';

createApp({
  components: {
    CurrentTime,
    HelloWorld,
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
