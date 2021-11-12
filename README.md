<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Blog API Interview

Uma API simples para um blog, desenvolvido com a finalidade de entrevista para desenvolvedor _back-end_.

## Documentação da API

Todas as requisições serão prefixadas com o seguinte endereço: `http://localhost:3333/api/`.

### Deploy da API

Foi realizado o deploy da api no heroku com o seguinte endereço:
`https://api-blog-interview.herokuapp.com/api/`.

### Swagger

Os recursos disponiveis podem ser visualizadas no seguinte endereço: `http://localhost:3333/api/swagger`.

### Posts

Operações relacionados aos posts do blog.

| Descrição             | Verbo  | Endereço          | Body                                                                         |
| --------------------- | ------ | ----------------- | ---------------------------------------------------------------------------- |
| Listar todos os posts | `GET`  | `/posts`          |
| Cadastrar um post     | `POST` | `/posts`          | `{ title: String, description: String, author: String, categories: String }` |
| Buscar um post        | `GET`  | `/posts/{postId}` |
| Alterar um post       | `PUT`  | `/posts/{postId}` | `{ title: String, description: String, author: String, categories: String }` |
| Deletar um post       | `PUT`  | `/posts/{postId}` |

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Nest.JS](http://nestjs.com/)
- [Heroku](https://api-blog-interview.herokuapp.com/api/swagger)

## Instalação

```bash
$ npm install
```

## Executando o projeto

```bash
# local
$ npm run start

# watch mode
$ npm run start:dev

# produção
$ npm run start:prod
```

## Executando os testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Funcionalidades futuras

- Configuração de um banco de dados (Postgres)
- Autenticação para gerenciar os posts do blog.
- Soft delete nos posts
- Data de publicação dos posts
- Filtros na listagem de posts (author, title, categoria e etc.)

## Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

## License

Esse projeto está sob a licença MIT. Veja o arquivo [MIT licensed](LICENSE) para mais detalhes.

---

<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/johnv-alves/" target="_blank">John Victor</a>
</h4>
