import { Box } from '@chakra-ui/react';
import React from 'react'
import Nav from '../Nav/Nav'

interface Props {
  children: React.ReactNode;
}

function Layout({children}: Props) {
  return (
    <Box>
      <Nav />
      <Box
        height={'10rem'}
        backgroundImage={`url("https://res.cloudinary.com/dkyy9wjvs/image/upload/v1637184051/dsc_0383_brtvxm.jpg")`} />
      <Box>{children}</Box>
      {/* Footer will go here */}
    </Box>
  )
}

export default Layout