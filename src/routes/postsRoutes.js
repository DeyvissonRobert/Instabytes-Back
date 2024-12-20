import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads", storage })
//Linux ou no mac
//const upload = multer({ dest: './uploads'});


const routes = (app) => {
    app.use(express.json());
    // Permite que o servidor interprete requisições com corpo em formato JSON.
    app.get("/posts", listarPosts);
    //Rota para buscar todos os posts
    app.post("/posts", postarNovoPost)
    //Rotaa para criar um post
    app.post("/upload", upload.single("imagem"), uploadImagem)
    
}

export default routes;
