import express from "express";

const posts = [
    {
        descricao: "Foto Teste",
        imagem: "https://placecats.com/millie/300/250",
    },
    {
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://picsum.photos/id/237/300/250",
    },
    {
        descricao: "Paisagem com um gato",
        imagem: "https://source.unsplash.com/random/300x250/?cat,landscape",
    },
    {
        descricao: "Gato dormindo em uma caixa",
        imagem: "https://placekitten.com/300/250",
    },
    {
        descricao: "Gato olhando pela janela",
        imagem: "https://unsplash.com/photos/300x250/?query=cats&orientation=landscape",
    },
    {
        descricao: "Gato comendo ração",
        imagem: "https://placekitten.com/g/300/250",
    },
];

const app = express()
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...")
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);  
});
