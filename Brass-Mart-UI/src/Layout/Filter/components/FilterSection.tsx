import { VStack, HStack, Text, Checkbox } from '@chakra-ui/react';
import React from 'react'
import { IFilterItem } from '../filterCategories';

interface Props {
  title: string;
  items: IFilterItem[];
};

function FilterSection({title, items}: Props) {
  return (
    <VStack align="left">
      <Text fontWeight="bold">{title}</Text>
          {items.map(item => (
            <HStack>
              <Checkbox>{item.label}</Checkbox>
            </HStack>
          ))}
        </VStack>
  )
}

export default FilterSection