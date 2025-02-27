import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';

const DogGallery = () => {
    const [dog, setDog] = useState([]);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/6')
            .then(res => res.json())
            .then(data => setDog(data.message));
    }, []);

    return (
        <Box p={4}>
            <Text fontSize={'24px'} >Dog Gallery</Text>
            <Flex  flexDirection={'row'} gap={2} flexWrap={'wrap'} >
                {dog.map((dogUrl, index) => (
                    <Box key={index} maxW={'350px'} borderRadius={'10px'} border={'1px solid gray'} maxH={'650px'} m={2}>
                        <Image  borderRadius={'10px'}  border={'1px solid gray'} src={dogUrl} alt="dogs" />
                    </Box>
                ))}
            </Flex>
            <Button onClick={    () => {
                    fetch('https://dog.ceo/api/breeds/image/random/6')
                        .then(res => res.json())
                        .then(data => setDog(data.message));
                }
            }>Load More Dogs</Button>
        </Box>
    );
};

export default DogGallery;