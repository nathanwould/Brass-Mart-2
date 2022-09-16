import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export function LeftArrow(props: any) {
  return (
    <ChevronLeftIcon
      {...props}
      position="absolute"
      top="35%"
      left={{
        sm: ".5rem",
        md: '1rem',
        base: ".5rem",
      }}
      fontSize="2rem"
      color="gray.200"
      background="gray.300"
      opacity="70%"
      borderRadius="90%"
      zIndex={2}
      cursor="pointer"
      userSelect="none"
      transition="all .2s ease"
      _hover={{
        color: "white",
        backgroundColor: "gray.300",
      }}
    />
  );
}

export function RightArrow(props: any) {
  return (
    <ChevronRightIcon
      {...props}
      position="absolute"
      top="35%"
      right={{
        sm: ".5rem",
        md: '1rem',
        base: ".5rem",
      }}
      fontSize="2rem"
      color="gray.200"
      background="gray.300"
      opacity="70%"
      borderRadius="90%"
      zIndex={2}
      cursor="pointer"
      userSelect="none"
      transition="all .2s ease"
      _hover={{
        color: "white",
        backgroundColor: "gray.300",
      }}
    />
  );
}
