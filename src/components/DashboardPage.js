import React from 'react';
import TodosList from './TodosList';
import TodosListFilters from './TodosListFilters';
import TodoSummary from './TodoSummary';


const Dashboard = () => (
  <React.Fragment>
    <TodoSummary />
    <TodosListFilters />
    <TodosList />
  </React.Fragment>
)

export default Dashboard;


