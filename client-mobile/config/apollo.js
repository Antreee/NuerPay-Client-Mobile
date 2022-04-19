import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48b9-202-80-212-159.ngrok.io",

  cache: new InMemoryCache(),
});

export default client;
