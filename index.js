import dotenv from "dotenv";
import express, { json } from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

var cors_opts = {
  origin: "*",
  methods: "GET,HEAD,UPDATE,PATCH,DELETE,POST",
};

const app = express();
app.use(morgan("dev"));
app.use(json());
app.use(cors(cors_opts));

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: __dirname + "/./.env" });
const port = process.env.port;
const version = process.env.version;

app.listen(port, () => {
  console.log(`Server Running On Port ${port} At Version ${version}`);
});
