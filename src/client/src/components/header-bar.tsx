import React from "react";
import { Link, Outlet } from "react-router-dom";
class HeaderBar extends React.Component {
  state = {};

  // TODO: Chenge styles.
  render() {
    return (
      <div className="App">
        <div> containers controller app </div>
        <Link style={{ display: "block", margin: "1rem 0" }} to={`/containers`}>
          containers table
        </Link>
        <Link style={{ display: "block", margin: "1rem 0" }} to={`/owners`}>
          owners table
        </Link>
        <Link style={{ display: "block", margin: "1rem 0" }} to={`/locations`}>
          Location table
        </Link>
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/locationsHistory`}
        >
          Locations history table
        </Link>
        <Outlet />
      </div>
    );
  }
}

export default HeaderBar;
