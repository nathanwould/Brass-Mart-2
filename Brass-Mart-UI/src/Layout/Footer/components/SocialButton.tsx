import { Button, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import React from 'react'

type Props = {
  children: React.ReactNode;
  label: string;
  to: string;
}

export default function SocialButton({children, label, to}: Props) {
  return (
    <Button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded='full'
      w={12}
      h={12}
      cursor='pointer'
      as='a'
      href={to}
      display='inline-flex'
      alignItems='center'
      justifyContent='center'
      transition='background 0.3s ease'
      _hover={{
        bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.300'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  )
}