export default (todos, { createdAt, sortBy }) => {
  
  if (sortBy === "date") {
    return todos.filter((todo) => {
      return todo;
    }).sort((a,b) => {
      return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0;
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
