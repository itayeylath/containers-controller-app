import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import { LocationsTableProps, Location } from "../types/locations-table-types";

class LocationsTable extends React.Component<LocationsTableProps> {
  state = {};

  render() {
    // Create table body content.
    const tableBody = this.props.locations.map((element: Location) => {
      return (
        <tbody key={element.location_id}>
          <tr>
            <td>
              <NavLink
                to={`/locations/${element.location_id}`}
                key={element.location_id}
              >
                {element.location_id}
              </NavLink>
            </td>
            <td>{element.lat}</td>
            <td>{element.lon}</td>
            <td>{element.base_name}</td>
            <td>{element.nearest_city}</td>
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
          <th>lat</th>
          <th>lon</th>
          <th>base name</th>
          <th>nearest city</th>
        </tr>
      </thead>
    );
    return (
      <div>
        <h2>locations table</h2>
        <table>
          {tableHead}
          {tableBody}
        </table>
        <Outlet context={this.props.locations} />
      </div>
    );
  }
}

export default LocationsTable;
