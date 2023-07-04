import Apollo from "@apollo/client";
const { ApolloClient,  HttpLink, InMemoryCache } = Apollo;

export const createClient = () => new ApolloClient({
    link: new HttpLink({
      uri: process.env.HASURA_URL,
      fetch,
      credentials: "same-origin",
    }),
    cache: new InMemoryCache(),
  });
