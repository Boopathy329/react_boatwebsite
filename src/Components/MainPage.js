import React from 'react'
import Menubar from './Menubar'
import CoverPage from './CoverPage'
import JustBooked from './JustBooked'
import RecommendCarousel from './RecommendCarousel'
import ExploreWorld from './ExploreWorld'
import MostViewed from './MostViewed'
import OurCommunity from './OurCommunity'
import AboveFooter from './AboveFooter'
import Footer from './Footer'
import CopyRight from './CopyRight'


const MainPage = () => {
  return (
    <>
        <CoverPage />
        <JustBooked/>
        <RecommendCarousel/>
        <MostViewed/>
        <ExploreWorld/>
        <OurCommunity/>
        <AboveFooter />


    </>
   
  )
}

export default MainPage