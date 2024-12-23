import express from 'express';
import multer from 'multer';
import cors from 'cors';


const corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200

}
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from '../controllers/postsController.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});


const upload = multer({ dest: './uploads', storage });


//const upload =multer({dest:'./uploads'})



const routes = (app) => {
  // Habilita o parser JSON para lidar com requisições com corpo em formato JSON
  app.use(express.json());
  app.use(cors(corsOptions))
  // Rota GET para a URL '/posts' buscar todos os posts
  app.get('/posts', listarPosts);
  // Rota GET para a URL '/posts' criar um post
  app.post('/posts', postarNovoPost)   // chama a função controladora para criação de posts
  //Rota upload de imagens (assumindo uma única imagem chamada "imagem")
  app.post('/upload', upload.single('imagem'), uploadImagem) // chama a função controladora para processamento da imagem
  app.put('/upload/:id', atualizarNovoPost)
}


export default routes;