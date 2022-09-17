import Footer from "../components/footer-componnent";
import Header from "../components/header-componnent";
import LocationsTable from "../components/locations-table-componnent";

const LocationsPage = () => {
    return (
      <div className="home-page">
        <Header/>
        <LocationsTable />
        <Footer/>
      </div>
    );
  };
  export default LocationsPage;