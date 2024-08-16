import React from 'react'
import Header from '../components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Marquee from '@/components/Marquee/Marquee'
import Video from '@/components/Landing/Video'
import Text_Mask from '@/components/Text/Text_Mask'
import Line from '@/components/Line/Line'






const index = () => {
  return (
    <main className=''> 
      <Header />
      <Video />
      <Text_Mask />
      <Line />
      <Hero />
      <Marquee />

    </main>
  )
}

export default index