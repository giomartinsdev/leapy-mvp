import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "postgres",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

export const runQuery = async (query: string, values: any[] = []) => {
  const client = await pool.connect();

  try {
    const res = await client.query(query, values);
    return res.rows;
  } catch (err) {
    console.error("Error fetching the query:", err);
    throw err;
  } finally {
    client.release();
  }
};
