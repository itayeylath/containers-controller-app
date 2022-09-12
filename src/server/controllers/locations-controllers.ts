import { RequestHandler } from "express";
import { client } from "../postgress-db";

// Add new location to DB.
export const addNewLocation: RequestHandler = async (req, res) => {
  try {
  const values = req.body;
  const valuesArr = Object.values(values);
  const sql =
    "INSERT INTO locations(location_id, lat, lon, port_name, nearest_city) VALUES($1, $2, $3, $4, $5)";
  await client.query(sql, valuesArr);
  res.sendStatus(200);
} catch {
  res.sendStatus(500);
}
};

// Get location from DB.
export const getLocationById: RequestHandler = async (req, res) => {
    try {
    const values = req.params.id;
    const valuesArr = Object.values(values);
    const sql =
      "SELECT location_id, lat, lon, port_name, nearest_city FROM locations WHERE location_id=$1";
    const object = await client.query(sql, valuesArr);
    res.send(object.rows)
  } catch {
    res.sendStatus(500);
  }
};

// Get all locations from DB.
export const getAllLocations: RequestHandler = async (_req, res) => {
  try {
    const sql = "SELECT * FROM locations";
    const object = await client.query(sql);
    res.send(object.rows);
  } catch {
    res.sendStatus(500);
  }
};

// Update location in DB.
export const updateLocation: RequestHandler = async (req, res) => {
    try {
    const values = req.body;
    const valuesArr = Object.values(values);
    const sql =
      "UPDATE locations SET lat=$2, lon=$3, port_name=$4, nearest_city=$5 WHERE location_id=$1";
    await client.query(sql, valuesArr);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

// Delete location in DB.
export const deleteLocation: RequestHandler = async (req, res) => {
    try {
      const values = req.params.id;
      const valuesArr = Object.values(values);
      const sql = "DELETE FROM locations WHERE location_id=$1";
      await client.query(sql, valuesArr);
      res.sendStatus(200);
    } catch (err: any) {
      console.error(err.message);
      res.sendStatus(500);
    }
  
};
