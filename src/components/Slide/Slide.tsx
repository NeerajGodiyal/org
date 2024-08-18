import React from 'react';
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import LineAnimation from '../Line/Line';
import { Text_Opacity1 } from '../Text_Opacity/Text_Opacity';

const Slide: React.FC = () => {
    const options = {
        perPage: 4, // Default number of slides per page
        type: "loop",
        lazyLoad: 'nearby',
        autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: true,
            speed: 1,
        },
        arrows: false,
        pagination: false,
        gap: '1rem', // Default gap between slides
        breakpoints: {
            1024: {
                perPage: 3, // 3 slides per page for screens <= 1024px
                gap: '10px', // Gap reduced to 10px
            },
            768: {
                perPage: 2, // 2 slides per page for screens <= 768px
                gap: '10px',  // Gap reduced to 8px
            },
            640: {
                perPage: 2, // 1 slide per page for screens <= 640px
                gap: '8px',  // Gap reduced to 5px
            },
        },
    };

    return (
        <>
            <Text_Opacity1 />
        <div className="relative flex h-[60vh] my-10 w-full">
            <div className="w-full relative  overflow-hidden dark:text-white text-black">
            <LineAnimation />
                <Splide options={options} extensions={{ AutoScroll }}>
                    <SplideSlide>
                        <div className="relative h-[15vw] xl:h-[18vw] md:h-[30vw] sm:h-[40vw] rounded-[20px] overflow-hidden ">
                            <img
                                src="/images/1.jpg"
                                alt="Image 1 Description"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-[40%] flex flex-col pt-5">
                            <h1 className="text-lg font-bold">Title 1</h1>
                            <p>Content goes here Content goes here Content goes here Content goes here</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="relative h-[15vw] xl:h-[18vw] md:h-[30vw] sm:h-[40vw]  overflow-hidden rounded-[20px]">
                            <img
                                src="/images/8.jpg"
                                alt="Image 2 Description"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-[40%] flex flex-col pt-5">
                            <h1 className="text-lg font-bold">Title 2</h1>
                            <p>Content goes here Content goes here Content goes here Content goes here</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="relative h-[15vw] xl:h-[18vw] md:h-[30vw]  sm:h-[40vw] overflow-hidden rounded-[20px] ">
                            <img
                                src="/images/3.jpg"
                                alt="Image 3 Description"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-[40%] flex flex-col pt-5">
                            <h1 className="text-lg font-bold">Title 3</h1>
                            <p>Content goes here Content goes here Content goes here Content goes here</p>
                        </div>
                    </SplideSlide>
                </Splide>
                <LineAnimation />
            </div>
        </div>
        </>
    );
};

export default Slide;