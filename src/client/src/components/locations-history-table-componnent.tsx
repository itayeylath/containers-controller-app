import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import { LocationsHistoryTableProps, LocationHistory } from "../types/locations-history-table-types";

class LocationsHistoryTable extends React.Component<LocationsHistoryTableProps> {
  state = {};

  render() {
    // Create table body content.
    const tableBody = this.props.locationsHistory.map((element: LocationHistory) => {
      return (
        <tbody key={element.location_id}>
          <tr>
            <td>
              <NavLink
                to={`/locations/${element.location_history_id}`}
                key={element.location_history_id}
              >
                {element.location_history_id}
              </NavLink>
            </td>
            <td>{element.arrival_date}</td>
            <td>{element.departure_date}</td>
            <td>{element.location_id}</td>
            <td>{element.sock_id}</td>
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
          <th>arrival date</th>
          <th>departure date</th>
          <th>location id</th>
          <th>sock id</th>
        </tr>
      </thead>
    );
    return (
      <div>
        <h2>locations history table</h2>
        <table>
          {tableHead}
          {tableBody}
        </table>
        <Outlet context={this.props.locationsHistory} />
      </div>
    );
  }
}

export default LocationsHistoryTable;
