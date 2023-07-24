import { useCallback } from 'react';
import { useAppSelector } from '..';
import { PostData } from '../../types/post';

export function usePostList() {
  return useAppSelector((state) => state.posts.postList);
}

export function usePostsFilter() {
  return useAppSelector((state) => state.posts.filter);
}

export function useFilterPosts() {
  const filter = usePostsFilter();

  return useCallback(
    (posts: (PostData | undefined)[]) => {
      if (!filter) return posts;

      return posts.filter((post) => {
        if (!post) return true;

        return (
          post.id.toString().includes(filter) ||
          post.title.includes(filter) ||
          post.body.includes(filter)
        );
      });
    },
    [filter],
  );
}
