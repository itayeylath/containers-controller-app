import axios from "axios";
import { Owner } from "../types/owners-types";

//All requests from the server to CRUD (create,read,update,delete)- owners.
export const reqAddOwner = async (data: Owner) => {
  await axios.post("/owners/add", data);
};
export const reqGetOwners = async () => {
  const values = await axios.get("/owners/data/all");
  return values.data;
};
export const reqGetOwnerById = async (id: number) => {
  await axios.delete("/owners/data/" + id);
};
export const reqUpdateOwner = async (data: Owner) => {
  await axios.put("/owner/update", data);
};
export const reqDeleteOwner = async (id: number) => {
  await axios.delete("/owners/delete/" + id);
};
