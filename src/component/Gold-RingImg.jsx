import { Box, Heading, Text, Stack, Button } from "@chakra-ui/react";
import React from "react";

export default function GoldRingImg() {
  return (
    <Box
      w="100%"
      h={{ base: "300px", md: "400px" }}
      backgroundImage="url('/img/img3.jpg')"
      backgroundPosition="top"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      bgBlendMode={'multiply'}
      className="bg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white"
    >
      <Stack spacing={6} px={4}>
        <Heading size={{ base: "lg", md: "2xl" }}>
          Unleash Your Inner Sparkle
        </Heading>

        <Text fontSize={{ base: "sm", md: "md" }} maxW="700px" mx="auto">
          Discover the timeless elegance of gold rings and fine jewellery.
          Each piece is crafted to perfection, designed to celebrate your
          unique story and add a touch of luxury to everyday life.
          Cherish every moment, express your style, and create lasting memories
          with jewellery that shines as bright as you do.
        </Text>

        <Button as="a" href="/contact" colorScheme="teal" size="md" alignSelf="center">
          Contact Us Now
        </Button>
      </Stack>
    </Box>
  );
}
