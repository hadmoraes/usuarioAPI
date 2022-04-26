import express from "express";
import * as dotenv from "dotenv";
import DatabaseMetodos from "./util/DatabaseMetodos.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

DatabaseMetodos.createTable();

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`);
});

