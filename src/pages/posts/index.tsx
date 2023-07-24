import { useEffect, useState } from 'react';
import { usePostList } from '../../store/posts/hooks';
import { fetchPosts } from '../../store/posts/thunk';
import { useAppDispatch } from '../../store';
import { PostData } from '../../types/post';
import { Table } from '../../components/Table';
import { PagesDisplay } from './PagesDisplay';

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
  const diplayPosts = posts.map((post) => (post ? { ...post, description: post.body } : undefined));

  return (
    <div className='paged-table-wrapper'>
      <Table data={diplayPosts} />
      <PagesDisplay currentPage={page} pagesCount={5} onPageChange={setPage} />
    </div>
  );
}
