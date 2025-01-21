import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<any,void>({
      query: () => '/todos' 
    }),
    getTodo: builder.query<void, number>({
      query: (todoId) => `/todos/${todoId}`
    })
  }),
})

export const { useGetTodosQuery, useGetTodoQuery } = todoApi;