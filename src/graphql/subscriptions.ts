// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo($id: ID, $text: String, $completed: Boolean) {
  onCreateTodo(id: $id, text: $text, completed: $completed) {
    id
    text
    completed
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo($id: ID, $text: String, $completed: Boolean) {
  onUpdateTodo(id: $id, text: $text, completed: $completed) {
    id
    text
    completed
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo($id: ID, $text: String, $completed: Boolean) {
  onDeleteTodo(id: $id, text: $text, completed: $completed) {
    id
    text
    completed
  }
}
`;
