import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import postsApi from '@/entities/PostList/api';

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: [thunk, postsApi.middleware] as const,
});

export default store;
