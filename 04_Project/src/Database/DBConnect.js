import { MongoClient, ServerApiVersion } from "mongodb";
import { config } from "../../config/config.js";

const client = new MongoClient(config.dbUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connect() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to DB successfully ✅");
  } catch (error) {
    console.log(error);
    process.exit(1); 
  }
};


