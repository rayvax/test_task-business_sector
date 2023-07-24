import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PostData } from '../../types/post';
import { fetchPosts } from './thunk';
import { POSTS_PER_PAGE } from './constants';

type PostsState = {
  // posts[page][postIndex]
  // undefined -> pending
  postList: (PostData | undefined)[][];
  filter: string;
};

const initialState: PostsState = {
  postList: [],
  filter: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
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

export const { setPostsFilter } = postsSlice.actions;

export default postsSlice.reducer;
