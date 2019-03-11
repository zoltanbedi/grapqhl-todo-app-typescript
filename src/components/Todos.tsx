import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { listTodos } from "../graphql/queries";
import { ListTodosQuery } from "../API";
import Todo from "./Todo";

const Todos = () => (
  <Query<ListTodosQuery> query={gql(listTodos)}>
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }

      return data!.listTodos!.items!.map(todo => {
        return todo && <Todo key={todo.id} id={todo.id} completed={todo.completed!} text={todo.text!} />;
      });
    }}
  </Query>
);

export default Todos;
