import HeaderBar from "../components/header-bar";
import "../styles/header.scss";
// import "../figma-pics/logo.svg"
const Header = () => {
    return (
      <div className="header-container">

        <div className="container-main-title">
          <div className="logo">
            
            {/* <img src="../figma-pics/logo.svg"/> */}

          </div>
          <h1 className="main-title">controller</h1>
        </div >

        <HeaderBar />
      </div>
    );
  };
  export default Header;

  