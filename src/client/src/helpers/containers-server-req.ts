import axios from "axios";
import { Container } from "../types/containers-table-types";

//All requests from the server to CRUD (create,read,update,delete)- containers.
export const reqAddContainer = async (data: Container) => {
  await axios.post(
    "https://containers-controller-app.herokuapp.com/containers/add",
    data
  );
};
export const reqGetContainers = async () => {
  const values = await axios.get(
    "https://containers-controller-app.herokuapp.com/containers/data/all"
  );
  return values.data;
};
// TODO: add get by id
export const reqUpdateContainer = async (data: Container) => {
  await axios.put(
    "https://containers-controller-app.herokuapp.com/containers/update",
    data
  );
};
export const reqDeleteContainer = async (id: number) => {
  await axios.delete(
    "https://containers-controller-app.herokuapp.com/containers/delete/" + id
  );
};

