import { Table, TableRowData } from '../Table';
import { PagesDisplay } from './PagesDisplay';

type PagedTableProps = {
  data: TableRowData[];

  currentPage: number;
  pagesCount: number;
  onPageChange: (page: number) => void;
};

export function PagedTable({ data, currentPage, pagesCount, onPageChange }: PagedTableProps) {
  return (
    <div className='paged-table'>
      <Table data={data} />
      <PagesDisplay currentPage={currentPage} pagesCount={pagesCount} onPageChange={onPageChange} />
    </div>
  );
}
