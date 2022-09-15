import Footer from "../components/footer-componnent";
import Header from "../components/header-componnent";
import Main from "../components/main-componnent";
import "../styles/home-page.scss";

const HomePage = () => {
    return (
      <div className="home-page">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  };
  export default HomePage;