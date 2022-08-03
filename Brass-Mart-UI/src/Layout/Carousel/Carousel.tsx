import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Fade, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { formatMoney } from "../../utils/formatMoney";

interface Props {
  products: any;
};

function Carousel({ products }: Props) {
  const [current, setCurrent] = useState(0);
  const length = products?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(products) || products.length <= 0) {
    return null
  }

  return (
    <VStack
      spacing={4}
      py={8}
    >
      <Heading size="md">Recent Products:</Heading>
      <Container
        px={0}
        position="relative"
        display="flex"
        // justifyContent="center"
        // alignItems="center"
        maxW={{
          base: "60%",
          sm: "60%",
          md: "60%",
          lg: "36rem",
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
          const image = product.photos[0].image.publicUrlTransformed;
          return (
            <Fade in={index === current}>
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
                <Text fontWeight="bold">{product.name}</Text>
                <Text fontWeight="bold">{formatMoney(product.price)}</Text>
                <Button>See More</Button>
              </VStack>
            </Fade>
          )
        })}
        </Container>
    </VStack>
  );
}

export default Carousel;