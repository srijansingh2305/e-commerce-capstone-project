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
      <Hero /> {/* Hero section */}
      <LatestCollection/> {/* Latest fashion collection */}
      <LatestElectronicsCollection/> {/* Latest electronics collection */}
      <BestSeller/> {/* Best selling products */}
      <OurPolicy/> {/* Our policy section */}
      <NewsletterBox/> {/* Newsletter subscription box */}
    </div>
  )
}

export default Home // Exporting Home component
