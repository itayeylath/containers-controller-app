import axios from "axios";
import { Container } from "../types/containers-table-types";

const mainUrl = "https://containers-controller2.herokuapp.com";

//All requests from the server to CRUD (create,read,update,delete)- containers.
export const reqAddContainer = async (data: Container) => {
  await axios.post(mainUrl + "/containers/add", data);
};
export const reqGetContainers = async () => {
  const values = await axios.get(mainUrl + "/containers/data/all");
  return values.data;
};
// TODO: add get by id
export const reqUpdateContainer = async (data: Container) => {
  await axios.put(mainUrl + "/containers/update", data);
};
export const reqDeleteContainer = async (id: number) => {
  await axios.delete(mainUrl + "/containers/delete/" + id);
};
