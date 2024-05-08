import { Client, QueryResult } from "pg";

let client: Client | null = null;

const getClient = (): Client => {
  if (!client) {
    client = new Client({
      user: "postgres",
      host: "localhost",
      database: "postgres",
      password: "postgres",
      port: 5432,
    });
  }
  return client;
};

let isConnected = false;

export const runQuery = async (query: string, values: any[] = []) => {
  try {
    const currentClient = getClient();
    if (!isConnected) {
      await currentClient.connect();
      isConnected = true;
      console.log("Client to DB connected");
    }
  } catch (err) {
    console.error("Error connecting to the database:", err);
    throw err;
  }

  try {
    const currentClient = getClient();
    const res: QueryResult = await currentClient.query(query, values);
    return res.rows;
  } catch (err) {
    console.error("Error fetching the query:", err);
    throw err;
  }
};
