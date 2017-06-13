import bodyParser from 'body-parser';
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import schema from './schema';

const port = process.env.PORT || 4000;
const app = express();
const endpointURL = '/graphql';

app.use(bodyParser.json());
app.use(endpointURL, graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL }));

app.listen(port, () => console.log('✨ Server started'));
