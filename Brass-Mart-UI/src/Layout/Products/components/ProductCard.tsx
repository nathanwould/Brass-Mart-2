import { Box, Heading, Text, Image, VStack, Spacer } from '@chakra-ui/react';
import { formatMoney } from '../../../utils/formatMoney';
import AddToCartButton from '../../Cart/components/AddToCartButton';

type Props = {
  id: string;
  title: string;
  photo: any;
  price: number;
}

function ProductCard({ id, title, photo, price }: Props) {
  return (
    <Box
      shadow="md"
      overflow="hidden"
      width="18rem"
      transition="all .1s"
      _hover={{
        shadow: "lg",
        transform: "scale(1.01)"
      }}
    >

      <Box
        as="a"
        href={`/products/${id}`}
      >
        {photo &&
          <Image
            src={photo?.image.publicUrlTransformed}
            alt={photo?.alt}
            loading="lazy"
            objectFit="cover"
            style={{
              aspectRatio: "4 / 3"
            }}
          />
        }
      </Box>

      <Spacer />

      <VStack
        p={4}
        spacing={3}
        align="left"
      >

        <Heading fontSize="xl">{title}</Heading>

        <Text fontWeight="bold">{formatMoney(price)}</Text>

        <AddToCartButton id={id} />
        
      </VStack>
    </Box>
  );
}

export default ProductCard;