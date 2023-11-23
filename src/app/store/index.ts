import { configureStore } from '@reduxjs/toolkit';
import postsApi from '@/entities/PostList/api';
import postDetailApi from '@/entities/PostItem/api';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [postDetailApi.reducerPath]: postDetailApi.reducer,
  },
  middleware: [thunk, postsApi.middleware, postDetailApi.middleware] as const,
});

export default store;
