import { useEffect, useState } from 'react';
import { PostsTable } from './PostsTable';
import { usePostList } from '../../store/posts/hooks';
import { fetchPosts } from '../../store/posts/thunk';
import { useAppDispatch } from '../../store';
import { PostData } from '../../types/post';

const emptyPosts: PostData[] = [];

function usePagedPosts() {
  const [page, setPage] = useState(1);
  const postsList = usePostList();
  const dispatch = useAppDispatch();

  //fetch posts
  useEffect(() => {
    if (postsList[page]) return;

    dispatch(fetchPosts({ page }));
  }, [page]);

  return {
    posts: postsList[page] ?? emptyPosts,
    page,
    setPage,
  };
}

export function PostsPage() {
  const { posts, page, setPage } = usePagedPosts();

  return (
    <PostsTable
      data={posts.map((post) => (post ? { ...post, description: post.body } : undefined))}
      currentPage={page}
      pagesCount={5}
      onPageChange={setPage}
    />
  );
}
