import { useAppSelector } from '..';

export function usePostList() {
  return useAppSelector((state) => state.posts.postList);
}
