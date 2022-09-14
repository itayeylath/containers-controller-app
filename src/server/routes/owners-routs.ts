import {
  addNewOwner,
  getOwnerById,
  getAllOwners,
  updateOwner,
  deleteOwner,
} from "../controllers/owners-controllers";
import { Router } from "express";

const ownersRouter = Router();

// Client requests to CRUD (create,read,update,delete)- owners.
ownersRouter.get("/data/all", getAllOwners);
ownersRouter.get("/data/:id", getOwnerById);
ownersRouter.post("/add", addNewOwner);
ownersRouter.put("/update", updateOwner);
ownersRouter.delete("/delete/:id", deleteOwner);

export default ownersRouter;
