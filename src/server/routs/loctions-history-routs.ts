import {
  getAllLocationsHistory,
  getLocationHistoryById,
  addNewLocationHistory,
  updateLocationHistory,
  deleteLocationHistory,
} from "../controllers/locations-history-controllers";
import { Router } from "express";

const locationsHistoryRouter = Router();

// Client requests to CRUD (create,read,update,delete)- locations History.
locationsHistoryRouter.get("/data/all", getAllLocationsHistory);
locationsHistoryRouter.get("/data/:id", getLocationHistoryById);
locationsHistoryRouter.post("/add", addNewLocationHistory);
locationsHistoryRouter.put("/update", updateLocationHistory);
locationsHistoryRouter.delete("/delete/:id", deleteLocationHistory);

export default locationsHistoryRouter;
