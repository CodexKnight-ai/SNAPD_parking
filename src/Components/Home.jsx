import React from 'react'
import Navbar from './Navbar'
import Model from './Model'
import Content from './Content'

function Home() {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Model/>
        <Content/>      
    </div>
  )
}

export default Home
