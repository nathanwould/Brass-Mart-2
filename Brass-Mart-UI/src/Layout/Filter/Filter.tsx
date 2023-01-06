import { VStack, Text, HStack, Checkbox } from '@chakra-ui/react';
import React from 'react'
import FilterSection from './components/FilterSection';
import { filterCategories } from './filterCategories';

interface Props {
  filter: any;
  initialFilter?: any;
  pageCategory?: string;
};

export default function Filter({ filter, initialFilter, pageCategory }: Props) {
  // console.log(filter)
  // console.log(filterCategories)
  if (pageCategory === 'instrument') {
    return (
      <VStack align="left">
        <Text fontWeight="bold" size="5xl">Filters</Text>

        {filterCategories.instrument.map(category => (
            <FilterSection title={category.title} items={category.items} />
        ))}

      </VStack>
    );
  }

  if (pageCategory === 'accessory') {
    return (
      <VStack align="left">
        <Text>Filters</Text>
        { }
      </VStack>
    );
  }

  else return <div></div>;
};