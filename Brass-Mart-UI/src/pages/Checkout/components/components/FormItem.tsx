import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  name: string;
  value: any;
  onChange: (e: any) => void;
  isRequired?: boolean;
}

function FormItem({
  name,
  value,
  onChange,
  isRequired
}: Props) {
  return (
    <FormControl isRequired={isRequired} >
      <FormLabel>{name}</FormLabel>
        <Input
          value={value}
          onChange={onChange}
        />
      </FormControl>
  )
}

export default FormItem