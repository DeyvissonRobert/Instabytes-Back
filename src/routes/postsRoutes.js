import express from "express"; // Importa o framework Express para criar a aplicação.
import multer from "multer"; // Importa o módulo Multer para lidar com uploads de arquivos.
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js"; // Importa funções para controlar as ações dos posts.

const storage = multer.diskStorage({ // Configura como os arquivos serão armazenados.
  destination: (req, file, cb) => cb(null, 'uploads/'), // Define a pasta de destino para os uploads.
  filename: (req, file, cb) => cb(null, file.originalname) // Define o nome do arquivo.
});

const upload = multer({ storage }); // Cria uma instância do Multer com as configurações de armazenamento.
//Linux ou no mac
//const upload = multer({ dest: './uploads'});

const routes = (app) => {
  app.use(express.json()); // Permite lidar com dados JSON nas requisições.
  app.get("/posts", listarPosts); // Rota para listar todos os posts.
  app.post("/posts", postarNovoPost); // Rota para criar um novo post.
  app.post("/upload", upload.single("imagem"), uploadImagem); // Rota para fazer upload de uma imagem.
  app.put("/upload:id", atualizarNovoPost)
};

export default routes; // Exporta a função das rotas para ser usada em outro arquivo.
