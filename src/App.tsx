import { useState } from 'react';
import { PagedTable } from './components/PagedTable';
import { TableRowData } from './components/Table';

const mockData: TableRowData[] = new Array(10).fill(null).map((_, i) => ({
  id: i + 1,
  title: 'Lorem ipsum dolor sit amet conse',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque ad enim aut delectus hic quo autem incidunt earum facilis! enim aut delectus hic quo autem incidunt earum facilis!',
}));

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className='content-area'>
      <PagedTable data={mockData} currentPage={page} pagesCount={5} onPageChange={setPage} />
    </div>
  );
}

export default App;
