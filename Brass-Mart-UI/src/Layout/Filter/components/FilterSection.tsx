import { VStack, HStack, Text, Checkbox } from '@chakra-ui/react';
import React from 'react'
import { IFilterItem } from '../filterCategories';

interface Props {
  category: string;
  title: string;
  items: IFilterItem[];
  handleChecked: (checked: any, key: string, value: string) => void;
};

function FilterSection({
  category,
  title,
  items,
  handleChecked }: Props) {
  return (
    <VStack align="left">
      <Text fontWeight="bold">{title}</Text>
          {items.map(item => (
            <HStack key={item.label}>
              <Checkbox
                onChange={(e) => handleChecked(e.target.checked, category, item.value)}
              >
                {item.label}
              </Checkbox>
            </HStack>
          ))}
        </VStack>
  )
}

export default FilterSection