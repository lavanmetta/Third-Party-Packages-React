import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const Pie = () => {
  const data = {
    labels: ["cars", "bikes", "flights", "ships", "scooters", "rockets"],
    datasets: [
      {
        label: "rates",
        data: [17, 30, 21, 24, 50, 10],
        
      }
    ],
  };

  return (
    <div style={{ width: "500px" }} className='mar'>
      <Chart type="pie" data={data} />
    </div>
  );
};

export default Pie;
