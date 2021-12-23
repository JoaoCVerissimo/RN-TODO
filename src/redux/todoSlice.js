import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: Math.floor(Math.random() * 100 * Math.random()), title: 'todo1', description: "teste here", completed: true },
    { id: Math.floor(Math.random() * 100 * Math.random()), title: 'tas a ir bem', description: "muito fixe", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.floor(Math.random() * 100 * Math.random()),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});


export const { addTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
