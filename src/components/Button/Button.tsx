import Image from 'next/image'
import React from 'react'

function Button({text, border, borderCol, bg, txt}: 
  {
    text: string, 
    border?: string, 
    borderCol?: string, 
    bg?: string, 
    txt?: string
  }) 
  {
  return (
    <div className={`w-fit px-[6vw] py-[3vw] xs:px-[1vw] xs:py-[.3vw] ${bg} ${border} ${borderCol}
      rounded-full flex items-center gap-[.5vw] justify-center cursor-pointer`}>
      <div className={`h-[4vw] xs:h-[1.5vw]  overflow-hidden  ${txt}`}>
        <h5 className='text-[3.5vw] leading-[4vw] xs:text-[.8vw] xs:leading-[1.4vw]'>{text}</h5>
        <h5 className='text-[3.5vw] leading-[4vw] xs:text-[.8vw] xs:leading-[1.4vw]'>{text}</h5>
      </div>
      
    </div>
  )
}

export default Button
