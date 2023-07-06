import Apollo from "@apollo/client";
const { ApolloClient, HttpLink, InMemoryCache } = Apollo;

export const createClient = () =>
  new ApolloClient({
    link: new HttpLink({
      uri: process.env.GITHUB_GRAPHQL_URL,
      fetch,
      credentials: "same-origin",
      headers: {
        Authorization: `token ${process.env.GITHUB_PAT}`,
      },
    }),
    cache: new InMemoryCache(),
  });
