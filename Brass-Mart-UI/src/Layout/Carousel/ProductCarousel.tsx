import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import { IProduct } from "../../types";
import { formatMoney } from "../../utils/formatMoney";
import { LeftArrow, RightArrow } from "./components/Arrows";

interface Props {
  products?: IProduct[];
};

function ProductCarousel({ products }: Props) {

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
        {products ?
          <Slider {...settings}>
            {products?.map((product, index) => {
              const { id, name, price } = product;
              const image = product.photos[0].image.publicUrlTransformed;
              return (
                <VStack
                  key={index}
                  shadow="md"
                  textAlign="center"
                  marginY={4}
                  paddingBottom={4}
                  spacing={4}
                >

                  <Image
                    src={image}
                    alt={product.name}
                    loading="lazy"
                  />

                  <Text fontWeight="bold" fontSize="xl">{name}</Text>

                  <Text fontWeight="bold">{formatMoney(price)}</Text>

                  <Button as="a" href={`products/${id}`}>Learn More</Button>

                </VStack>
              )
            })}
          </Slider>
          :
          <VStack
            shadow="md"
            textAlign="center"
            paddingBottom={4}
            spacing={4}
          >
            <Box backgroundColor="gray.200"></Box>
            <Box backgroundColor="gray.200" width="100%"></Box>
          </VStack>
        }
      </Box>

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