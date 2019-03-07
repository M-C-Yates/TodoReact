export default (todos, { createdAt, sortBy }) => {
  
  if (sortBy === "date") {
    return todos.filter((todo) => {
      return todo;
    })
  } else if (sortBy === "asc") {
    return todos.filter((todo) => {
      return todo;
    }).sort()
  } else if (sortBy === 'desc') {
    return todos.filter((todo) => {
      return todo;
    }).sort().reverse()
  }
};
