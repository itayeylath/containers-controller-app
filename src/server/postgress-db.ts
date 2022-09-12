import dotenv from "dotenv";
dotenv.config();
import { Client } from "pg";

const DATABASE_URL = process.env.DATABASE_URL

console.log(DATABASE_URL);
// Create connection to DB.
export const client = new Client({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
// Connect to DB.
client.connect();

async function initDb() {
  // Create locations table.
  await client.query(
    `CREATE TABLE IF NOT EXISTS locations(
            location_id SERIAL PRIMARY KEY,
            lat TEXT NOT NULL,
            lon TEXT NOT NULL,
            port_name TEXT NOT NULL,
            nearest_city TEXT NOT NULL
        );`
  );
  // Create owners table.
  await client.query(
    `CREATE TABLE IF NOT EXISTS owners(
            owner_id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone_number TEXT NOT NULL
        );`
  );
  // Create containers table.
  await client.query(
    `CREATE TABLE IF NOT EXISTS containers(
            container_id SERIAL PRIMARY KEY,
            model TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            size INTEGER NOT NULL,
            manufacturing_year INTEGER NOT NULL,
            location_id INTEGER,
            CONSTRAINT fk_location FOREIGN KEY(location_id)
            REFERENCES locations(location_id)
            ON DELETE SET NULL,
            owner_id INTEGER,
            CONSTRAINT fk_owner FOREIGN KEY(owner_id)
            REFERENCES owners(owner_id)
            ON DELETE SET NULL
        );`
  );
  // Create locations history table.
  await client.query(
    `CREATE TABLE IF NOT EXISTS locations_history(
            location_history_id SERIAL PRIMARY KEY,
            arrival_date DATE NOT NULL,
            departure_date DATE NOT NULL,
            location_id INTEGER,
            CONSTRAINT fk_location FOREIGN KEY(location_id)
            REFERENCES locations(location_id)
            ON DELETE CASCADE,
            container_id INTEGER,
            CONSTRAINT fk_container FOREIGN KEY(container_id)
            REFERENCES containers(container_id)
            ON DELETE CASCADE
        );`
  );
}
// Create DB tables.
initDb();
