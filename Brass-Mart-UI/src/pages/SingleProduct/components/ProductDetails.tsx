import { Box, Flex, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import ImageCarousel from '../../../Layout/Carousel/ImageCarousel';
import { IProduct } from '../../../types'
import InstrumentDetails from './InstrumentDetails';

interface Props {
  product: IProduct;
}

function ProductDetails({product}: Props) {
  return (
    <Box
      w="100%"
      backgroundColor="gray.200"
      borderRadius="md"
    >
      <Flex direction={{ base: "column", md: "row" }} >
        <ImageCarousel photos={product?.photos} />
        {product?.productType === "instrument" &&
          <InstrumentDetails product={product} />
        }
      </Flex>
      <VStack
        backgroundColor="white"
        borderRadius="md"
        p={4}
        m={7}
        marginTop={2}
        spacing={4}
        align="left"
      >
        <Text fontWeight="bold" >Description:</Text>
        <Text>{product?.description}</Text>
      </VStack>
    </Box>
  )
}

export default ProductDetails