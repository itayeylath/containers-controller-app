import { RequestHandler } from "express";
import { client } from "../postgress-db";

// Add new container to DB.
export const addNewContainer: RequestHandler = async (req, res) => {
  try {
    const values = req.body;
    const valuesArr = Object.values(values);
    const sql =
      "INSERT INTO containers(container_id, model, quantity, size, manufacturing_year, location_id, owner_id) VALUES($1, $2, $3, $4, $5, $6, $7)";
    await client.query(sql, valuesArr);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

// Get container by id from DB.
export const getContainerById: RequestHandler = async (req, res) => {
  try {
    const values = req.params.id;
    const valuesArr = Object.values(values);
    const sql =
      "SELECT container_id, model, quantity, size, manufacturing_year, location_id, owner_id FROM containers WHERE container_id=$1";
    const object = await client.query(sql, valuesArr);
    res.send(object.rows);
  } catch {
    res.sendStatus(500);
  }
};

// Get all containers from DB.
export const getAllContainers: RequestHandler = async (_req, res) => {
  try {
    const sql = "SELECT * FROM containers";
    const object = await client.query(sql);
    res.send(object.rows);
  } catch {
    res.sendStatus(500);
  }
};

// Update container in DB.
export const updateContainer: RequestHandler = async (req, res) => {
  try {
    const values = req.body;
    const valuesArr = Object.values(values);
    const sql =
      "UPDATE containers SET model=$2, quantity=$3, size=$4, manufacturing_year=$5, location_id=$6, owner_id=$7 WHERE container_id=$1";
    await client.query(sql, valuesArr);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

// Delete container in DB.
export const deleteContainer: RequestHandler = async (req, res) => {
  try {
    const values = req.params.id;
    const valuesArr = Object.values(values);
    const sql = "DELETE FROM containers WHERE container_id=$1";
    await client.query(sql, valuesArr);
    res.sendStatus(200);
  } catch (err: any) {
    console.error(err.message);
    res.sendStatus(500);
  }
};
