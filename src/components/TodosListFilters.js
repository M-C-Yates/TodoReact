import React from "react";
import { connect } from "react-redux";
import { sortByAsc, sortByDate, sortByDesc } from "../actions/filters";

export class TodosListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.onSortChange = this.onSortChange.bind(this);
  }
  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "asc") {
      this.props.sortByAsc();
    } else if (e.target.value === "desc") {
      this.props.sortByDesc();
    }
  };
  render() {
    return (
      <div className="content-container">
        <select
          className="select"
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  sortByAsc: () => dispatch(sortByAsc()),
  sortByDate: () => dispatch(sortByDate()),
  sortByDesc: () => dispatch(sortByDesc())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosListFilters);
