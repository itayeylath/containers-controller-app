import React from "react";
import { Link, Outlet } from "react-router-dom";
class HeaderBar extends React.Component {
  state = {};

  // TODO: Chenge styles.
  render() {
    return (
      <div className="App">
        <div> Socks project </div>
        <Link style={{ display: "block", margin: "1rem 0" }} to={`/socks`}>
          Socks table
        </Link>
        <Link style={{ display: "block", margin: "1rem 0" }} to={`/officers`}>
          Officers table
        </Link>
        <Link style={{ display: "block", margin: "1rem 0" }} to={`/locations`}>
          Location table
        </Link>
        <Link style={{ display: "block", margin: "1rem 0" }} to={`/locationsHistory`}>
          Locations history table
        </Link>
        <Outlet />
      </div>
    );
  }
}

export default HeaderBar;
