# Projeto CRUD Full Stack (React + Node.js + MySQL)

Este projeto é uma aplicação full stack que implementa operações CRUD (Create, Read, Update, Delete) para gerenciar usuários. O frontend foi desenvolvido com React, e o backend utiliza Node.js com Express e MySQL como banco de dados.

## 🚀 Funcionalidades

### Frontend (React)
- **Formulário de usuário**: Adiciona e edita usuários com campos para nome, e-mail, telefone e data de nascimento.
- **Máscara de telefone**: Usa o jQuery Mask Plugin para formatar o campo de telefone no formato (00) 00000-0000.
- **Grid de usuários**: Exibe os usuários cadastrados em um grid responsivo.
- **Validação de campos**: Verifica se todos os campos do formulário foram preenchidos antes de enviar.
- **Persistência de dados**: Os dados são enviados para o backend via Axios.

### Backend (Node.js + Express + MySQL)
- **API REST**: Expõe endpoints para operações CRUD.
- **Conexão com MySQL**: Armazena os dados dos usuários em um banco de dados MySQL.
- **Validação de dados**: Verifica os dados recebidos antes de processá-los.

## 📋 Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn
- MySQL instalado e configurado
- Git (opcional, para clonar o repositório)

## 📂 Estrutura do Projeto
```
crud-fullstack/
├── api/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Form.js
│   │   │   └── Grid.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── package.json
│   └── README.md
└── README.md
```

## 🔧 Instalação e Execução

### Backend
1. Navegue até a pasta backend:
   ```sh
   cd api
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o banco de dados:
   - Crie um banco de dados MySQL chamado `crud`.
   - Atualize as credenciais no arquivo `backend/config/db.js`:
     ```javascript
     import mysql from "mysql"

     export const db = mysql.createConnection{
       host: "localhost",
       user: "root", // Substitua pelo seu usuário do MySQL
       password: "sua-senha", // Substitua pela sua senha do MySQL
       database: "crud",
     };
     ```
4. Execute as migrações para criar a tabela de usuários:
   ```sql
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nome VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     fone VARCHAR(15) NOT NULL,
     data_nascimento DATE NOT NULL
   );
   ```
5. Inicie o servidor backend:
   ```sh
   npm start
   ```
   O servidor estará rodando em `http://localhost:8800`.

### Frontend
1. Navegue até a pasta frontend:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```
4. Acesse o projeto no navegador:
   ```
   http://localhost:3000
   ```

## 🔗 Endpoints da API (Backend)
- `GET /` : Retorna todos os usuários.
- `POST /` : Adiciona um novo usuário.
- `PUT /:id` : Atualiza um usuário existente.
- `DELETE /:id` : Remove um usuário.



## 📖 Como usar
### Frontend
- **Adicionar usuário**: Preencha o formulário e clique em "Salvar".
- **Editar usuário**: Clique em um usuário no grid para carregar os dados no formulário.
- **Excluir usuário**: Implemente um botão de exclusão no grid (não incluído no exemplo básico).

### Backend
- Os dados são persistidos no banco de dados MySQL.
- A API pode ser testada usando ferramentas como Postman ou Insomnia.

## 📦 Dependências
### Frontend
- **React**: Biblioteca para construção de interfaces.
- **Axios**: Cliente HTTP para fazer requisições.
- **jQuery Mask Plugin**: Biblioteca para aplicar máscaras em campos de input.
- **styled-components**: Biblioteca para estilização de componentes.

### Backend
- **Express**: Framework para criar a API REST.
- **MySQL2**: Driver para conexão com o banco de dados MySQL.
- **Cors**: Middleware para permitir requisições de diferentes origens.
- **Nodemon (opcional)**: Reinicia o servidor automaticamente durante o desenvolvimento.

---
Desenvolvido por **[Mateus Calixto](https://github.com/Mateus-Calixto)** 🚀
