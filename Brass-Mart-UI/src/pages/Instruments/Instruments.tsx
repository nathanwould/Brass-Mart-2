import { Stack, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useState } from 'react';
import Products from '../../Layout/Products/Products';
import useProducts from '../../requests/queries/useProducts'

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
  const products = data?.products;
  return (
    <Stack m={6} spacing={6}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='/instruments'>Instruments</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading>Instruments</Heading>
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
    </Stack>
  );
}

export default Instruments;