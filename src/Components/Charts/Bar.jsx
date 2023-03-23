import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const Bar = () => {
  const data = {
    labels: ["cars", "bikes", "flights", "ships"],
    datasets: [
      {
        label: "Expenses",
        data: [16, 6, 10, 20], 
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [12, 15, 30, 40],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [17, 30, 21, 24],
        backgroundColor: "lightyellow",
        borderColor: "yellow",
        borderWidth: 1,
      }
    ],
  };

  return (
    <div style={{ width: "600px" }} className='mar'>
      <Chart type="bar" data={data} />
    </div>
  );
};

export default Bar;
