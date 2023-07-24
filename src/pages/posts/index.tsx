import { Table } from '../../components/Table';
import { PagesDisplay } from './PagesDisplay';
import { PostsSearchField } from './PostsSearchField';
import { usePagedPosts } from './hooks';

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
