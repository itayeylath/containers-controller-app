import { NavLink } from "react-router-dom";

interface TableProps {
  head: string[];
  body: any;
  deleteFunc: any;
  updateFunc: any;
}

const Table = (porps: TableProps) => {
  return (
    <table>
      {/* Create table header content*/}
      <thead>
        <tr>
          {porps.head.map((element: string) => {
            return <th>{element}</th>;
          })}
        </tr>
      </thead>

      {/* Create table body content */}
      <tbody>
        {porps.body.map((element: any) => {
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
                    porps.deleteFunc(element.container_id)
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    porps.updateFunc(element);
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
