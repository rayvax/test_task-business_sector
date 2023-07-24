import { useMemo } from 'react';

type PagesCounterProps = {
  currentPage: number;
  pagesCount: number;
  onPageChange: (page: number) => void;
};

export function PagesDisplay({ currentPage, pagesCount, onPageChange }: PagesCounterProps) {
  const pagesCounts = useMemo(() => {
    const result = [];
    for (let i = 1; i <= pagesCount; i++) {
      result.push(
        <li
          className={`page-count ${i === currentPage ? 'current' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>,
      );
    }
    return result;
  }, [pagesCount, currentPage]);

  function handlePrev() {
    if (currentPage <= 1) return;

    onPageChange(currentPage - 1);
  }

  function handleNext() {
    if (currentPage >= pagesCount) return;

    onPageChange(currentPage + 1);
  }

  return (
    <div className='pages-display'>
      <button
        className='pages-display__change-page prev'
        type='button'
        onClick={handlePrev}
        disabled={currentPage <= 1}
      >
        Назад
      </button>
      <ol className='pages-display__counts'>{...pagesCounts}</ol>
      <button
        className='pages-display__change-page next'
        type='button'
        onClick={handleNext}
        disabled={currentPage >= pagesCount}
      >
        Далее
      </button>
    </div>
  );
}
