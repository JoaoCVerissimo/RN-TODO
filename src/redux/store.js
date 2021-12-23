import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer, // adiciono aqui todos os reducers, neste caso só preciso de um para os TODOs que está no ficheiro todoSlice
  },
});
