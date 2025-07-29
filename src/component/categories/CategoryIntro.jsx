import { Box, Heading, Text, Stack, Button, } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CategoryIntro = () => {
  const navigate = useNavigate();

  return (
    <Box py={20} border={'1px solid'} borderColor={'gray.200'} rounded={'lg'} textAlign="center" position={'relative'} 
    zIndex={1} bgImage={`url('/img/img3.jpg')`} bgAttachment={'fixed'} bgBlendMode={"multiply"} bgRepeat="no-repeat" bgSize="cover" 
    bgPos={{ md: "top", base: "center" }} className="bg">
      <Stack px={{ base: 2, md: 10 }} maxW="3xl" mx="auto" spacing={6} >
        <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={4} fontWeight="bold" color="white">
          Welcome to Aurora Gems ✨
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb={4} color="gray.100" fontWeight={'600'}>
          Discover timeless elegance and unforgettable beauty in every piece. Whether you're 
          shopping for Earings, Necklaces, or the perfect gift, our handcrafted jewelry 
          collections are designed to make you shine.
        </Text>

        <a href="#category">
            <Button alignSelf="center" bg="white"  mb={3} color={'pink.600'} size="lg" rounded="full" px={10}>
                Explore Now
            </Button>
        </a>
      </Stack>
      {/* <Box py={10} bgImage={`url('/img/img.jpg')`} bgAttachment={'fixed'} bgBlendMode={"multiply"} bgRepeat="no-repeat" bgSize="cover" bgPos={{ md: "top", base: "center" }}  w={'full'} roundedTop={'full'} 
      mx={2} pos={'absolute'} bottom={0} zIndex={-1} className="tealBg"/> */}
    </Box>
  );
};

export default CategoryIntro;
