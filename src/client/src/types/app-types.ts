import { LocationHistory } from "./locations-history-table-types";
import { Officer } from "./officer-table-types";
import { Container } from "./containers-table-types";
import { Location } from "./locations-table-types";

export interface SockTableState {
  socks: Container[];
  officers: Officer[];
  locations: Location[];
  locationsHistory: LocationHistory[];
}
