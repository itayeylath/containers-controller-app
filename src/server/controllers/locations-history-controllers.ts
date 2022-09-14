import { RequestHandler } from "express";
import { client } from "../postgress-db";

// Add new location history to DB.
export const addNewLocationHistory: RequestHandler = async (req, res) => {
  try {
    const values = req.body;
    const valuesArr = Object.values(values);
    const sql =
      "INSERT INTO locations_history( location_history_id ,arrival_date, departure_date, location_id, container_id) VALUES($1, $2, $3, $4, $5)";
    await client.query(sql, valuesArr);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};
// arrival_date: 2021-02-01T22:00:00.000Z,
// departure_date: 2022-03-03T22:00:00.000Z,

// Get all locations history from DB.
export const getAllLocationsHistory: RequestHandler = async (_req, res) => {
  try {
    const sql = "SELECT * FROM locations_history";
    const object = await client.query(sql);
    // Modify dates.
    object.rows.forEach((element: any) => {
      element.arrival_date = element.arrival_date.toISOString().split("T")[0];
      element.departure_date = element.departure_date
        .toISOString()
        .split("T")[0];
    });
    res.send(object.rows);
  } catch {
    res.sendStatus(500);
  }
};

// Get location history from DB.
export const getLocationHistoryById: RequestHandler = async (req, res) => {
  try {
    const values = req.params.id;
    const valuesArr = Object.values(values);
    const sql =
      "SELECT location_history_id ,arrival_date, departure_date, location_id, container_id FROM locations_history WHERE location_history_id=$1";
    const object = await client.query(sql, valuesArr);
    res.send(object.rows);
  } catch {
    res.sendStatus(500);
  }
};

// Update location history in DB.
export const updateLocationHistory: RequestHandler = async (req, res) => {
  try {
    const values = req.body;
    const valuesArr = Object.values(values);

    const sql =
      "UPDATE locations_history SET arrival_date=$2, departure_date=$3, location_id=$4, container_id=$5 WHERE location_history_id=$1";
    await client.query(sql, valuesArr);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

// Delete location history in DB.
export const deleteLocationHistory: RequestHandler = async (req, res) => {
  try {
    const values = req.params.id;
    const valuesArr = Object.values(values);
    const sql = "DELETE FROM locations_history WHERE location_history_id=$1";
    await client.query(sql, valuesArr);
    res.sendStatus(200);
  } catch (err: any) {
    console.error(err.message);
    res.sendStatus(500);
  }
};
