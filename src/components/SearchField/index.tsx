import { InputHTMLAttributes } from 'react';
import { SeachIcon } from '../../assets/icon';

type SearchFieldProps = {
  search: string;
  onSearchChange: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export function SearchField({ search, onSearchChange, ...inputProps }: SearchFieldProps) {
  return (
    <div className='search-field'>
      <input
        type='search'
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        {...inputProps}
      />
      <SeachIcon className='search-field__search-icon' />
    </div>
  );
}
