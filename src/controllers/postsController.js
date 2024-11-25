import fs from "fs";
import { getTodosPosts, criarPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função para buscar os posts
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
}

export async function postarPost(req, res) {
    // novoPost é igual ao corpo da requisição
    const novoPost = req.body;
    // Try/catch para tratamento de erro
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        // Envia uma resposta HTTP com status 500 (Erro no servidor)
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        // Transforma o nome da imagem no ID do post criado
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}
