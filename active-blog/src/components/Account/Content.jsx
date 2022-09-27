import React from 'react'
import { Box } from '@chakra-ui/react'
import Account from './Account'

const Content = () => {
  return (
    <Box
    as="main"
    flex={3}
    d="flex"
    flexDir="column"
    justifyContent="space-between"
    pt={5}
    bg="white"
    rounded="md"
   
    
    style={{ transform: 'translateY(-25px)' }}
    >
        <Account />
    </Box>
  )
}

export default Content