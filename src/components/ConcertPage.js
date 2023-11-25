import React from 'react'
import "./ConcertPageStyles.css"
// import "./WorkCard"
// import WorkCard from './WorkCard'
const ConcertPage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col '>
          <WorkCard></WorkCard>
        </div>
        <div className='col '>
          <WorkCard></WorkCard>
        </div>
        <div className='col'>
          <WorkCard></WorkCard>
        </div>
        <div className='col'>
          <WorkCard></WorkCard>
        </div>
        <div className='col'>
          <WorkCard></WorkCard>
        </div>
        <div className='col'>
          <WorkCard></WorkCard>
        </div>
      </div>
    </div>
  )
}

export default ConcertPage