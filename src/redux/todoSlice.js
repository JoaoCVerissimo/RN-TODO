import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'

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

export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (payload) => {
    const response = await fetch('https://61c47227f1af4a0017d99555.mockapi.io/api/v1/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: payload.title, description: payload.description, date: payload.date }),
    });

    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  'todos/toggleCompleteAsync',
  async (payload) => {
    const response = await fetch(`https://61c47227f1af4a0017d99555.mockapi.io/api/v1/todos/${payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: payload.completed }),
    });

    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  'todos/deleteTodoAsync',
  async (payload) => {
    const response = await fetch(`https://61c47227f1af4a0017d99555.mockapi.io/api/v1/todos/${payload.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      return { id: payload.id };
    }
  }
);

export const editTodoAsync = createAsyncThunk(
  'todos/editTodoAsync',
  async (payload) => {
    const response = await fetch(`https://61c47227f1af4a0017d99555.mockapi.io/api/v1/todos/${payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: payload.title, description: payload.description }),
    });

    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  }
);

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
        date: action.payload.date,
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
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.todo.id); // vou buscar o index da payload retornada da api
      state[index].completed = action.payload.todo.completed; // atualizo na stack o novo valor
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    [editTodoAsync.fulfilled]: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.todo.id);
      state[index] = action.payload.todo;
    },
  },
});


export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
