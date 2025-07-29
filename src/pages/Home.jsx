import { Box } from '@chakra-ui/react'
import Hero from '../component/Hero'
import Header from '../layout/Header'
import React from 'react'
import JewelryGroup from '../component/static-items/JewelryGroup'
import TrendingProducts from '../component/TrendingProducts/Trending'
import EaringProducts from '../component/categories/Earings'
import TrendingNecklaces from '../component/categories/Necklace'
import Footer from '../layout/Footer'
import JewelleryMarquee from '../component/animation/JewelleryMarquee'
import AboutSection from '../component/AboutSection'
import JewelleryImportanceSection from '../component/JewelleryImportanceSection'
import TrendingRings from '../component/categories/Rings'
import GoldRingImg from '../component/Gold-RingImg'
import TrendingBracelets from '../component/categories/Bracelets'
import TrendingAnklets from '../component/categories/Anklets'
import JewelleryBlog from '../component/JewelleryBlog'
import CallToAction from '../component/CallToAction'
import Testimonials from '../component/Testimonial'

export default function Home() {
  return (
    <Box>
      <Header/>
      <Box overflow={'hidden'}>
        <Box bg="white" minHeight="" py={{md:2, base : 2}} px={{md:5, base : 2}}>
          <Hero />
        </Box>
        
        <Box my={'5'} bg={'gray.200'}>
          <JewelryGroup/>
        </Box>

        <Box mt={10}>
          <JewelleryMarquee/>
        </Box>

        <AboutSection/>
        
        <Box mt={''} id='collections'>
          <TrendingProducts/>
          <EaringProducts/>
          <JewelleryImportanceSection/>

          <TrendingNecklaces/>
          <TrendingRings/>

          <GoldRingImg/>
          <TrendingBracelets/>
          <TrendingAnklets/>
        </Box>

        <JewelleryBlog/>

        <Testimonials/>
        <CallToAction/>
      </Box>
      <Footer/>
    </Box>
  )
}