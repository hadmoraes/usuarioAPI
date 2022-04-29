import express from "express";
import * as dotenv from "dotenv";
import DatabaseMetodos from "./DAO/DatabaseMetodos.js";
import cors from "cors";
import Usuarios from "./controller/Usuarios.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

DatabaseMetodos.createTable();

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`);
});

Usuarios.routers(app);


