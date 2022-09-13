import { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderBar from "./components/header-bar";
import axios from "axios";
import OfficerTable from "./components/owners-table-componnent";
import LocationsTable from "./components/locations-table-componnent";
import LocationsHistoryTable from "./components/locations-history-table-componnent";
import { Officer } from "./types/officer-table-types";
import { LocationHistory } from "./types/locations-history-table-types";
import { Location } from "./types/locations-table-types";
import ContainerTable from "./components/containers-table-componnent";

const App = () => {
  // const [socks, setSocks] = useState<Sock[] | []>([]);
  const [officers, setOfficers] = useState<Officer[] | []>([]);
  const [locations, setLocations] = useState<Location[] | []>([]);
  const [locationsHistory, setLocationsHistory] = useState<
    LocationHistory[] | []
  >([]);

  const getofficersToState = async () => {
    const values = await axios.get(
      "http://localhost:4040/owners/data/all"
    );
    setOfficers(values.data);
  };

  const getlocationsToState = async () => {
    const values = await axios.get(
      "http://localhost:4040/locations/data/all"
    );
    setLocations(values.data);
  };

  const getlocationshistoryToState = async () => {
    const values = await axios.get(
      "http://localhost:4040/locationshistory/data/all"
    );
    setLocationsHistory(values.data);
  };

  useEffect(() => {
    console.log("initial data requests");
    // getSocksToState();
    getofficersToState();
    getlocationsToState();
    getlocationshistoryToState();

    return () => console.log("useEffect with [] cleanup");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderBar />}>
          <Route path="/containers" element={<ContainerTable/>} />
          <Route
            path="/owners"
            element={<OfficerTable officers={officers} />}
          />
          <Route
            path="/locations"
            element={<LocationsTable locations={locations} />}
          />
          <Route
            path="/locationsHistory"
            element={
              <LocationsHistoryTable locationsHistory={locationsHistory} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
