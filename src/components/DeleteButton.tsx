import React from "react";
import { Mutation } from "react-apollo";
import { DeleteTodoMutation, DeleteTodoMutationVariables } from "../API";
import gql from "graphql-tag";
import { deleteTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";

export default function DeleteButton(props: { id: string }) {
  return (
    <Mutation<DeleteTodoMutation, DeleteTodoMutationVariables> mutation={gql(deleteTodo)} refetchQueries={[{ query: gql(listTodos) }]}>
      {(deleteTodo, { error }) => (
        <>
          <button title="Remove todo item" onClick={() => deleteTodo({ variables: { input: { id: props.id } } })}>
            X
          </button>
          {error && console.log(error.message) && <p>Couldn't delete todo item. Check console for error.</p>}
        </>
      )}
    </Mutation>
  );
}
