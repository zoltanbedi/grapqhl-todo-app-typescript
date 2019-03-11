import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import aws_config from "./aws-exports";
import { Rehydrated } from "aws-appsync-react";

const client = new AWSAppSyncClient({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: aws_config.aws_appsync_apiKey
  }
});

const App = () => (
  <ApolloProvider client={client as any}>
    <Rehydrated>
      <div className="App">
        <h2>Todo app with GraphQL</h2>
        <AddTodo />
        <Todos />
      </div>
    </Rehydrated>
  </ApolloProvider>
);

export default App;
