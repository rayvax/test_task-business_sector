import { useMemo, useState } from 'react';
import { SortDirection } from '.';
import { TableRowData } from '..';

export type SortableColumn = keyof TableRowData;

export type TableSorting = {
  column: SortableColumn;
  direction: SortDirection;
};

export function useTableSorting(tableData: (TableRowData | undefined)[]) {
  const [sorting, setSorting] = useState<TableSorting | null>(null);

  const sortedTableData: (TableRowData | undefined)[] = useMemo(() => {
    if (!sorting || tableData.some((row) => !row)) return tableData;

    const directionMultiplier = sorting.direction === 'asc' ? 1 : -1;

    const result = [...tableData] as TableRowData[];
    return result.sort((a, b) => {
      const sortResult = a[sorting.column] > b[sorting.column] ? 1 : -1;
      return sortResult * directionMultiplier;
    });
  }, [tableData, sorting]);

  return {
    sortedTableData,
    getSorting: (column: SortableColumn) => (sorting?.column === column ? sorting.direction : null),
    toggleSorting: (column: SortableColumn) =>
      setSorting((prev) => {
        if (!prev || column !== prev.column) return { column, direction: 'asc' };

        return { column, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }),
  };
}
