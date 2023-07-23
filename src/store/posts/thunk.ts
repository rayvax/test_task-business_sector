import { createAsyncThunk } from '@reduxjs/toolkit';
import { PAGE_KEY, PER_PAGE_KEY, POSTS_PER_PAGE } from './constants';
import { PostData } from '../../types/post';

type FetchPostsParams = {
  page?: number;
};
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ page = 0 }: FetchPostsParams) => {
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts?${PER_PAGE_KEY}=${POSTS_PER_PAGE}&${PAGE_KEY}=${page}`,
      );
      const json = await resp.json();
      const posts = json as PostData[];

      return { posts };
    } catch (e) {
      console.error('Error while fetching posts', e);
    }
  },
);
