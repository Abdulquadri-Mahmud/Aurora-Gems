import JewelleryMarquee from "../../component/animation/JewelleryMarquee";
import CategoryIntro from "../../component/categories/CategoryIntro";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

// Dummy data (optional)
const fakeProducts = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `Aurora Piece ${i + 1}`,
  image: `/img/bracelet/img6.jpg,${i}`,
  price: (Math.random() * 100 + 20).toFixed(2),
}));

const CategoryPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("category");

  return (
    <Box bg={'gray.100'}>
      <Header />
      <Box p={{md: 5, base: 3}}>
        <Box bg={'white'} rounded={'lg'}>
            <CategoryIntro/>
        </Box>
        <Box mt={10}>
          <JewelleryMarquee bgColor="teal.700"/>
        </Box>
        <Box px={{ base: 4, md: 3 }} py={14} maxW="" mx="auto" id="category" bg={'white'} rounded={'lg'} my={'10'}>
            {category ? (
            <>
                <Box mb={8}>
                    <Heading textAlign="center" mb={3} fontSize={{ base: "2xl", md: "4xl" }} fontWeight="semibold" >
                        Discover Our{" "}
                    <Text as="span" color="teal.500">
                        {category}
                    </Text>{" "}
                        Collection
                    </Heading>
                    <Text maxW="2xl" textAlign={'center'} mx="auto" fontSize={{ base: "md", md: "lg" }} color="gray.600">
                        Handpicked pieces crafted with care, elegance, and timeless design. Explore our {category?.toLowerCase()} selection and find your next stunning favorite today.
                    </Text>
                </Box>

                <SimpleGrid columns={[2, 2, 3, 4, 6]} gap={2}>
                    {fakeProducts.map((product) => (
                        <Stack key={product.id} borderWidth="1px" borderColor="gray.200" rounded="xl" overflow="hidden" spacing={0} transition="all 0.3s ease" _hover={{
                            borderColor: "teal.400",
                            transform: "translateY(-5px)",
                            shadow: "md",
                            }}bg={"white"}>
                            <Image src={product.image} alt={product.name} w="100%" h="180px" objectFit="cover"/>
                            <Box p={4}>
                                <Text fontWeight="600" fontSize="lg" mb={1}>
                                    {product.name}
                                </Text>
                                <Text color="teal.600" fontSize="md">
                                    ₦{product.price}
                                </Text>
                            </Box>
                        </Stack>
                    ))}
                </SimpleGrid>
            </>
            ) : (
            <Box textAlign="center" mt={20}>
                <Heading fontSize="3xl">Please select a category</Heading>
                <Text mt={4} color="gray.600">
                    You’ll see all your beautiful jewelry here 💎
                </Text>
            </Box>
            )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CategoryPage;
