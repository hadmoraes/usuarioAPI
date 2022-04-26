import Database from "../infra/Database.js";

class DatabaseMetodos{

    static createTable(){
        const tabela_usuarios = `
        CREATE TABLE IF NOT EXISTS usuarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR,
            data_nascimento DATE
        )
        `

        return new Promise((resolve, reject)=>{
            Database.run(tabela_usuarios, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela criada com sucesso")
                }
            })
        })
    }

    static popular(usuario){
        const query = `INSERT INTO usuarios VALUES (?, ?, ?, ?, ?)`;
        const body = Object.values(usuario);

        return new Promise((resolve, reject) =>{
            Database.run(query, [...body], (error) =>{
                if (error){
                    reject(e)
                } else{
                    resolve ({message: "usuario criado com sucesso"})
                }
            } )
        })
    }
}

export default DatabaseMetodos;