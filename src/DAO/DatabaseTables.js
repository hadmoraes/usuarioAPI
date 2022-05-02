import Database from "../infra/Database";


class DatabaseTables{

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


    static createDocentes(){

        const tabela_docentes = `
        CREATE TABLE IF NOT EXISTS docentes (
            cpf VARCHAR PRIMARY KEY,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR,
            salario FLOAT,
            disciplinas VARCHAR
          )
          `
          
        return new Promise((resolve, reject)=>{
            Database.run(tabela_docentes, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela docentes criada com sucesso")
                }
            })
        })
    }

    static createAlunos(){
        const tabela_alunos = `
        CREATE TABLE IF NOT EXISTS alunos (
            cpf VARCHAR PRIMARY KEY,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR,
            data_nascimento DATE
          )
          `
          
        return new Promise((resolve, reject)=>{
            Database.run(tabela_alunos, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela alunos criada com sucesso")
                }
            })
        })
    }

    static createCursos(){
        const tabela_cursos = `
        CREATE TABLE IF NOT EXISTS cursos (
            nome VARCHAR PRIMARY KEY,
            carga_horaria INTEGER,
            preco FLOAT
          )
          `
          
        return new Promise((resolve, reject)=>{
            Database.run(tabela_cursos, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela cursos criada com sucesso")
                }
            })
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

    static createBoletins(){
        this.activePragma();
        const tabela_boletins = `
        CREATE TABLE IF NOT EXISTS turmas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            docente_cpf VARCHAR,
            aluno_cpf VARCHAR,
            turma_nome VARCHAR,
            disciplina VARCHAR,
            nota FLOAT,
        FOREIGN KEY (docente_cpf) REFERENCES tabela_docentes(cpf),
        FOREIGN KEY (aluno_cpf) REFERENCES tabela_alunos(cpf),
        FOREIGN KEY (turma_nome) REFERENCES tabela_turmas(nome)
          )
          `
          
        return new Promise((resolve, reject)=>{
            Database.run(tabela_boletins, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela boletins criada com sucesso")
                }
            })
        })
    }



}