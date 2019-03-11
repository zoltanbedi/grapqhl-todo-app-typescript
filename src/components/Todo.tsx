import React from "react";
import { Mutation } from "react-apollo";
import { UpdateTodoMutation, UpdateTodoMutationVariables } from "../API";
import gql from "graphql-tag";
import { updateTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import DeleteButton from "./DeleteButton";

export default function Todo(props: { id: string; completed: boolean; text: string }) {
  return (
    <Mutation<UpdateTodoMutation, UpdateTodoMutationVariables> mutation={gql(updateTodo)} refetchQueries={[{ query: gql(listTodos) }]}>
      {(updateTodo, { loading, error }) => (
        <div className="todo-item">
          <input
            type="checkbox"
            checked={props.completed}
            onChange={() => updateTodo({ variables: { input: { id: props.id, completed: !props.completed } } })}
          />
          <p className={props.completed ? "completed" : ""}>{props.text}</p>
          <DeleteButton id={props.id} />
          {error && <p>Error :( Please try again</p>}
        </div>
      )}
    </Mutation>
  );
}
