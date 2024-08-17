import React from 'react'
import Header from '../components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Marquee from '@/components/Marquee/Marquee'
import Video from '@/components/Landing/Video'
import Text_Mask from '@/components/Text/Text_Mask'
import Line from '@/components/Line/Line'
import AliceCarousel from '@/components/Carousel/Carousel'
import Cards from '@/components/Card/Cards'
import Countdown from '@/components/Countdown/Countdown'






const index = () => {
  return (
    <main className=''> 
      <Header />
      <Video />
      <Text_Mask />
      <Line />
      <Countdown />
      <Hero />
      <Marquee />
      <Cards />
      <AliceCarousel />
      

    </main>
  )
}

export default index