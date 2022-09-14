import axios from "axios";
import { LocationHistory } from "../types/locations-history-types";

//All requests from the server to CRUD (create,read,update,delete)- locationshistory.
export const reqAddLocationsHistory = async (data: LocationHistory) => {
  await axios.post("/locationshistory/add", data);
};
export const reqGetLocationsHistory = async () => {
  const values = await axios.get("/locationshistory/data/all");
  return values.data;
};
export const reqGetLocationHistoryById = async (id: number) => {
  await axios.delete("/locationshistory/data/" + id);
};
export const reqUpdateLocationHistory = async (data: LocationHistory) => {
  await axios.put("/locationshistory/update", data);
};
export const reqDeleteLocationHistory = async (id: number) => {
  await axios.delete("/locationshistory/delete/" + id);
};
