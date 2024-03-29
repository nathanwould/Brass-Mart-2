import { Button, Text, HStack } from '@chakra-ui/react';
import usePagination from '../../requests/queries/usePagination';
import { IFilter } from '../../types';

interface Props {
  filter: IFilter;
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
  const { data, isLoading } = usePagination({ filter });
  const count = data?.productsCount;
  const pageCount = count ? Math.ceil(count / take) : 1;
  return (
    <HStack
      spacing={4}
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
    >
      <Button
        isLoading={isLoading}
        onClick={() => {
          setPage((prevPage: number) => prevPage - 1)
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
          setPage((prevPage: number) => prevPage + 1)
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