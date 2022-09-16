import { Link, Outlet } from "react-router-dom";
import "../styles/header.scss";
import US from "../figma-pics/US.png";
import moon from "../figma-pics/moon.png";
import bell from "../figma-pics/bell.png";
import Avatar from "../figma-pics/Avatar.png";

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
        {/* TODO: Fix imgs style */}
        <div className="US-img">
          <img className="flag" src={US} />
        </div>

        <img className="dark-mood" src={moon} />
        <img className="bell" src={bell} />
        <img className="user" src={Avatar} />
      </div>
      <Outlet />
    </div>
  );
};
export default HeaderBar;

//text-decoration: none;
