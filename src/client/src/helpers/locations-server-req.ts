import axios from "axios";
import { Location } from "../types/locations-types";

//All requests from the server to CRUD (create,read,update,delete)- locations.
export const reqAddLocation = async (data: Location) => {
  await axios.post("/locations/add", data);
};
export const reqGetLocations = async () => {
  const values = await axios.get("/locations/data/all");
  return values.data;
};
export const reqGetLocationById = async (id: number) => {
  await axios.delete("/locations/data/" + id);
};
export const reqUpdateLocation = async (data: Location) => {
  await axios.put("/locations/update", data);
};
export const reqDeleteLocation = async (id: number) => {
  await axios.delete("/locations/delete/" + id);
};
