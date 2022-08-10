import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';
import { formatMoney } from '../../../utils/formatMoney';
import AddToCartButton from './AddToCartButton';

type Props = {
  title: string;
  photo: any;
  price: number;
}

function ProductCard({ title, photo, price }: Props) {
  return (
    <Box
      shadow="md"
      overflow="hidden"
      transition="all .1s"
      _hover={{
        shadow: "lg",
        transform: "scale(1.01)"
      }}
    >
      <Box
        width="18rem"
        overflow="hidden"
      >
        <Image
          src={photo?.image.publicUrlTransformed}
          alt={photo.alt}
          objectFit="cover"
        />
      </Box>
      <VStack p={4} spacing="3" align="left">
        <Heading fontSize="xl">{title}</Heading>
        <Text fontWeight="bold">{formatMoney(price)}</Text>
        <AddToCartButton />
      </VStack>
    </Box>
  );
}

export default ProductCard;