import Footer from "../components/footer-componnent";
import Header from "../components/header-componnent";
import LocationsHistoryTable from "../components/locations-history-table-componnent";
import LocationsTable from "../components/locations-table-componnent";

const LocationsHistoryPage = () => {
    return (
      <div>
        <Header/>
        <LocationsHistoryTable />
        <Footer/>
      </div>
    );
  };
  export default LocationsHistoryPage;