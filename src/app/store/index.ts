import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import postsApi from '@/entities/PostList/api';
import { postsSlice } from '@/entities/PostList/model/slice';
import { type TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [postsSlice.name]: postsSlice.reducer,
  },
  middleware: [thunk, postsApi.middleware] as const,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
