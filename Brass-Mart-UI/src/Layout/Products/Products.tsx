import { Flex, Wrap } from '@chakra-ui/react';
import React from 'react'
import ProductCard from './components/ProductCard';

type Props = {
  products: any;
}

function Products({ products }: Props) {
  return (
      <Wrap spacing={6} p={6}>
        {products && products.map((product: any) => {
          const { name, photos, price } = product;
          return (
            <ProductCard
              title={name}
              photo={photos[0]}
              price={price}
            />
          )
        })}
      </Wrap>
  );
}

export default Products;