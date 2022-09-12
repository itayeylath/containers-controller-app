import axios from "axios";
import { Container } from "../types/containers-table-types";

//All requests from the server to CRUD (create,read,update,delete)- containers.
export const reqAddContainer = async (data: Container) => {
  await axios.post(
    "http://localhost:4040/containers/add",
    data
  );
};
export const reqGetContainers = async () => {
  const values = await axios.get(
    "http://localhost:4040/containers/data/all"
  );
  return values.data;
};
// TODO: add get by id
export const reqUpdateContainer = async (data: Container) => {
  await axios.put(
    "http://localhost:4040/containers/update",
    data
  );
};
export const reqDeleteContainer = async (id: number) => {
  await axios.delete(
    "http://localhost:4040/containers/delete/" + id
  );
};

