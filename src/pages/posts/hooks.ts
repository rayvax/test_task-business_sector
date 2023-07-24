import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFilterPosts, usePostList } from '../../store/posts/hooks';
import { fetchPosts } from '../../store/posts/thunk';
import { useAppDispatch } from '../../store';
import { PostData } from '../../types/post';
import { useSearchParams } from 'react-router-dom';
import { QUERY_PAGE_KEY } from './constants';

function useQueriedPage() {
  const [queriedPage, setQueriedPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const pageFromQuery = searchParams.get(QUERY_PAGE_KEY);

    setQueriedPage(pageFromQuery ? Number(pageFromQuery) : 1);
  }, [searchParams]);

  const setPage = useCallback((value: number) => {
    const postsSearchParams = new URLSearchParams();
    postsSearchParams.set(QUERY_PAGE_KEY, value.toString());

    setSearchParams(postsSearchParams, { replace: true });
  }, []);

  return { page: queriedPage, setPage };
}

const emptyPosts: PostData[] = [];
export function usePagedPosts() {
  const { page, setPage } = useQueriedPage();

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
