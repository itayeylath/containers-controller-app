import {
  addNewContainer,
  getContainerById,
  getAllContainers,
  updateContainer,
  deleteContainer,
} from "../controllers/containers-controllers";
import { Router } from "express";

const containersRouter = Router();

// Client requests to CRUD (create,read,update,delete)- containers.
containersRouter.get("/data/all", getAllContainers);
containersRouter.get("/data/:id", getContainerById);
containersRouter.post("/add", addNewContainer);
containersRouter.put("/update", updateContainer);
containersRouter.delete("/delete/:id", deleteContainer);

export default containersRouter;
