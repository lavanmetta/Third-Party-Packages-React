import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const Line = () => {
  const data = {
    labels: ["cars", "bikes", "flights", "ships"],
    datasets: [
      {
        label: "Expenses",
        data: [16, 6, 10, 20], 
        backgroundColor: "blue",
        borderColor: "blue",
      },
      {
        label: "Expenses",
        data: [12, 15, 30, 40],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Expenses",
        data: [17, 30, 21, 24],
        backgroundColor: "black",
        borderColor: "black",
      }
    ],
  };

  return (
    <div style={{ width: "600px" }} className='mar'>
      <Chart type="line" data={data} />
    </div>
  );
};

export default Line;
