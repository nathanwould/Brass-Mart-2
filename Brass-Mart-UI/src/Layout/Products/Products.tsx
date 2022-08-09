import { Wrap } from '@chakra-ui/react';
import { useState } from 'react'
import Pagination from '../Pagination/Pagination';
import ProductCard from './components/ProductCard';

type Props = {
  products: any;
  filter: any;
  setFilter: (value: any) => void;
  skip: number;
  setSkip: (value: number) => void;
  take: number;
  setTake: (value: number) => void;
  orderBy: any;
  setOrderBy: (value: any) => void;
}

function Products({
  products,
  filter,
  setFilter,
  skip,
  setSkip,
  take,
  setTake,
  orderBy,
  setOrderBy,
}: Props) {
  const [page, setPage] = useState(1);
  return (
    <>
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
      <Pagination
        page={page}
        setPage={setPage}
        take={take}
        setSkip={setSkip}
      />
    </>
  );
}

export default Products;