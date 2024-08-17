import React from 'react'
import Card from './Card'


function Cards() {
    const data =[
        {
            
            image2: '/images/2.jpeg',
            logo: '/images/git.svg',
            videoUrl: '/medias/pubg.mp4',
            desc: 'Pubg, FPS , Multiplayer, Battle Royale , Survival , Shooter',
            bg: '#5355ee',
            heading: "Team up and win the prize money in the biggest battle royale game of all time. Play with your friends and win the chicken dinner. Do you have what it takes to be the winner winner chicken dinner? Join now and find out."
        },
        {
            
            image2: '/images/2.jpeg',
            logo: '/images/git.svg',
            videoUrl: '/medias/pubg.mp4',
            bg: '#4a576b',
            desc: 'Pubg, FPS , Multiplayer, Battle Royale , Survival , Shooter',
            heading: "Team up and win the prize money in the biggest battle royale game of all time. Play with your friends and win the chicken dinner. Do you have what it takes to be the winner winner chicken dinner? Join now and find out."
        },
        {
            
            image2: '/images/2.jpeg',
            logo: '/images/git.svg',
            videoUrl: '/medias/pubg.mp4',
            bg: '#3e4365',
            desc: 'Pubg, FPS , Multiplayer, Battle Royale , Survival , Shooter',
            heading: "Team up and win the prize money in the biggest battle royale game of all time. Play with your friends and win the chicken dinner. Do you have what it takes to be the winner winner chicken dinner? Join now and find out."
        },

    ]
  return (
    <div className='w-full py-[4vw]'>
        <div className='max-w-[1840px] mx-auto px-[5vw] xs:px-0'>
            <div className='flex flex-col gap-[8vw] xs:gap-[2vw]'>
                {data.map((elem, index) => (
                    <Card key={index} val={elem} />
                ))}
            </div>
            <div className='mt-[4vw] flex items-center justify-center'>
                <button 
                    className='text-[3vw] xs:text-[.8vw]
                    py-[3vw] px-[5vw] xs:px-[1.3vw] mt-[4vw]
                    xs:py-[.5vw] rounded-full xs:mt-[1vw] 
                    border-[1px] border-white'
                >
                    View more Events
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Cards
