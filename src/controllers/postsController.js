import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Define uma rota que responde a requisições GET para a URL "/posts".
    const posts = await getTodosPosts();
    // Chama a função para obter todos os posts e armazena o resultado.
    res.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (sucesso) e os posts em formato JSON.
} 