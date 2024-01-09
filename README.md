
# Blog-api

## :rocket: Funcionalidades

- Gerar posts pelo OpenAI - ChatGPT
- Validação de dados
- Tratamento de erros
- Autenticação por cookies com JWT, contendo ID e ROLE.
- Criação de contas
- Autenticação de sessão
- Criaçao de posts 
- Comentar em posts
- CRUD completo de usuários, posts e comentários.

## :triangular_flag_on_post: Em desenvolvimento
- Curtidas em comentários
- Novidades em breve

## Rode na sua máquina

- Crie ".env" com as seguintes variáveis
```javascript
DATABASE_URL=     // use sua string de conexão
PORT=             // Coloque a porta a qual você quer que rode
JWT_SECRET =     // Crie uma key para o JWT
OPENAI_API_KEY=  // Coloque aqui sua Key da OpenAI 
```


## Rotas

### :unlock: SIGNUP 

``` POST http://localhost:3333/user/register  ```

| body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `raw` | `json` |  name, email, password| 
                                    
### :unlock: SIGNIN
``` POST http://localhost:3333/user/login ```

| body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `raw`      | `json` | email, password |

## Users routes

### :lock: Get user 

``` GET http://localhost:3333/user/get ```

| Authorization   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Cookie`      | `token` |  id |

### :lock: Update user

``` PUT http://localhost:3333/user/update ```

| body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `raw`      | `json` | name, email, password |

### :lock: Delete user

``` DELETE http://localhost:3333/user/delete ```

| Authorization   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Cookie`      | `token` | id |

## Post routes
### :lock: Create post

``` POST http://localhost:3333/post/create ```

| body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `raw`      | `json` |  title, description, content |

### :lock: Get all post

``` GET http://localhost:3333/post/get ```

### :lock: Get post by id

``` GET http://localhost:3333/post/get/:id ```

### :lock: Update post

``` PUT http://localhost:3333/post/get ```

| body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `raw`      | `json` | title, description, content |

### :lock: Delete user

``` DELETE http://localhost:3333/post/delete/:id ```

## Comments routes

### :lock: Create comment

``` POST http://localhost:3333/comment/create/:id ```

| body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `raw`      | `json` |  content, **receive postId from path** |

### :lock: Update comment

``` PUT http://localhost:3333/comment/update ```

| body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `raw`      | `json` | id, content |

### :lock: Delete comment

``` DELETE http://localhost:3333/comment/delete ```

| body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `raw`      | `json` |  id |
