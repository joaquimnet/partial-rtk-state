import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todoApiSlice = createApi({
  reducerPath: 'todo',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders(headers) {
      headers.set('Authorization', 'Bearer 123');
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchTodos: builder.query<Todo[], number | void>({
        query(limit = 10) {
          return `/todos?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchTodosQuery } = todoApiSlice;
