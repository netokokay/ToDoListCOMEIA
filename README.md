# Teste técnico com Node.js, Typescript, TypeORM, Express.JS e MySQL | COMEIA

### Atualizado: 23.01.2023

> Esta API foi desenvolvida para a avaliação de nível e é pré-requisito para o estágio na **COMEIA**

### Instruções

1. Faça o clone do repositório e no terminal navegue até a pasta;
2. Instale as dependências do projeto com `npm install`;
3. Edite o arquivo `/src/data-source.ts` e adicione as suas próprias configurações de conexão com o MySQL ou configure um `.env` na raiz do projeto. Não se esqueça de criar o banco de dados.
4. Execute os comandos `npm run migration:generate` e `npm run migration:run` para gerar e rodar as migrations.
5. Rode o servidor de desenvolvimento com `npm run dev`.
5. O *endpoint* do serviço estará disponível em http://localhost:3000 .

### Sugestão

Utilize o Insomnia para testar suas chamadas.


### Métodos API:

#### Método: POST -> URL: http://localhost:3000/newTask

    Passar pelo body (JSON)
    "description" 

#### Método: PUT -> URL: http://localhost:3000/updateTask
   
    Passar pelo body (JSON)
    "id",
    "description" 

#### Método: DELETE -> URL: http://localhost:3000/deleteTask
   
    Passar pelo body (JSON)
    "id"

#### Método: DELETE -> URL: http://localhost:3000/massDelete
    
