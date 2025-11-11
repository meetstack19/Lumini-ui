import React from 'react'
import './App.css'
import UserMetricsTable from './UserMetrics/UserMetricsTable'

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <h1 className="header">Welcome to Lumini UI</h1>
      <div className="container--chart">charts goes here</div>
      <div className="container--table">
        <UserMetricsTable />
      </div>
    </div>
  );
};

export default App
