import { ReactNode } from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';

export type SortDirection = 'asc' | 'desc';

type SortableHeadingProps = {
  children: ReactNode;
  sorting: SortDirection | null;
  onToggleSorting: () => void;
};

export function SortableHeading({ children, sorting, onToggleSorting }: SortableHeadingProps) {
  return (
    <th className='sortable-heading'>
      <button onClick={onToggleSorting}>
        {children}
        <div className='sort-icon'>
          {sorting === 'desc' ? <ChevronUp /> : <ChevronDown color={sorting ? 'white' : 'gray'} />}
        </div>
      </button>
    </th>
  );
}
