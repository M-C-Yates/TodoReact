import React from 'react';
import TodosList from './TodosList';
import TodosListFilters from './TodosListFilters';
import TodoForm from './TodoForm';
import TodoSummary from './TodoSummary';


const Dashboard = () => (
  <React.Fragment>
    <TodoSummary />
    <TodosListFilters />
    <TodoForm />
    <TodosList />
  </React.Fragment>
)

export default Dashboard;


