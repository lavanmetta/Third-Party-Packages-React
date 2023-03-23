import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const data = {
  labels: ["cars", "bikes", "flights", "ships"],
  datasets: [
    {
      data: [12, 10, 30, 40],
    },
  ],
};
class DoughnutChart extends Component {
  render() {
    return (
      <div style={{ width: "400px" }} className='mar'>
        <Doughnut data={data} />
      </div>
    );
  }
}

export default DoughnutChart;
