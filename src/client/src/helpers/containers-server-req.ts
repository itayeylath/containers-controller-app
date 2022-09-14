import axios from "axios";
import { Container } from "../types/containers-types";

//All requests from the server to CRUD (create,read,update,delete)- containers.
export const reqAddContainer = async (data: Container) => {
  await axios.post("/containers/add", data);
};
export const reqGetContainers = async () => {
  const values = await axios.get("/containers/data/all");
  return values.data;
};
// TODO: add get by id
export const reqUpdateContainer = async (data: Container) => {
  await axios.put("/containers/update", data);
  console.log("update");
  
};
export const reqDeleteContainer = async (id: number) => {
  await axios.delete("/containers/delete/" + id);
};
