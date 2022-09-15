import { Box, Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import AddToCartButton from "../../../Layout/Cart/components/AddToCartButton";
import { IProduct } from "../../../types"
import { formatMoney } from "../../../utils/formatMoney";

interface Props {
  product: IProduct;
};

function InstrumentDetails({ product }: Props) {
  const { id, make, model, boreSize, bellSize, description, price } = product;
  
  if (product) {
    return (
      <Flex
        direction="column"
        color="black"
        backgroundColor="white"
        borderRadius="md"
        m={7}
        p={4}
        minW="14rem"
      >
        <SimpleGrid columns={2} spacing={2} marginBottom={6}>
          <Text fontWeight="bold">Maker:</Text>
          <Text>{make}</Text>
          <Text fontWeight="bold">Model:</Text>
          <Text>{model}</Text>
          <Text fontWeight="bold">Bore Size:</Text>
          <Text>{boreSize}"</Text>
          <Text fontWeight="bold">Bell Size:</Text>
          <Text>{bellSize}"</Text>
          <Text fontWeight="bold">Price:</Text>
          <Text fontWeight="bold">{formatMoney(price)}</Text>
        </SimpleGrid>
        <Spacer />
        <AddToCartButton id={id} />
      </Flex>
    );
  } else {
    return <Box>Not Found!</Box>
  }
}

export default InstrumentDetails;