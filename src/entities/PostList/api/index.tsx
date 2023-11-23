import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post, Posts } from '../model/types';

const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page: number) => ({
        url: 'posts',
        params: {
          _limit: 10,
          _page: page
        },
        method: 'GET',
      }),
      merge: (prevData: Posts, newData: Posts): Posts => ({
        data: [...prevData.data, ...newData.data],
        amount: newData.amount,
      }),
      transformResponse: (data: Post[], meta): Posts => ({
        data, amount: parseInt(meta?.response?.headers.get('X-Total-Count') || '0', 10)
      }),
    })
  }),
});

export const { useGetPostsQuery } = postsApi;

export default postsApi;
