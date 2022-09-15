import HeaderBar from "../components/header-bar";
import "../styles/header.scss";
import "../figma-pics/logo.svg";
const Header = () => {
  return (
    //TODO:  main title componennt
    <div className="header-container">
      <div className="container-main-title">
        <div className="logo">
          <img className="logo-pic" src="../figma-pics/logo.svg" />
        </div>
        <div className="main-title">controller</div>
      </div>
        <HeaderBar />
    </div>
  );
};
export default Header;
