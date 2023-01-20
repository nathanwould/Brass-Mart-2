import { VStack, HStack, Text, Checkbox } from '@chakra-ui/react';
import { IFilterItem } from '../filterCategories';

interface Props {
  category: string;
  title: string;
  items: IFilterItem[];
  handleChecked: (checked: boolean, key: string, value: string) => void;
};

function FilterSection({
  category,
  title,
  items,
  handleChecked }: Props) {
  return (
    <VStack align="left">
      <Text fontWeight="bold">{title}</Text>
          {items.map((item, index) => (
            <HStack key={index}>
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

export default FilterSection;