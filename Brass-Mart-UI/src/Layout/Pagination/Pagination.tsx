import { Button, Text, HStack } from '@chakra-ui/react';
import usePagination from '../../requests/queries/usePagination';

interface Props {
  filter: any;
  page: number;
  setPage: any;
  take: number;
  setSkip: any;
}

function Pagination({
  filter,
  page,
  setPage,
  take,
  setSkip
}: Props) {
  const { data, error, isLoading } = usePagination({ filter });
  const count = data?.productsCount;
  const pageCount = count ? Math.ceil(count / take) : 1;
  return (
    <HStack
      spacing={4}
      alignItems="center"
      justifyContent="center"
    >
      <Button
        isLoading={isLoading}
        onClick={() => {
          setPage(page - 1)
          setSkip((prevSkip: number) => prevSkip - take)
        }}
        disabled={page === 1}
      >
        Prev
      </Button>
      <Text>Page {page} of {pageCount}</Text>
      <Button
        isLoading={isLoading}
        onClick={() => {
          setPage(page + 1)
          setSkip((prevSkip: number) => prevSkip + take)
        }}
        disabled={count <= take * page}
      >
        Next
      </Button>
    </HStack>
  );
}

export default Pagination;