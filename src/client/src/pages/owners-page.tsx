import Footer from "../components/footer-componnent";
import Header from "../components/header-componnent";
import OwnersTable from "../components/owners-table-componnent";

const OwnersPage = () => {
    return (
      <div className="home-page">
        <Header/>
        <OwnersTable />
        <Footer/>
      </div>
    );
  };
  export default OwnersPage;