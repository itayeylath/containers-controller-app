import { Link, Outlet } from "react-router-dom";
import "../styles/header.scss";
import "../figma-pics/US.png";
import "../figma-pics/moon.png";
import "../figma-pics/bell.png";
import "../figma-pics/Avatar.png";

const HeaderBar = () => {
  return (
    <div className="nav-bar">
      <Link className="nav-bar-btn-home-page" to={`/`}>
        <p className="nav-bar-title-home-page">Home page</p>
      </Link>

      <Link className="nav-bar-btn" to={`/containers`}>
        <p className="nav-bar-title">Containers</p>
      </Link>

      <Link className="nav-bar-btn" to={`/owners`}>
        <p className="nav-bar-title">Owners</p>
      </Link>

      <Link className="nav-bar-btn" to={`/locations`}>
        <p className="nav-bar-title">Location</p>
      </Link>

      <Link className="nav-bar-btn" to={`/locationsHistory`}>
        <p className="nav-bar-title">Locations history</p>
      </Link>
    
      {/* TODO: componnent */}
      <div className="action-buttons">
        <img className="flag" src="../figma-pics/US.png"/>
        <img className="dark-mood" src="../figma-pics/moon.png"/>
        <img className="bell" src="../figma-pics/bell.png"/>
        <img className="user" src="../figma-pics/Avatar.png"/>

      </div>
      <Outlet />
    </div>
  );
};
export default HeaderBar;

//text-decoration: none;