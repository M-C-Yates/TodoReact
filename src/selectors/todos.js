export default (todos, { createdAt, sortBy }) => {
  if (sortBy === "date") {
    return todos.sort((a, b) => {
      return a.createdAt() < b.createdAt ? 1 : -1;
    });
  } else if (sortBy === "asc") {
    return todos.sort()
  } else if (sortBy === 'desc') {
    return todos.sort().reverse()
  }
};
