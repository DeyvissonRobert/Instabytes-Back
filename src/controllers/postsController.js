import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js";
import fs from "fs";

export async function listarPosts(req, res) {
    // Define uma rota que responde a requisições GET para a URL "/posts".
    const posts = await getTodosPosts();
    // Chama a função para obter todos os posts e armazena o resultado.
    res.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (sucesso) e os posts em formato JSON.
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" })
    }
}

export async function uploadImagem(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost)
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" })
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    const post = {
        imgUrl: urlImagem,
        descricao: req.body.descricao,
        alt: req.body.alt
    };
    try {
        const postCriado = await atualizarPost(id, post)
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" })
    }
}