import express from "express";
import multer from "multer";
import cors from "cors";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const corsOptions = {
    // Permite requisições apenas da origem especificada
    origin: "http://localhost:8000",
    // Define o status de sucesso
    optionsSuccessStatus: 200
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads" , storage});
// Linux ou Mac apenas a linha abaixo
// const upload = multer({ dest: "./uploads"})

const routes = (app) => {
    // Permite que o servidor interprete requisições com o formato JSON
    app.use(express.json());
    // Habilita o CORS com as configurações definidas
    app.use(cors(corsOptions));
    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
    // Rota para upar uma imagem
    app.post("/upload", upload.single("imagem"), uploadImagem);
    // Rota para atualizar o resto do post de uma imagem
    app.put("/upload/:id", atualizarNovoPost);
}

export default routes;
