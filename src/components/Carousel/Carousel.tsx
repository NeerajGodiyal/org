
import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import AliceCar from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface AliceCarouselProps {}

const data = ["1", "2", "3", "4", "5", "6", "7"];

const AliceCarousel: React.FC<AliceCarouselProps> = ({}) => {
  const [activeIndex, setActiveSlide] = useState(Math.floor(data.length / 2));
  const [carouselPadding, setCarouselPadding] = useState<number | undefined>();
  const refCar = useRef<any>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCarouselPadding(window.innerWidth / 2 - 170);
    }
  }, []);

  useEffect(() => {
    // Start the auto-play timer
    startAutoPlay();
    // Clear the timer on component unmount
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      if (refCar.current) {
        (refCar.current as any).slideNext();
      }
    }, 1000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const items = data.map((_, index) => {
    return (
      <Flex
        w="60vh"
        h="50vh"
        p="0 20px"
        direction="column"
        position="relative"
        onMouseEnter={stopAutoPlay} // Stop auto-play on hover
        onMouseLeave={startAutoPlay} // Restart auto-play when not hovering
      >
        {/* Image Container */}
        <Flex
          w="100%"
          h="70%"
          sx={{
            '&:hover': {
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease-in-out',
            }
          }}
          borderRadius="10px"
          overflow="hidden"
          backgroundImage={`url(/images/${index + 1}.jpg)`}
          backgroundSize="cover"
          backgroundPosition="center"
        />
        
        {/* Text Container */}
        <Flex
          direction="column"
          w="100%"
          h="20%"
          p="20px"
          borderRadius="0px 0px 10px 10px"
          background="transparent"
          color="white"
          position="absolute"
          bottom="0"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="20px" mb="8px" textAlign="center">
            Some description about what you're seeing now
          </Text>
          <HStack spacing="15px" fontSize="12px">
            <Text>Action</Text>
            <Text>Drama</Text>
            <Text>Fantasy</Text>
          </HStack>
        </Flex>
      </Flex>
    );
  });

  const onSlideChange = () => {
    setActiveSlide((refCar.current as any).state.activeIndex);
  };

  return (
    <>
      <AliceCar
        ref={refCar}
        paddingLeft={carouselPadding}
        disableButtonsControls
        disableDotsControls
        autoWidth
        infinite
        mouseTracking
        touchTracking
        items={items}
        activeIndex={activeIndex}
        onSlideChanged={onSlideChange}
        autoPlay
        autoPlayInterval={1500}
        animationDuration={750}
      />
      <Flex pointerEvents="none" pt="0" w="100%" position="relative" className="-top-64">
        <Icon
          pointerEvents="visible"
          onClick={() => refCar.current && (refCar.current as any).slidePrev()}
          color="#D3004A"
          cursor="pointer"
          w="60px"
          h="60px"
          as={IoIosArrowBack}
        />
        <Icon
          pointerEvents="visible"
          onClick={() => refCar.current && (refCar.current as any).slideNext()}
          color="#D3004A"
          ml="auto"
          cursor="pointer"
          w="60px"
          h="60px"
          as={IoIosArrowForward}
        />
      </Flex>
    </>
  );
};

export default AliceCarousel;