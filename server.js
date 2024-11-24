import express from "express";

const posts = [
    { descricao: 'Foto Teste', imagem: 'https://picsum.photos/id/237/300/250', id: 1 },
    { descricao: 'Paisagem com um gato', imagem: 'https://picsum.photos/id/237/300/250', id: 2 },
    { descricao: 'Gato brincando com um novelo de lã', imagem: 'https://picsum.photos/id/237/300/250', id: 3 },
];

const app = express()
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...")
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);  
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);  
});