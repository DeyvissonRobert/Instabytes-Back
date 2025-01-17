import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Importa o framework Express para criar a aplicação web e a função para conectar ao banco de dados.
const app = express();
app.use(express.static("uploads"))
// Cria uma instância do Express, iniciando a aplicação web.
routes(app)

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando estiver pronto.
