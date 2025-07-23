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

const mockNecklaces = [
  {
    id: 1,
    name: "Elegant Gold Necklace",
    image: "/img/necklace/img1.webp",
    oldPrice: 250,
    price: 199,
    description: "Hold necklace with pendant women Gold necklace with heart pendant Gift for her",
  },
  {
    id: 2,
    name: "Generic Pearl Necklaces for Woman",
    image: "/img/necklace/img2.jpg",
    oldPrice: 180,
    price: 145,
    description: "Classic pearl necklace perfect for formal occasions.",
  },
  {
    id: 3,
    name: "Diamond Pendant Necklace",
    image: "/img/necklace/img3.jpeg",
    oldPrice: 320,
    price: 275,
    description: "Stylish diamond pendant necklace.",
  },
  {
    id: 4,
    name: "Layered Chain Necklace",
    image: "/img/necklace/img4.jpeg",
    oldPrice: 150,
    price: 120,
    description: "Trendy layered chain necklace for modern outfits.",
  },
  {
    id: 5,
    name: "Vintage Choker Necklace",
    image: "/img/necklace/img5.jpg",
    oldPrice: 200,
    price: 160,
    description: "Vintage choker necklace with intricate design.",
  },
  {
    id: 6,
    name: "Boho Beaded Necklace",
    image: "/img/necklace/img6.jpeg",
    oldPrice: 90,
    price: 70,
    description: "Bohemian style beaded necklace for casual wear.",
  },
];

const TrendingNecklaces = () => {
  return (
    <Box py={10}>
        <Box textAlign={"center"} maxW={"lg"} mx={"auto"} bg={{ md: "gray.200" }} py={2} roundedTop={"xl"}>
            <Heading as="h2" size="2xl" mb={2}>
                Trending Necklace
            </Heading>
            <Text color="gray.600">
                Explore our top-selling necklace loved by our customers.
            </Text>
        </Box>

        <Box py={5} bg={{ md: "gray.200" }} maxW={{ md: "97%" }} rounded={"lg"} mx={"auto"} px={{ md: "5", base: "2" }}>
            <SimpleGrid columns={[2, 2, 3, 4, 6]} gap={2}>
                {mockNecklaces.map((product) => (
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

export default TrendingNecklaces;
