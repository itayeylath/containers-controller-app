import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import OwnersPage from "./pages/owners-page";
import ContainersPage from "./pages/containers-page";
import LocationsPage from "./pages/locations-page";
import LocationsHistoryPage from "./pages/locations-history-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/containers" element={<ContainersPage/>} />
        <Route path="/owners" element={<OwnersPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locationsHistory" element={<LocationsHistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
