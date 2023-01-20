import { Stack, Heading, Text, Spinner, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import BreadCrumbs from '../../Layout/BreadCrumbs/BreadCrumbs';
import Filter from '../../Layout/Filter/Filter';
import Products from '../../Layout/Products/Products';
import useProducts from '../../requests/queries/useProducts'
import { IFilter, IOrderBy, IProduct } from '../../types';

function Instruments() {
  const pageCategory = 'instrument';
  const initialFilter = { productType: { equals: pageCategory } };
  const [filter, setFilter] = useState<IFilter>(initialFilter);
  const [take, setTake] = useState(8);
  const [skip, setSkip] = useState(0);
  const [orderBy, setOrderBy] = useState<IOrderBy>({ createdAt: 'desc' });
  
  const { data, isLoading } = useProducts({
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
      
      <HStack align="start">
        
        <Filter
          setFilter={setFilter}
          pageCategory={pageCategory}
        />

        {isLoading
          ?
          <Spinner color="blue.400" />
            : products.length ?
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
      </HStack>

    </Stack>
  );
}

export default Instruments;