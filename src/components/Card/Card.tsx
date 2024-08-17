import Image from 'next/image'
import React, { useRef } from 'react'
import Button from '../Button/Button'
import { useScroll, useTransform, motion } from 'framer-motion';
import { MaskText1 } from '../Text/Text_Mask';

function Card({ val }: { val: any }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    // const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                // opacity: opacityProgress,
                backgroundColor: val.bg
            }}
            className={`w-full xs:py-[2vw] py-[4vw] 
            px-[4vw] xs:px-[2vw] 
            rounded-2xl flex gap-[1vw]`
            }
        >
            <div className='xs:w-1/2 flex flex-col items-start gap-[1.5vw] '>
                <h2 className=''>
                    <Image src={val.logo}
                        alt="" width={32} height={32}
                        className='hidden xs:block xs:w-[4vw]'
                    />
                </h2>
                <div className='w-full hidden xs:flex justify-end'>
                    <div className='pt-[1vw]'>
                        {/* <Image src={val.image1} alt="" 
                    width={1000} height={100}
                    className='w-[16vw] rounded-2xl' /> */}
                        <MaskText1 />

                    </div>
                </div>
                <Image src={val.image2} alt=""
                    width={1000} height={32}
                    className='w-[38vw] hidden xs:block rounded-2xl' />
            </div>
            <div className='w-full xs:w-1/2'>

                <div className='bg-white w-full h-[60vw] xs:h-[26vw] rounded-2xl overflow-hidden'>
                    <video src={val.videoUrl}
                        autoPlay
                        muted
                        loop
                        className='w-[100%] h-[100%] object-cover'
                    />
                </div>
                <div className='mt-[6vw] xs:mt-[2vw] pl-[1vw]'>
                    <p className='text-[3vw] xs:text-[.8vw] mb-[2vw] xs:mb-[.7vw] tracking-tight'>{val.desc}</p>
                    <h3 className='text-[4vw] leading-[5vw] xs:text-[1.1vw] xs:leading-[1.4vw] mb-[8vw] xs:mb-[2vw] tracking-tight'>{val.heading}</h3>
                    <Button text='View Event' bg='bg-white' txt='text-primary' />
                </div>
            </div>

        </motion.div>
    )
}

export default Card
