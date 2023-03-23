import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const Radar = () => {
  const data = {
    labels: ["cars", "bikes", "flights", "ships", "scooters", "rockets"],
    datasets: [
      {
        label: "rates",
        data: [17, 30, 21, 94, 50, 10],
        
      },

      {
        label: "cost",
        data: [17, 20, 97, 29, 50, 80],
        
      },

      {
        label: "rating",
        data: [7, 93, 41, 24, 50, 70],
        
      },

    ],
  };

  return (
    <div style={{ width: "500px" }} className='mar'>
      <Chart type="radar" data={data} />
    </div>
  );
};

export default Radar;
