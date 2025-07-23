import React from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  Stack,
  SimpleGrid,
  Flex,
  Heading,
} from "@chakra-ui/react";

const mockProducts = [
  {
    id: 1,
    name: "Elegant Earrings",
    image: "/img/trending/earring.jpeg",
    oldPrice: 65324.8,
    price: 60324.8,
    description:
      "TWO RINGS His Hers Wedding Ring Sets Couples Rings Women's 10k Yellow Gold Fi...",
  },
  {
    id: 2,
    name: "Classic Necklace",
    image: "/img/trending/necklace.webp",
    oldPrice: 120,
    price: 95,
    description:
      "CDE Love Heart Pendant Necklaces for Women Silver Tone Rose Gold Tone Birthst...",
  },
  {
    id: 3,
    name: "Stylish Bracelet",
    image: "/img/trending/bracelet.jpg",
    oldPrice: 80,
    price: 60,
    description: "Trendy bracelet to complement any outfit.",
  },
  {
    id: 4,
    name: "Luxury Ring",
    image: "/img/trending/ring.jpg",
    oldPrice: 200,
    price: 150,
    description: "Elegant ring with sparkling gemstone.",
  },
  {
    id: 5,
    name: "Special Gift Box",
    image: "/img/trending/bracelet.jpg",
    oldPrice: 100,
    price: 75,
    description: "Perfect gift box for your loved ones.",
  },
  {
    id: 6,
    name: "Charming Anklet",
    image: "/img/trending/anklet.jpeg",
    oldPrice: 40,
    price: 30,
    description: "Cute anklet with minimalistic design.",
  },
];

const TrendingProducts = () => {
  return (
    <Box py={10}>
        <Box textAlign={'center'} maxW={'lg'} mx={'auto'} bg={{md: 'gray.200'}} py={2} roundedTop={'xl'}>
            <Heading as="h2" size="2xl" mb={2}>
                Trending Now
            </Heading>
            <Text color="gray.600">
                Discover our most popular products that customers love right now.
            </Text>
        </Box>
        <Box py={5} bg={{md: 'gray.200'}} maxW={{md:'97%'}} rounded={'lg'} mx={'auto'} px={{ md: "5", base: "2" }}>
            <SimpleGrid columns={[2, 2, 3, 4, 6]} gap={2}>
                {mockProducts.map((product) => (
                <Box key={product.id} maxW="sm" borderWidth="1px" borderColor="gray.200" borderRadius="lg" overflow="hidden" p={2} bg={'white'}> 
                    <Image src={product.image} alt={product.name} w="100%" h="200px" objectFit="cover" rounded={'lg'}/>

                    <Stack mt={4} spacing={3}>
                        <Text fontSize="lg" fontWeight="bold" truncate>
                            {product.name}
                        </Text>
                        <Text fontSize="sm" color="gray.600" truncate>
                            {product.description}
                        </Text>

                        <Flex justifyContent={'space-between'}>
                            <Badge colorScheme="red" mr={2} textDecoration="line-through">
                                ${product.oldPrice}
                            </Badge>
                            <Text as="span" fontSize="md" fontWeight="bold" color="green.500">
                                ${product.price}
                            </Text>
                        </Flex>
                    </Stack>
                </Box>
                ))}
            </SimpleGrid>
        </Box>
    </Box>
  );
};

export default TrendingProducts;
