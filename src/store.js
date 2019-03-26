import { createStore } from 'redux';
import { addTodo } from './actions';
import reducers from './reducers';

const store = createStore(reducers);

// Add initial sample values
store.dispatch(addTodo('Cut the grass'));
store.dispatch(addTodo('Take out the bins'));
store.dispatch(addTodo('Go to the shop'));

export default store;
