interface TableProps {
  head: string[];
  body: any;
  elementTypes: any;
  handelButtonDelete: any;
  handelButtonUpdate: any;
}

const Table = (props: TableProps) => {
  return (
    <table>
      {/* Create table header content*/}
      <thead>
        <tr>
          {props.head.map((element: string, index: number) => {
            return <th key={index}>{element}</th>;
          })}
        </tr>
      </thead>

      {/* Create table body content */}
      <tbody>
        {props.body.map((element: any, index: number) => {
          return (
            <tr key={index}>
              {props.elementTypes.map((type: any, index: number) => {
                return <td key={index}>{element[type]}</td>;
              })}
              <td>
                <button
                  onClick={() => {
                    props.handelButtonDelete(element[props.elementTypes[0]]);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    props.handelButtonUpdate(element);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
