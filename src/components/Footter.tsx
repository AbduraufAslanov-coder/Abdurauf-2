import { Box, Text, Link, Flex } from '@chakra-ui/react';
import React from 'react';

const Footter = () => {
  return (
    <Box as="footer" py={4} bg="gray.800" color="white">
      <Flex justify="center" align="center" px={4}>
        <Text>© 2025 Pet Gallery. All rights reserved.</Text>
     
      </Flex>
    </Box>
  );
};

export default Footter;