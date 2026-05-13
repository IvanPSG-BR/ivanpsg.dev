import ex from "express";
import dotenv from "dotenv";

dotenv.config();

let root, dbFilename = "";
switch (process.env.NODE_ENV) {
  case "dev":
    root = (process.env.DEV_ROOT_PATH + ":" + process.env.PORT) || "";
    dbFilename = process.env.DEV_DB_FILENAME || "";
    break;
  case "prod":
    root = process.env.PROD_ROOT_PATH || "";
    dbFilename = process.env.PROD_DB_FILENAME || "";
    break;
  default:
    throw Error("Variável de ambiente NODE_ENV mal configurada. Valores possíveis: \"dev\" | \"prod\"");
    break;
}

const settings = {
  port: process.env.PORT ?? 3000,
  root: root,
  dbFilename: dbFilename
}
export default settings;

export const router = ex.Router({ mergeParams: true });
