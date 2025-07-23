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
    description: "Elegant drop earrings with sparkling stones.",
  },
  {
    id: 2,
    name: "Classic Gold Earrings",
    image: "/img/earrings/img1.webp",
    oldPrice: 120,
    price: 95,
    description: "Classic gold hoop earrings perfect for any occasion.",
  },
  {
    id: 3,
    name: "Diamond Stud Earrings",
    image: "/img/earrings/img2.webp",
    oldPrice: 80,
    price: 60,
    description: "Simple and elegant diamond stud earrings.",
  },
  {
    id: 4,
    name: "Pearl Drop Earrings",
    image: "/img/earrings/img3.jpeg",
    oldPrice: 200,
    price: 150,
    description: "Graceful pearl drop earrings for special moments.",
  },
  {
    id: 5,
    name: "Vintage Earrings",
    image: "/img/earrings/img4.jpeg",
    oldPrice: 100,
    price: 75,
    description: "Vintage-inspired earrings with intricate detailing.",
  },
  {
    id: 6,
    name: "Boho Chic Earrings",
    image: "/img/earrings/img5.jpeg",
    oldPrice: 40,
    price: 30,
    description: "Trendy bohemian style earrings for a casual look.",
  },
];

const EaringProducts = () => {
  return (
    <Box py={10}>
      <Box textAlign={"center"} maxW={"lg"} mx={"auto"} bg={{ md: "gray.200", base: 'gray.100' }} py={2} roundedTop={"xl"}>
        <Heading as="h2" size="2xl" mb={2}>
          Trending Earrings
        </Heading>
        <Text color="gray.600">
          Explore our top-selling earrings loved by our customers.
        </Text>
      </Box>

      <Box py={5} bg={{ md: "gray.200", base: 'gray.100' }} maxW={{ md: "97%" }} rounded={"lg"} mx={"auto"} px={{ md: "5", base: "2" }}>
        <SimpleGrid columns={[2, 2, 3, 4, 6]} gap={2}>
          {mockProducts.map((product) => (
            <Box key={product.id} maxW="sm" borderWidth="1px" borderColor="gray.200" borderRadius="lg" overflow="hidden" p={2} bg={"white"}>
              <Image src={product.image} alt={product.name} w="100%" h="200px" objectFit="cover" rounded={"lg"}/>

              <Stack mt={4} spacing={3}>
                <Text fontSize="lg" fontWeight="bold" truncate>
                  {product.name}
                </Text>
                <Text fontSize="sm" color="gray.600" noOfLines={2}>
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

export default EaringProducts;
