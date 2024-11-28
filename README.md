# Instalike Back-End

![postman instalike](https://github.com/user-attachments/assets/371569e2-3ee6-4f5f-91e1-ef5d8381c020)

O Instalike Back-End é o servidor responsável pela parte de processamento e lógica do sistema Instalike, uma plataforma que permite interações de postagens, simulando o comportamento de uma rede social. Este repositório contém a API e a estrutura do back-end, construída com tecnologias modernas para garantir desempenho e escalabilidade.

## Funcionalidades


* Criação e atualização de posts.
* Requisições HTTP.
* API RESTful.

## Tecnologias Utilizadas

* Node.js: Ambiente de execução JavaScript no servidor.
* Express: Framework para construção de APIs RESTful.
* MongoDB: Banco de dados NoSQL para armazenamento de dados.
* Mongoose: ODM para facilitar a manipulação do MongoDB.
* dotenv: Para gerenciar variáveis de ambiente.
* Gemini API: Para realizar a descrição de novos posts.

## Estrutura do Projeto

* server.js
> Arquivo principal que inicializa o servidor.

* routes/
> Contém os arquivos de rotas da API.

* models/
> Modelos de dados que representam as coleções no banco de dados.

* controllers/
> Funções responsáveis por manipular as requisições da API.

* config/
> Configurações de banco de dados e outras variáveis de ambiente.

* services/
> Serviço adicional

## Como Executar o Projeto

1. Abra o terminal e clone o repositório com o seguinte código:
```
git clone https://github.com/brunoogalvani/instalike-back.git
```

2. Navegue até a pasta do projeto:
```
cd instalike-back
```

3. Instale as dependências:
```
npm install
```

4. Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente, como a URL do banco de dados (MongoDB Atlas) e a chave da API do Google Gemini:

5. Inicie o servidor:
```
npm run dev
```

6. O servidor estará rodando em http://localhost:3000. Acesse as rotas da API para testar as funcionalidades.
