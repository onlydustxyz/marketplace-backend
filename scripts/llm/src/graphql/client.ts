import { ApolloClient,  HttpLink, InMemoryCache }  from "@apollo/client";

export const createClient = () => new ApolloClient({
    link: new HttpLink({
      uri: process.env.HASURA_URL,
      fetch,
      credentials: "same-origin",
    }),
    cache: new InMemoryCache(),
  });
