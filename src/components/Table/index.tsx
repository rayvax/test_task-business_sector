export type TableRowData = {
  id: number;
  title: string;
  description: string;
};

type TableProps = {
  data: TableRowData[];
};

export function Table({ data }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Заголовок</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, i) => (
          <tr key={`tablerow-${rowData.id}-${i}`}>
            <td>{rowData.id}</td>
            <td>{rowData.title}</td>
            <td>{rowData.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
