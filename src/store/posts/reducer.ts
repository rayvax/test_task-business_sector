import { createSlice } from '@reduxjs/toolkit';
import { PostData } from '../../types/post';
import { fetchPosts } from './thunk';
import { POSTS_PER_PAGE } from './constants';

type PostsState = {
  // posts[page][postIndex]
  // undefined -> pending
  postList: (PostData | undefined)[][];
};

const initialState: PostsState = {
  postList: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        const { page } = action.meta.arg;

        state.postList[page ?? 0] = new Array(POSTS_PER_PAGE).fill(undefined);
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        if (!action.payload) return;

        const { posts } = action.payload;
        const { page } = action.meta.arg;
        state.postList[page ?? 0] = posts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        const { page } = action.meta.arg;
        state.postList[page ?? 0] = [];
      }),
});

export const postsReducer = postsSlice.reducer;
