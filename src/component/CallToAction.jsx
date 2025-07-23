import React from "react";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

export default function CallToAction() {
  return (
    <Box w="100%"
      h={{ base: "300px", md: "300px" }}
      backgroundImage="url('/img/img4.jpg')"
      backgroundPosition="top"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      bgBlendMode={'multiply'}
      className="bg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white">
      <Stack spacing={6} maxW="600px" mx="auto">
        <Heading size={{ base: "lg", md: "2xl" }}>
          Ready to Shine Brighter?
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }}>
          Explore our exclusive collection of elegant jewellery and discover timeless pieces crafted just for you. Whether it’s a gift or a personal treat, you deserve to sparkle every day.
        </Text>
        <Button as="a" href="/shop" colorScheme="whiteAlpha" bg="white" color="teal.600" _hover={{ bg: "gray.100" }} size="lg" alignSelf="center">
          Shop Now
        </Button>
      </Stack>
    </Box>
  );
}
