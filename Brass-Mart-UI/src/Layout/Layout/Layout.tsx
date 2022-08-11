import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav'

interface Props {
  children: React.ReactNode;
}

function Layout({children}: Props) {
  return (
    <Flex
      direction="column"
      minH="100vh"
    >
      <Nav />
      <Box
        height={'10rem'}
        backgroundImage={`url("https://res.cloudinary.com/dkyy9wjvs/image/upload/v1637184051/dsc_0383_brtvxm.jpg")`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      <Box>{children}</Box>
      <Footer />
    </Flex>
  )
}

export default Layout