import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <center>
       <h1>Third Party Packages</h1>
       <p>React Charts, react-chrono, react-slick etc...</p>
       <div>
         <Link to='/charts'>Charts</Link>
         <Link to='/slick'>slick</Link>
         <Link to='/popup'>popup</Link>
         <Link to='/animations'>Animations</Link>
       </div>
      </center>
    </div>
  )
}
