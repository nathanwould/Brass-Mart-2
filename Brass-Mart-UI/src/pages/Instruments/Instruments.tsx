import { Stack, Heading, Text, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import BreadCrumbs from '../../Layout/BreadCrumbs/BreadCrumbs';
import Products from '../../Layout/Products/Products';
import useProducts from '../../requests/queries/useProducts'
import { IProduct } from '../../types';

type Props = {}

function Instruments({ }: Props) {
  const [filter, setFilter] = useState({ productType: { equals: 'instrument' } });
  const [take, setTake] = useState(8);
  const [skip, setSkip] = useState(0);
  const [orderBy, setOrderBy] = useState({ createdAt: 'desc' })
  
  const { data, isLoading, error } = useProducts({
    filter,
    take,
    skip,
    orderBy,
  });
  const products: IProduct[] = data?.products;

  const breadcrumbItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Instruments",
      href: "/instruments",
    },
  ];

  return (
    <Stack m={6} spacing={6}>
      <BreadCrumbs items={breadcrumbItems} />
      <Heading>Instruments</Heading>
      { isLoading && <Spinner color="blue.400" /> }
      { !isLoading && products?.length ?
        <Products
          products={products}
          filter={filter}
          setFilter={setFilter}
          take={take}
          setTake={setTake}
          skip={skip}
          setSkip={setSkip}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
        :
        <Text>No instruments found!</Text>
      }
    </Stack>
  );
}

export default Instruments;