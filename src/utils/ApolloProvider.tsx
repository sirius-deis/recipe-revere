import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { FC, PropsWithChildren } from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const ApolloAppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloAppProvider;
