let nextTodoId = 1;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
});

export const clearCompletedTodos = () => ({
  type: 'CLEAR_TODO',
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});
