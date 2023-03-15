import { Stack, Wrap } from '@chakra-ui/react';
import { useState } from 'react';
import { IFilter, IOrderBy, IProduct } from '../../types';
import Pagination from '../Pagination/Pagination';
import ProductCard from './components/ProductCard';

interface Props {
  products: IProduct[];
  filter: IFilter;
  setFilter?: (value: IFilter) => void;
  skip?: number;
  setSkip: (value: number) => void;
  take: number;
  setTake?: (value: number) => void;
  orderBy?: IOrderBy;
  setOrderBy?: (value: IOrderBy) => void;
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

      <Wrap spacing={6} paddingBottom={2}>
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

      <Pagination
        filter={filter}
        page={page}
        setPage={setPage}
        take={take}
        setSkip={setSkip}
        />
        
      </Wrap>

    </Stack>
  );
}

export default Products;