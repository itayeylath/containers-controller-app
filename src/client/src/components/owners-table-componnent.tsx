import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import { Officer, OfficerTableProps } from "../types/officer-table-types";

class OfficerTable extends React.Component<OfficerTableProps> {
  state = {};

  render() {
    // Create table body content.
    const tableBody = this.props.officers.map((element: Officer) => {
      return (
        <tbody key={element.officer_id}>
          <tr>
            <td>
              <NavLink
                to={`/officers/${element.officer_id}`}
                key={element.officer_id}
              >
                {element.officer_id}
              </NavLink>
            </td>
            <td>{element.name}</td>
            <td>{element.army_identity_number}</td>
            <td>{element.email}</td>
            <td>{element.phone_number}</td>
            <td>
              <button>Delete</button>
            </td>
            <td>
              <button>Update</button>
            </td>
          </tr>
        </tbody>
      );
    });
    // Create table head content.
    const tableHead = (
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>army identity number</th>
          <th>email</th>
          <th>phone number</th>
        </tr>
      </thead>
    );
    return (
      <div>
        <h2>officers table</h2>
        <table>
          {tableHead}
          {tableBody}
        </table>
        <Outlet context={this.props.officers} />
      </div>
    );
  }
}

export default OfficerTable;
