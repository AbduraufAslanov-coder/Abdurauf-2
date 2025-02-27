import { Box, Button, Flex, Text, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';

const DogGallery = () => {
    const [dog, setDog] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random/6')
            .then(res => res.json())
            .then(data => {
                setDog(data.message);
                setLoading(false);
            });
    }, []);

    const loadMoreDogs = () => {
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random/6')
            .then(res => res.json())
            .then(data => {
                setDog(prevDogs => [...prevDogs, ...data.message]);
                setLoading(false);
            });
    };

    return (
        <Box p={4}>
            <Text fontSize={'24px'}>Dog Gallery</Text>
            <Flex flexDirection={'row'} gap={2} flexWrap={'wrap'}>
                {dog.map((dogUrl, index) => (
                    <Box key={index} maxW={'350px'} borderRadius={'10px'} border={'1px solid gray'} maxH={'650px'} m={2}>
                        <Image borderRadius={'10px'} border={'1px solid gray'} src={dogUrl} alt="dogs" />
                    </Box>
                ))}
            </Flex>
            <Button onClick={loadMoreDogs} mt={4} disabled={loading}>
                {loading ? <Spinner size="sm" /> : 'Load More Dogs'}
            </Button>
        </Box>
    );
};

export default DogGallery;