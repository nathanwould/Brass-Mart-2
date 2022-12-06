import { Box, Center, Text, VStack } from '@chakra-ui/react';
import React from 'react'

interface Props {
  quote: string,
  author: string,
};

function Testimonial({ quote, author }: Props) {
  return (
    <Center>
      <VStack
        backgroundColor={"gray.100"}
        opacity="80%"
        padding={6}
        maxW="90%"
        align="left"
        fontSize="2xl"
      >
        <Text as="i" fontWeight="200">
          "{quote}"
        </Text>
        <Text fontWeight="200">{author}</Text>
      </VStack>
    </Center>
  );
}

export default Testimonial;