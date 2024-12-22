import 'dotenv/config';
import {ObjectId} from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Estabelece a conexão com o banco de dados MongoDB usando a string de conexão fornecida pela variável de ambiente.

export async function getTodosPosts() {
    // Função assíncrona para buscar todos os posts no banco de dados.
    const db = conexao.db("imersao-instabytes");
    // Seleciona o banco de dados "imersao-instabytes".
    const colecao = db.collection("posts");
    // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos (posts) e retorna os resultados em um array.
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}