import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import LatestElectronicsCollection from '../components/LatestElectronicsCollection';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <LatestElectronicsCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
