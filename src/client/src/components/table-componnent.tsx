import { NavLink } from "react-router-dom";

interface TableProps {
  head: string[];
  body: any;
  handelButtonDelete: any;
  handelButtonUpdate: any;
}

const Table = (props: TableProps) => {
  return (
    <table>
      {/* Create table header content*/}
      <thead>
        <tr>
          {props.head.map((element: string) => {
            return <th>{element}</th>;
          })}
        </tr>
      </thead>

      {/* Create table body content */}
      <tbody>
        {props.body.map((element: any) => {
          return (
            <tr>
              <td>
                <NavLink
                  to={`/container/${element.container_id}`}
                  key={element.container_id}
                >
                  {element.container_id}
                </NavLink>
              </td>
              <td>{element.model}</td>
              <td>{element.quantity}</td>
              <td>{element.size}</td>
              <td>{element.manufacturing_year}</td>
              <td>{element.location_id}</td>
              <td>{element.owner_id}</td>
              <td>
                <button
                  onClick={() => {
                    props.handelButtonDelete(element.container_id)
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
