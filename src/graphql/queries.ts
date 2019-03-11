// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    text
    completed
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: TableTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      completed
    }
    nextToken
  }
}
`;
