import {
  getAllLocations,
  getLocationById,
  addNewLocation,
  updateLocation,
  deleteLocation,
} from "../controllers/locations-controllers";
import { Router } from "express";

const locationsRouter = Router();

// Client requests to CRUD (create,read,update,delete)- locations.
locationsRouter.get("/data/all", getAllLocations);
locationsRouter.get("/data/:id", getLocationById);
locationsRouter.post("/add", addNewLocation);
locationsRouter.put("/update", updateLocation);
locationsRouter.delete("/delete/:id", deleteLocation);

export default locationsRouter;
