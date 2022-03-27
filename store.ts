import { configureStore, createStore } from '@reduxjs/toolkit';

import counterSlice from './features/counter/counter-slice';
import { todoApiSlice } from './features/todo/todo-slice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [todoApiSlice.reducerPath]: todoApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(todoApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
