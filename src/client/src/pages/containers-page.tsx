import ContainerTable from "../components/containers-table-componnent";
import Footer from "../components/footer-componnent";
import Header from "../components/header-componnent";


const ContainersPage = () => {
    return (
      <div className="home-page">
        <Header/>
        <ContainerTable/>
        <Footer/>
      </div>
    );
  };
  export default ContainersPage;