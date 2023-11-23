import type { Post } from '@/entities/PostList/model/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postItemsApi = createApi({
  reducerPath: 'postItemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPostItems: builder.query<Post, number>({
      query: (postId) => ({
        url: `posts/${postId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPostItemsQuery } = postItemsApi;

export default postItemsApi;
