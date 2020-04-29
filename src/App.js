import React from 'react';
import './App.css';
import OrderBarChart from "./components/Charts/OrdersBarChart/OrderBarChart"
import PriceLineChart from "./components/Charts/PriceLineChart/PriceLineChart"


function App() {

  return (
    <div className="App">
      <OrderBarChart />
      <PriceLineChart />
    </div>
  );
}

export default App;
