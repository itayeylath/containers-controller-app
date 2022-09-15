import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/header.scss";
class HeaderBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="header-bar">

        <div className="nav-bar">
        <Link to={`/containers`}>containers table</Link>
        <Link to={`/owners`}>owners table</Link>
        <Link to={`/locations`}>Location table</Link>
        <Link to={`/locationsHistory`}>Locations history table</Link>
        <Link to={`/`}>Home page</Link>
        </div>

        <div className="action-buttons">
          action buttons
        </div>
        <Outlet />
      </div>
    );
  }
}

export default HeaderBar;
