import {getTodosPosts, criarPost} from "../models/postsModel.js";

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
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}