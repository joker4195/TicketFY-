import React from 'react'
import ConcertPage from '../components/ConcertPage'
import Footer from '../components/Footer'
import NavbarComp from '../components/NavbarComp'
import WorkCard from '../components/WorkCard'
import WorkCardData from "../components/WorkCardData"
const Concerts = () => {
  return (
    <div>
        <NavbarComp></NavbarComp>
        concerts
        <ConcertPage></ConcertPage>
        {/* {
          WorkCardData.map((item,i)=> <WorkCard item={item} key={i}></WorkCard>)
        } */}
        <Footer></Footer>
    </div>
  )
}

export default Concerts