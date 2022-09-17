import ChackBox from "../figma-pics/check-box";
import Edit from "../figma-pics/edit-icon";
import "../styles/containers-page.scss";
interface TableProps {
  head: string[];
  body: any;
  elementTypes: any;
  handelButtonDelete: any;
  handelButtonUpdate: any;
}

const Table = (props: TableProps) => {
  return (
    <table className="table">
      {/* Create table header content*/}
      <thead>
        <tr className="table-head-row">
          {props.head.map((element: string, index: number) => {
            return (
              <th className="table-th" key={index}>
                {element}
              </th>
              
            );
          })}
          <th className="table-th-empty"></th>
          <th className="table-th-empty"></th>
        </tr>
      </thead>

      {/* Create table body content */}
      <tbody>
        {props.body.map((element: any, index: number) => {
          return (
            <tr className="table-body-row" key={index}>

              {props.elementTypes.map((type: any, index: number) => {
                return <td className="table-body-td" key={index}>{element[type]}</td>;
              })}
              <td>
                <button
                className="table-row-delete"
                  onClick={() => {
                    props.handelButtonDelete(element[props.elementTypes[0]]);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                className="table-row-update"
                  onClick={() => {
                    props.handelButtonUpdate(element);
                  }}
                > <Edit/>
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
