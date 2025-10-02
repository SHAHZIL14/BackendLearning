import dotenv from "dotenv";
dotenv.config();

const requiredVars = ["PORT", "DB_URI"];
requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`❌ Environment variable "${key}" has not been loaded!`);
  }
});

export const config = {
  port: parseInt(process.env.PORT, 10), // cast to number for safety
  dbName: process.env.DB_NAME,
  dbUri: process.env.DB_URI,
};
