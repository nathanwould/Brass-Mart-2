import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Fade, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import { useState } from "react";
import { IProduct } from "../../types";
import { formatMoney } from "../../utils/formatMoney";
import { LeftArrow, RightArrow } from "./components/Arrows";

interface Props {
  products: IProduct[];
};

function ProductCarousel({ products }: Props) {
  const [current, setCurrent] = useState(0);
  const length = products?.length;

  const settings = {
    autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  return (
    <VStack
      spacing={4}
      p={8}
    >
      <Box textAlign="center">
        <Heading size="lg">NEW ARRIVALS</Heading>
        <Text m={2}>Grab them before they're gone!</Text>
      </Box>
      <Box
        p={4}
        paddingBottom={8}
        maxW={{
          base: "80%",
          sm: "70%",
          md: "50%",
          lg: "30rem",
        }}
      >  
        <Slider {...settings}>
          {products?.map((product, index) => {
            const { id, name, price } = product;
            const image = product.photos[0].image.publicUrlTransformed;
            return (
              <VStack
                shadow="md"
                textAlign="center"
                paddingBottom={4}
                spacing={4}
              >
                <Image
                  src={image}
                  alt={product.name}
                />
                <Text fontWeight="bold" fontSize="xl">{name}</Text>
                <Text fontWeight="bold">{formatMoney(price)}</Text>
                <Button as="a" href={`products/${id}`}>Learn More</Button>
              </VStack>
            )
          })}
        </Slider>
      </Box>
      {/* <Container
        px={0}
        position="relative"
        display="flex"
        maxW={{
          base: "50%",
          sm: "60%",
          md: "50%",
          lg: "30rem",
        }}
      >
        <ChevronLeftIcon
          onClick={prevSlide}
          position="absolute"
          top="35%"
          left={{
            base: ".5rem",
            sm: "0rem",
            md: ".5rem"
          }}
          fontSize="3rem"
          color="gray.200"
          zIndex={2}
          cursor="pointer"
          userSelect="none"
          transition="all .2s ease"
          _hover={{
            transform: 'scale(1.08)',
            color: "white"
          }}
        />
        <ChevronRightIcon
          onClick={nextSlide}
          position="absolute"
          top="35%"
          right={{
            base: ".5rem",
            sm: "0rem",
            md: '.5rem'
          }}
          fontSize="3rem"
          color="gray.200"
          zIndex={2}
          cursor="pointer"
          userSelect="none"
          transition="all .2s ease"
          _hover={{
            transform: 'scale(1.08)',
            color: "white"
          }}
        />
        {products.map((product, index) => {
          const { id, name, price } = product;
          const image = product.photos[0].image.publicUrlTransformed;
          return (
            <Fade in={index === current} key={index}>
              <VStack
                shadow="md"
                display={index === current ? undefined : "none"}
                textAlign="center"
                paddingBottom={4}
                spacing={4}
              >
                <Image
                  src={image}
                  alt={product.name}
                />
                <Text fontWeight="bold" fontSize="xl">{name}</Text>
                <Text fontWeight="bold">{formatMoney(price)}</Text>
                <Button as="a" href={`products/${id}`}>Learn More</Button>
              </VStack>
            </Fade>
          )
        })}
      </Container> */}
      <Button
        as="a"
        href="/instruments"
        color="white"
        backgroundColor="blue.400"
        marginTop={"12rem"}
        _hover={{
          backgroundColor: "blue.300",
        }}
      >
        Shop Instruments
      </Button>
    </VStack>
  );
}

export default ProductCarousel;