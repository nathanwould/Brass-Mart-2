import { VStack, Text } from '@chakra-ui/react';
import FilterSection from './components/FilterSection';
import { filterCategories } from './filterCategories';

interface Props {
  setFilter: (cb: (value: any) => any) => void;
  pageCategory?: string;
};

export default function Filter({
  setFilter,
  pageCategory
}: Props) {
  const handleChecked = (checked: boolean, key: string, value: string) => {
  
    if (checked) {
      console.log("Adding filter!")
      let newFilter = { [key]: { in: [value] } }
      setFilter(prevFilter => {
        if (prevFilter[key]) {
          let newValues = prevFilter[key].in
          newValues.push(value)
          console.log("prevValues:", prevFilter[key].in)
          // console.log('newValues:', newValues)
          let newFilter = { [key]: { in: newValues } }
          return {...prevFilter, ...newFilter}
        } 
        else return { ...prevFilter, ...newFilter }
      })
    }
    if (!checked) {
      console.log("Removing filter!")
      setFilter(prevFilter => {
        let filterValues = prevFilter[key].in
        if (filterValues.includes(value) && filterValues.length > 1) {
          let newValues = filterValues.filter((item: any) => item !== value)
          let newFilter = { [key]: { in: newValues } }
          return {...prevFilter, ...newFilter}
        } else {
          const { [key]: deletedKey, ...otherKeys } = prevFilter
          return otherKeys;
        }
      })
    }
  };

  if (pageCategory === 'instrument') {
    return (
      <VStack align="left">
        <Text fontWeight="bold" size="5xl">Filters</Text>

        {filterCategories.instrument.map(category => (
          <FilterSection
            category={category.value}
            title={category.title}
            items={category.items}
            handleChecked={handleChecked}
          />
        ))}

      </VStack>
    );
  }

  if (pageCategory === 'accessory') {
    return (
      <VStack align="left">
        <Text>Filters</Text>
        {filterCategories.accessory.map(category => (
          <FilterSection
            category={category.value}
            title={category.title}
            items={category.items}
            handleChecked={handleChecked}
          />
        ))}
      </VStack>
    );
  }

  else return <div></div>;
};