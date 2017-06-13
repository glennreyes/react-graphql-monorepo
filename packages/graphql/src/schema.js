import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Query {
    site: Site
  }

  type Site {
    title: String
    description: String
  }
`;

const resolvers = {
  Query: {
    site: () => ({}),
  },
  Site: {
    title: () => 'Hello World!',
    description: () => 'We ❤️ React & GraphQL!',
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
