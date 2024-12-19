import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());
    // Permite que o servidor interprete requisições com corpo em formato JSON.
    app.get("/posts", listarPosts);
    //Rota para buscar todos os posts
    app.post("/posts", postarNovoPost)
    //Rotaa para criar um post
}

export default routes;