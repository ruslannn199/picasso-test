import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Post, PostsSliceState } from './types';

const initialState: PostsSliceState = {
  items: [],
  currentPage: 1,
  isLoading: false,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, { payload }: PayloadAction<Post[]>) => ({
      ...state, items: [...state.items, ...payload]
    }),
    setCurrentPage: (state, { payload }: PayloadAction<number>) => ({
      ...state, currentPage: payload,
    }),
    startLoading: (state) => ({
      ...state, isLoading: true,
    }),
    stopLoading: (state) => ({
      ...state, isLoading: false,
    }),
  }
});
