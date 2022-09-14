import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocationsTable from "./components/locations-table-componnent";
import LocationsHistoryTable from "./components/locations-history-table-componnent";
import ContainerTable from "./components/containers-table-componnent";
import HomePage from "./pages/home-page";
import OwnersTable from "./components/owners-table-componnent";

const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/containers" element={<ContainerTable />} />
          <Route path="/owners" element={<OwnersTable />} />
          <Route path="/locations" element={<LocationsTable />} />
          <Route path="/locationsHistory" element={<LocationsHistoryTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
