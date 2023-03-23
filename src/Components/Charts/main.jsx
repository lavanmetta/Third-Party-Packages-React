import React from 'react'
import DoughnutChart from './Doughnut'
import Line from './Line'
import Bar from './Bar'
import Pie from './Pie'
import Radar from './Radar'
import Bubble from './Bubble'
export default function Main() {
  return (
    <center>
    <h1 className='rh'>react-chartJs-2</h1>
      <DoughnutChart/>
      <Line/>
      <Bar/>
      <Pie/>
      <Radar/>
      <Bubble/>

      <a className='aa' href="https://codesandbox.io/s/github/tannerlinsley/react-charts/tree/beta/examples/simple?file=/src/components/Steam.tsx">Other Charts</a>
    </center>
  )
}
