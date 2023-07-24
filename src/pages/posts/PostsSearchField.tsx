import { useCallback } from 'react';
import { SearchField } from '../../components/SearchField';
import { useAppDispatch } from '../../store';
import { setPostsFilter } from '../../store/posts/reducer';
import { usePostsFilter } from '../../store/posts/hooks';

export function PostsSearchField() {
  const dispatch = useAppDispatch();

  const filter = usePostsFilter();

  const handleFilterChange = useCallback(
    (filter: string) => {
      dispatch(setPostsFilter(filter));
    },
    [dispatch],
  );

  return (
    <SearchField
      search={filter}
      onSearchChange={handleFilterChange}
      id='post-search'
      name='post-search'
      placeholder='Поиск'
    />
  );
}
