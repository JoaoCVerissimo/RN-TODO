import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const response = await fetch('https://61c47227f1af4a0017d99555.mockapi.io/api/v1/todos');
    if (response.ok) {
      const todos = await response.json();
      return { todos }; // passo para object porque vem em string
    }
  }
);

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.floor(Math.random() * 1000 * Math.random()),
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
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
  },
});


export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
