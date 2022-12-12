import { Flex, Button, Text, HStack } from '@chakra-ui/react';
import React from 'react'
import usePagination from '../../requests/queries/usePagination';

type Props = {
  page: number;
  setPage: any;
  take: number;
  setSkip: any;
}

function Pagination({
  page,
  setPage,
  take,
  setSkip
}: Props) {
  const { data, error, isLoading } = usePagination();
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
          setSkip((prevState: any) => prevState - take)
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
          setSkip((prevState: any) => prevState + take)
        }}
        disabled={count <= take * page}
      >
        Next
      </Button>
    </HStack>
  );
}

export default Pagination;