import HeaderBar from "../components/header-bar";
import "../styles/header.scss";
import "../figma-pics/logo.tsx";
import Logo from "../figma-pics/logo";

const Header = () => {
  return (
    //TODO:  main title componennt
    <div className="header-container">
      <div className="container-main-title">
        <div className="logo">
          <Logo />
        </div>
        <div className="main-title">controller</div>
      </div>
        <HeaderBar />
    </div>
  );
};
export default Header;
