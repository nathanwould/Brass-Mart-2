import { Stack, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Products from '../../Layout/Products/Products';
import useProducts from '../../requests/queries/useProducts'

type Props = {}

function Instruments({ }: Props) {
  const { data, isLoading, error } = useProducts({
    filter: { productType: { equals: 'instrument'} },
    take: 8,
    skip: 0,
    orderBy: { createdAt: 'desc'}
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
      <Products products={products} />
    </Stack>
  );
}

export default Instruments;