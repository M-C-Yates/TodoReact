import React from 'react';
import TodosList from './TodosList';
import TodoForm from './TodoForm';
import TodoSummary from './TodoSummary';


const Dashboard = () => (
  <div className="dashboard">
    <TodoSummary />
    <TodoForm />
    <TodosList />
  </div>
)

export default Dashboard;


