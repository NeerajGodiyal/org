import React from 'react'
import Header from '../components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Marquee from '@/components/Marquee/Marquee'
import Video from '@/components/Landing/Video'
import Text_Mask from '@/components/Text/Text_Mask'
import Line from '@/components/Line/Line'
import Cards from '@/components/Card/Cards'
import Countdown from '@/components/Countdown/Countdown'

import CardGrid from '@/components/CardGrid/CardGrid'
import Slide from '@/components/Slide/Slide'
import Footer from '@/components/Footer/Footer1'






const index = () => {
  return (
    <main className='min-h-screen w-full '> 
      <Header />
      
      <Video />
      <Text_Mask />
      <Line />
      <Countdown />
      <Cards />
      {/* <Hero /> */}
      <Marquee />
      <CardGrid />
      <Slide />
      <Footer />
      

    </main>
  )
}

export default index