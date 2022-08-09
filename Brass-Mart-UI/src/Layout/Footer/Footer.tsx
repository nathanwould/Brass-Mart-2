import { Box, Container, Text, Stack, useBreakpointValue, useColorModeValue, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import SocialButton from "./components/SocialButton";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      w="100%"
      marginTop="auto"
    >
      <Container
        as={Stack}
        maxW='6xl'
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify='space-between'
        align="center"
      >
        <Stack direction={'row'} spacing={6}>
          <NavLink to={'/'}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontWeight='bold'
              color={useColorModeValue('gray.800', 'white')}
            >
              Brass Mart
            </Text>
          </NavLink>
          <Link href={'/shop'}>Shop</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contact</Link>
        </Stack>
        <Text>© 2022 Nathan Wood. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Github'} to={'#'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'LinkedIn'} to={'#'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Instagram'} to={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer