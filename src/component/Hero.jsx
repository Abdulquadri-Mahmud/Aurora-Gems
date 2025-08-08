import Header from '../layout/Header'
import { Box, Button, Flex, Heading, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import {Link as RouterLink } from "react-router-dom";

export default function Hero() {
        const navLinks = [
    { name: "Home", path: "/" },
    { name: "Earings", path: "/shop" },
    { name: "Necklace", path: "/about" },
    { name: "Rings", path: "/contact" },
    { name: "Bracelets", path: "/contact" },
    { name: "Gifts", path: "/contact" },
    ];
  return (
    <Box height={{ '2xl': '100vh', md: '85vh', base: '80vh' }} bgAttachment={'fixed'} rounded="xl" bg="gray.500" bgImage={`url('/img/img.jpg')`} bgRepeat="no-repeat" bgSize="cover" bgPos={{md:"left", base: 'center'}} bgBlendMode="multiply" position="relative" >
        <Flex position={'relative'} justifyContent={'center'} height={'100%'} alignItems={'center'} width={'full'} textAlign="center" px={4} color="white">
            <VStack maxW={'3xl'}>
                <Heading fontSize={{ base: '3xl', md: '5xl' }} lineHeight={1.2} fontWeight="bold">
                    Discover Timeless Elegance in Every Piece
                </Heading>

                <Text fontSize={{ base: 'md', md: 'xl' }}>
                    Explore our handcrafted collection of exquisite jewelry, where tradition meets luxury and every detail tells a story of beauty, class, and craftsmanship.
                </Text>
                <a href="#collections">
                    <Button size="lg" bg="whiteAlpha.800" _hover={{ bg: 'whiteAlpha.500' }}>
                        Shop the Collection
                    </Button>
                </a>

                <Box justifyContent={'center'} alignItems={'center'} borderTop={'4px solid'} borderLeft={'4px solid'} borderColor={'white'} w={{md:'250px', base: '150px'}} h={{md:'150px', base: '100px'}} bgImage={`url('/img/img.jpg')`} bg={''} bgPos={'top'} bgSize={'cover'} bgRepeat="no-repeat" bgBlendMode={'multiply'} position="absolute" bottom="0" right="2" p={'2'} roundedBottomRight="md" roundedTopLeft={'xl'} className="bg"/>
            </VStack>
        </Flex>
    </Box>
  )
}
