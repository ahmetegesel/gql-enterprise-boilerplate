import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import expressPlayground from 'graphql-playground-middleware-express'

const PORT = 4000;
const app = express();

app.use(
  '/graphql',
  // eslint-disable-next-line
  graphqlHTTP(async (request, response, graphQLParams) => {
    return {
      schema,
      graphiql: true,
      context: {
        req: request
      }
    };
  })
);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/graphql`);
});
