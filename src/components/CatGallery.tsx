import { Box, Button, Flex, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';

const CatGallery = () => {
    const [cat, setCat] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.thecatapi.com/v1/images/search?limit=6')
            .then(res => res.json())
            .then(data => {
                setCat(data.map(cat => cat.url));
                setLoading(false);
            });
    }, []);

    return (
         loading ? <Spinner /> :
        <Box p={4}>
            <Text fontSize={'24px'}>Cat Gallery</Text>
            <Flex flexDirection={'row'} gap={2} flexWrap={'wrap'}>
                {cat.map((catUrl, index) => (
                    <Box key={index} maxW={'350px'} boxShadow={'rgba(255, 57, 40, 1) 0px 2px 4px, rgba(255, 57, 40, 1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'} _hover={{ transform: 'scale(1.1)' }} borderRadius={'10px'} border={'1px solid gray'} maxH={'650px'} m={2}>
                        <Image borderRadius={'10px'} border={'1px solid gray'} src={catUrl} alt="cats" />
                    </Box>
                ))}
            </Flex>
                     <Button onClick={
                            () => {
                                fetch('https://api.thecatapi.com/v1/images/search?limit=6')
                                .then(res => res.json())
                                .then(data => setCat(data.map(cat => cat.url)));
                                
                            }
                        }>Load More Cats</Button>
        </Box>
    );
};

export default CatGallery;


