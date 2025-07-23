import React from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  Stack,
  SimpleGrid,
  Heading,
  Flex,
} from "@chakra-ui/react";

const mockRings = [
  {
    id: 1,
    name: "Dainty 14K Gold Plated Bracelet Set",
    image: "/img/bracelet/img1.jpg",
    oldPrice: 250,
    price: 199,
    description: "Dainty 14K Gold Plated Bracelet Set",
  },
  {
    id: 2,
    name: "Generic Pearl Necklaces for Woman",
    image: "/img/bracelet/img2.jpg",
    oldPrice: 180,
    price: 145,
    description: "Classic pearl necklace perfect for formal occasions.",
  },
  {
    id: 3,
    name: "Cause We Care Stone Miyuki Station Pearl",
    image: "/img/bracelet/img3.jpg",
    oldPrice: 320,
    price: 275,
    description: "Cause We Care Stone Miyuki Station Pearl",
  },
  {
    id: 4,
    name: "Wiwpar Layered Chain Bracelets for women",
    image: "/img/bracelet/img4.jpg",
    oldPrice: 150,
    price: 120,
    description: "Wiwpar Layered Chain Bracelets for women.",
  },
  {
    id: 5,
    name: "African Tribes Collar Bracelet Set Gold",
    image: "/img/bracelet/img5.webp",
    oldPrice: 200,
    price: 160,
    description: "African Tribes Collar Bracelet Set Gold.",
  },
  {
    id: 6,
    name: "Boho Small Flower Summer Colorful Bracelet",
    image: "/img/bracelet/img6.jpg",
    oldPrice: 90,
    price: 70,
    description: "24 Pieces Colorful Beaded Bracelet Sets for Women Handmade Beaded Flower Bohemian Bracelet Cute Aesthetic Bracelet Indie Bracelets Aesthetic Bead ",
  },
];

const TrendingBracelets = () => {
  return (
    <Box py={10}>
        <Box textAlign={"center"} maxW={"lg"} mx={"auto"} bg={{ md: "gray.200", base: 'gray.100' }} py={2} roundedTop={"xl"}>
            <Heading as="h2" size="2xl" mb={2}>
                Trending Bracelets
            </Heading>
            <Text color="gray.600">
                Explore our top-selling rings loved by our customers.
            </Text>
        </Box>

        <Box py={5} bg={{ md: "gray.200", base: 'gray.100' }} maxW={{ md: "97%" }} rounded={"lg"} mx={"auto"} px={{ md: "5", base: "2" }}>
            <SimpleGrid columns={[2, 2, 3, 4, 6]} gap={2}>
                {mockRings.map((product) => (
                    <Box key={product.id} maxW="sm" borderWidth="1px" borderColor="gray.200" borderRadius="lg" overflow="hidden" p={2} bg={"white"}>
                        <Image src={product.image} alt={product.name} w="100%" h="200px" objectFit="cover" rounded={"lg"}/>

                        <Stack mt={4} spacing={3}>
                            <Text fontSize="lg" fontWeight="bold" truncate>
                                {product.name}
                            </Text>
                            <Text fontSize="sm" color="gray.600" noOfLines={2} truncate>
                                {product.description}
                            </Text>

                            <Flex justifyContent={"space-between"} alignItems="center">
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

export default TrendingBracelets;
