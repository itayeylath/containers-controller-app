export interface Location {
  location_id: number;
  lat: string;
  lon: string;
  base_name: string;
  nearest_city: string;
}
export interface LocationsTableProps {
    locations: Location[];
  }