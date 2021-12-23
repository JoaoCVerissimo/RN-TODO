import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { title: 'todo1', description: "teste here", completed: true },
    { title: 'tas a ir bem', description: "muito fixe", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.push(todo);
    },
  },
});


export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
