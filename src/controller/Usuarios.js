import UsuarioModel from "../model/UsuarioModel.js";
import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import Validacoes from "../services/Validacoes.js";


class Usuarios{

    static routers(app){

        app.get("/usuarios", async (req, res)=>{
            try {
                const response = await DatabaseMetodos.listarTodos();
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.get("/usuarios/:id", async(req,res)=>{
            try {
                const id = req.params.id;
                const response = await DatabaseMetodos.listaPorId(id);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.post("/usuarios", async (req,res)=>{
            try {
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaEmail(req.body.email)){
                    const usuario = new UsuarioModel(...Object.values(req.body));
                    const response = await DatabaseMetodos.popular(usuario);
                    res.status(201).json(response);
                }else{
                    throw new Error("A requisição está fora dos padrões, favor rever")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.put("/usuarios/:id", async (req,res)=>{
            try {
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaEmail(req.body.email)){
                    const id = req.params.id;
                    const usuario = new UsuarioModel(...Object.values(req.body));
                    const response = await DatabaseMetodos.alteraPorId(id,usuario);
                    res.status(200).json(response)                    
                }else{
                    throw new Error("A requisição está fora dos padrões, favor rever")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.delete("/usuarios/:id", async (req,res)=>{
            try {
                const id = req.params.id;
                const response = await DatabaseMetodos.deletaPorId(id);
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

    }
}

export default Usuarios;