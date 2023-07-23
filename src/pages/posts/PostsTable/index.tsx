import { Table, TableRowData } from '../../../components/Table';
import { PagesDisplay } from './PagesDisplay';

type PagedTableProps = {
  data: (TableRowData | undefined)[];

  currentPage: number;
  pagesCount: number;
  onPageChange: (page: number) => void;
};

export function PostsTable({ data, currentPage, pagesCount, onPageChange }: PagedTableProps) {
  return (
    <div className='paged-table-wrapper'>
      <Table data={data} />
      <PagesDisplay currentPage={currentPage} pagesCount={pagesCount} onPageChange={onPageChange} />
    </div>
  );
}
