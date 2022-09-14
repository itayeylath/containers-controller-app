import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/containers-table-componnent.scss";
class HeaderBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="HeaderBar">
        <div className="Bar">
        <Link to={`/containers`}>containers table</Link>
        <Link to={`/owners`}>owners table</Link>
        <Link to={`/locations`}>Location table</Link>
        <Link to={`/locationsHistory`}>Locations history table</Link>
        <Link to={`/`}>Home page</Link>
        </div>
        <Outlet />
      </div>
    );
  }
}

export default HeaderBar;
