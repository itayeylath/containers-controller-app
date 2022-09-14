export interface LocationHistory {
  location_history_id: number;
  arrival_date: string;
  departure_date: string;
  location_id: number;
  sock_id: number;
}
export interface LocationsHistoryTableProps {
    locationsHistory: LocationHistory[];
  }