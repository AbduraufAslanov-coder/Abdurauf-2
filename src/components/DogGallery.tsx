import { Box, Button, Flex, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';

const DogGallery = () => {
    const [dog, setDog] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/6')
            .then(res => res.json())
            .then(data => {
                setDog(data.message);
                setLoading(false);
            });
    }, []);
    

    return (
        loading ? <Spinner /> :
        <Box p={4}  >
            <Text fontSize={'24px'} >Dog Gallery</Text>
            <Flex  flexDirection={'row'} gap={2} flexWrap={'wrap'} >
                {dog.map((dogUrl, index) => (
                    <Box key={index} maxW={'350px'} boxShadow={'rgba(255, 57, 40, 1) 0px 2px 4px, rgba(255, 57, 40, 1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'} _hover={{ transform: 'scale(1.1)'}} borderRadius={'10px'} border={'1px solid gray'} maxH={'650px'} m={2}>
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