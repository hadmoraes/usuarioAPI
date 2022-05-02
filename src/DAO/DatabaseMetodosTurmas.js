import Database from "../infra/Database.js";

class DatabaseMetodosTurmas{

    static activePragma(){
        const pragma = "PRAGMA foreing_keys = ON";
        Database.run(pragma, (error)=>{
            if(error){
                console.log(error);
            }else{
                console.log("Chaves estrangeiras");
            }
        })
    }

    static createTurmas(){
        this.activePragma();
        const tabela_turmas = `
        CREATE TABLE IF NOT EXISTS turmas (
            nome VARCHAR PRIMARY KEY,
            curso_nome VARCHAR,
            data_inicio DATE,
            data_final DATE,
            turno VARCHAR,
        FOREIGN KEY (curso_nome) REFERENCES tabela_cursos(nome)
          )
          `
          
        return new Promise((resolve, reject)=>{
            Database.run(tabela_turmas, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela turmas criada com sucesso")
                }
            })
        })
    }


    static popular(turma){
        const query = `INSERT INTO tabela_turmas VALUES (?, ?, ?, ?, ?)`;
        const body = Object.values(turma);

        return new Promise((resolve, reject) =>{
            Database.run(query, [...body], (error) =>{
                if (error){
                    reject(e)
                } else{
                    resolve ({message: "turma criada com sucesso"})
                }
            } )
        })
    }

    static listarTodos(){
        const query = "SELECT * FROM tabela_turmas";
        return new Promise((resolve, reject) =>{
            Database.all(query, (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static listaPorId(nome){
        const query = "SELECT * FROM tabela_turmas WHERE nome = ?";
        return new Promise((resolve, reject) => {
            Database.get(query, nome, (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve(result)
                }
            })

        })

    }

    static alteraPorId(nome,turma){
        const query = "UPDATE tabela_turmas SET (nome, curso_nome, data_inicio, data_final, turno) = (?, ?, ?, ?, ?) WHERE nome=?";
        const body = Object.values(turma);
        return new Promise ( (resolve, reject) =>{
            Database.run(query, [...body, nome], (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "turma alterada com sucesso"})
                }
            })
        }

        )
    }

    static deletaPorId(nome){
        const query = "DELETE FROM tabela_turmas WHERE nome=?";
        return new Promise((resolve, reject)=>{
            Database.run(query, nome, (error)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "turma deletada com sucesso"})
                }
            })
        }

        )
    }

}

export default DatabaseMetodosTurmas;