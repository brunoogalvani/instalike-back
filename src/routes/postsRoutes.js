import express from "express";
import multer from "multer";
import { listarPosts, postarPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})
// Linux ou Mac apenas a linha abaixo
// const upload = multer({ dest: "./uploads"})

const routes = (app) => {
    // Permite que o servidor interprete requisições com o formato JSON
    app.use(express.json());
    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarPost);
    // Rota para upar uma imagem
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;
