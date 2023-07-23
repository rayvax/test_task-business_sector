export type TableRowData = {
  id: number;
  title: string;
  description: string;
};

type TableProps = {
  data: (TableRowData | undefined)[];
};

export function Table({ data }: TableProps) {
  const isLoading = data.some((d) => d === undefined);

  return (
    <table className={`${isLoading ? 'loading' : ''}`}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Заголовок</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, i) =>
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
