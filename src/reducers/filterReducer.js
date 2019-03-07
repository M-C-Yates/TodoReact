const filterReducerDefaultState = {
  sortBy: 'date'
}

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_ASC':
    return {
      ...state,
      sortBy: "asc"
    }
    case "SORT_BY_DESC":
    return {
      ...state,
      sortBy: 'desc'
    }
    case "SORT_BY_DATE":
    return {
      ...state,
      sortby: 'date'
    }
    default:
    return state;
  }
}