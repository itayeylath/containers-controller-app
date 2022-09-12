import { RequestHandler } from "express";
import { client } from "../postgress-db";

// Add new owner to DB.
export const addNewOwner: RequestHandler = async (req, res) => {
  try {
    const values = req.body;
    const valuesArr = Object.values(values);
    const sql =
      "INSERT INTO owners( owner_id ,name ,email ,phone_number) VALUES($1, $2, $3, $4)";
    await client.query(sql, valuesArr);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

// Get owner by id from DB.
export const getOwnerById: RequestHandler = async (req, res) => {
  try {
    const values = req.params.id;
    const valuesArr = Object.values(values);
    const sql =
      "SELECT owner_id, name ,email ,phone_number FROM owners WHERE owner_id=$1";
    const object = await client.query(sql, valuesArr);
    res.send(object.rows);
  } catch {
    res.sendStatus(500);
  }
};

// Get All owners from DB.
export const getAllOwners: RequestHandler = async (_req, res) => {
  try {
    const sql = "SELECT * FROM owners";
    const object = await client.query(sql);
    res.send(object.rows);
  } catch {
    res.sendStatus(500);
  }
};

// Update owner in DB.
export const updateOwner: RequestHandler = async (req, res) => {
  try {
    const values = req.body;
    const valuesArr = Object.values(values);
    const sql =
      "UPDATE owners SET name=$2, email=$3, phone_number=$4 WHERE owner_id=$1";
    await client.query(sql, valuesArr);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
};

// Delete owner in DB.
export const deleteOwner: RequestHandler = async (req, res) => {
  try {
    const values = req.params.id;
    const valuesArr = Object.values(values);
    const sql = "DELETE FROM owners WHERE owner_id=$1";
    await client.query(sql, valuesArr);
    res.sendStatus(200);
  } catch (err: any) {
    console.error(err.message);
    res.sendStatus(500);
  }
};
