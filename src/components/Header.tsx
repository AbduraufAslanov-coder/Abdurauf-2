import { Box ,Flex,Link,Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
   <Box bg='#3b82f6' pt='3' pb='3'  >
    <Flex >

<Text ml={2} fontSize='20px' >Pet Gallery</Text>


<Link ml='1050px' mr={3} href='DogGallery' > Dogs</Link>
<Link href='CatGallery'> Cats</Link>

    </Flex>
   </Box>
  )
}

export default Header