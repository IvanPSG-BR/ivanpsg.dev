import ex from "express";
import dotenv from 'dotenv';

dotenv.config();

let root = "";
switch (process.env.NODE_ENV) {
  case "dev":
    root = (process.env.DEV_ROOT_PATH + ":" + process.env.PORT) || "";
    break;
  case "prod":
    root = process.env.PROD_ROOT_PATH ?? "";
    break;
}

const config = {
  port: process.env.PORT ?? 3000,
  root: root
}
export default config

export const router = ex.Router({ mergeParams: true });
