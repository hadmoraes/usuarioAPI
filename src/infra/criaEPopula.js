import DatabaseMetodos from "../util/DatabaseMetodos.js";
import moment from "moment";

try{
    const table = await DatabaseMetodos.createTable();
    console.log(table);
}catch(error){
    console.log(error.message);
}

try {
    await DatabaseMetodos.popular(
        {
            id: 1,
            nome: "jose da silva",
            email: "jose@email.com",
            telefone: "11111111111",
            data_nascimento: moment("19/08/1979", "DD/MM/YYYY").format("YYYY-MM-DD")
        }
    )
}catch(error){
    console.log(error.message);
}
