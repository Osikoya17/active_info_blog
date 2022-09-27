import React from 'react'
import { Box } from '@chakra-ui/react'
import Profile from './Profile/Profile'

function Sidebar() {
  return (
    <Box
    as="aside"
    flex={1}
    mr={{ base: 0, md: 5 }}
    mb={{ base: 5, md: 0 }}
    bg="white"
    rounded="md"
    
    
    style={{ transform: 'translateY(-25px)' }}
     
     
    >
      <Profile />
    </Box>
  )
}

export default Sidebar