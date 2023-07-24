import { SortableHeading } from './SortableHeading';
import { useTableSorting } from './SortableHeading/hooks';

export type TableRowData = {
  id: number;
  title: string;
  description: string;
};

type TableProps = {
  data: (TableRowData | undefined)[];
};

export function Table({ data }: TableProps) {
  const { sortedTableData, getSorting, toggleSorting } = useTableSorting(data);

  const isLoading = sortedTableData.some((d) => d === undefined);

  return (
    <table className={`${isLoading ? 'loading' : ''}`}>
      <thead>
        <tr>
          <SortableHeading sorting={getSorting('id')} onToggleSorting={() => toggleSorting('id')}>
            ID
          </SortableHeading>
          <SortableHeading
            sorting={getSorting('title')}
            onToggleSorting={() => toggleSorting('title')}
          >
            Заголовок
          </SortableHeading>
          <SortableHeading
            sorting={getSorting('description')}
            onToggleSorting={() => toggleSorting('description')}
          >
            Описание
          </SortableHeading>
        </tr>
      </thead>
      <tbody>
        {sortedTableData.map((rowData, i) =>
          rowData ? (
            <tr key={`tablerow-${rowData.id}-${i}`}>
              <td>{rowData.id}</td>
              <td>{rowData.title}</td>
              <td>{rowData.description}</td>
            </tr>
          ) : (
            <tr key={`tablerow-loading-${i}`}>
              <td />
              <td />
              <td />
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
