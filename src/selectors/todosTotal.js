export default (todos) => {
  const completed = todos.filter((todo) => todo.completed === true).length
  const unCompleted = todos.filter((todo) => todo.completed === false).length

  return {
    completed,
    unCompleted
  }
};