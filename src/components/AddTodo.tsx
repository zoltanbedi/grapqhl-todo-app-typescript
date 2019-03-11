import React from "react";
import { Mutation } from "react-apollo";
import { createTodo } from "../graphql/mutations";
import gql from "graphql-tag";
import { listTodos } from "../graphql/queries";
import { CreateTodoMutationVariables, CreateTodoMutation } from "../API";

const AddTodo = () => {
  let input: HTMLInputElement | null;

  return (
    <Mutation<CreateTodoMutation, CreateTodoMutationVariables>
      mutation={gql(createTodo)}
      refetchQueries={[
        {
          query: gql(listTodos)
        }
      ]}
    >
      {addTodo => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addTodo({ variables: { input: { text: input!.value, completed: false } } });
              input!.value = "";
            }}
          >
            <label>
              Add new todo:{' '}
              <input
                ref={node => {
                  input = node;
                }}
              />
            </label>
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};
export default AddTodo;
