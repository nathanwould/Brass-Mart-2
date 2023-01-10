import { Stack, Wrap } from '@chakra-ui/react';
import { useState } from 'react'
import { IProduct } from '../../types';
import Pagination from '../Pagination/Pagination';
import ProductCard from './components/ProductCard';

interface Props {
  products: IProduct[];
  filter: any;
  setFilter?: (value: any) => void;
  skip?: number;
  setSkip: (value: number) => void;
  take: number;
  setTake?: (value: number) => void;
  orderBy?: any;
  setOrderBy?: (value: any) => void;
}

function Products({
  products,
  filter,
  setSkip,
  take,
}: Props) {
  const [page, setPage] = useState(1);
  return (
    <Stack paddingX={6}>
      <Wrap spacing={6}>
        {products && products.map((product: IProduct) => {
          const { id, name, photos, price } = product;
          return (
            <ProductCard
              key={id}
              id={id}
              title={name}
              photo={photos[0]}
              price={price}
            />
          )
        })}
      </Wrap>
      <Pagination
        filter={filter}
        page={page}
        setPage={setPage}
        take={take}
        setSkip={setSkip}
      />
    </Stack>
  );
}

export default Products;