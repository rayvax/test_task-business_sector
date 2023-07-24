import { useEffect, useMemo, useState } from 'react';
import { useFilterPosts, usePostList } from '../../store/posts/hooks';
import { fetchPosts } from '../../store/posts/thunk';
import { useAppDispatch } from '../../store';
import { PostData } from '../../types/post';
import { Table } from '../../components/Table';
import { PagesDisplay } from './PagesDisplay';
import { PostsSearchField } from './PostsSearchField';

const emptyPosts: PostData[] = [];

function usePagedPosts() {
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();
  const filterPosts = useFilterPosts();
  const postsList = usePostList();

  //fetch posts
  useEffect(() => {
    if (postsList[page]) return;

    dispatch(fetchPosts({ page }));
  }, [page]);

  const posts = useMemo(
    () => (postsList[page] ? filterPosts(postsList[page]) : emptyPosts),
    [postsList[page], filterPosts],
  );

  return {
    posts,
    page,
    setPage,
  };
}

export function PostsPage() {
  const { posts, page, setPage } = usePagedPosts();
  const diplayPosts = posts.map((post) => (post ? { ...post, description: post.body } : undefined));

  return (
    <div className='paged-table-wrapper'>
      <PostsSearchField />
      <Table data={diplayPosts} />
      <PagesDisplay currentPage={page} pagesCount={5} onPageChange={setPage} />
    </div>
  );
}
