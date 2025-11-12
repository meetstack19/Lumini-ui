
import React from 'react';
import './App.css';
import { ChartCard } from './components/cards';
// import { UserMetricGraphArea } from './UserMetrics/UserMetricGraphArea';
// import { UserMetricRadialChart } from './UserMetrics/UserMetricRadialChart';
import UserMetricsTable from './UserMetrics/UserMetricsTable';

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <div className="container--charts flex justify-end gap-4">
        <ChartCard />
        {/* <UserMetricGraphArea /> */}
        {/* <UserMetricRadialChart /> */}
      </div>
      <div className="container--table"><UserMetricsTable /></div>
    </div>
  );
};

export default App
