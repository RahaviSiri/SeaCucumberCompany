import React from 'react'
import Banner from '../components/Banner'
import QuoteBanner from "../components/QuoteBanner"
import Body from '../components/Body'
import HomeServices from '../components/HomeServices'
import ImageGallery from '../components/ImageGallery'

const Home = () => {
  return (
    <div>
        <Banner/>
        <QuoteBanner/>
        <Body/>
        <HomeServices/>
        <ImageGallery/>
    </div>
  )
}

export default Home