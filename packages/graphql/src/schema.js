import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Query {
    site: Site
  }

  type Site {
    title: String
    intro: String
  }
`;

const resolvers = {
  Query: {
    site: () => ({}),
  },
  Site: {
    title: () => 'Hello World!',
    intro: () => 'We ❤️ React & GraphQL!',
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
