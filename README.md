# Instabytes - Backend
Este é o backend do projeto Instabytes, responsável por gerenciar operações relacionadas à aplicação. Ele fornece uma API REST que permite a integração com o frontend e suporta funcionalidades como upload de arquivos e manipulação de dados.

## Tecnologias Utilizadas
* Node.js
* MongoDB
* Express
* Multer (para upload de arquivos)
* Shell script (para serviços adicionais)

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/DeyvissonRobert/Instabytes-Back.git

2. Naveque até a pasta do projeto: 
    ```sh
    cd Instabytes-Back

3. Instale as dependências 
    ```sh
    npm install

Configure o ambiente no arquivo .env (caso aplicável). Certifique-se de adicionar variáveis necessárias para o banco de dados ou serviços.

## Uso

1. Inicie o servidor:
   ```sh
   node server.js

2. O servidor estará disponível em http://localhost:3000.

3. Utilize um cliente como Postman ou Insomnia para testar as rotas disponíveis.

## Front-End do Projeto
O link para o repositório do front-end pode ser encontrado  <a href="https://github.com/DeyvissonRobert/Instabytes-Front/" > aqui </a>.

## Estrutura do Projeto
  ```sh
      /
    ├── src/             # Código principal da aplicação
    ├── uploads/         # Diretório para uploads de arquivos
    ├── .gitignore       # Arquivos a serem ignorados pelo Git
    ├── package.json     # Dependências e scripts do projeto
    ├── server.js        # Inicialização do servidor
    ├── services.sh      # Scripts adicionais


