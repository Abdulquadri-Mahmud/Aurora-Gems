import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box py={12} px={{ base: 4, md: 16 }}>
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={{md: 8, base: 4}}> 
      {/* Left: Image */}
        <Box flex="1">
          <Image src="/img/img1.jpg" alt="Jewellery Display" borderRadius="md" w="100%" h={{ base: "auto", md: "400px" }} objectFit="cover"/>
        </Box>

        {/* Right: Content */}
        <Box flex="1">
            <Stack spacing={6}>
                <Heading as="h2" size="xl">
                    Discover the Sparkle
                </Heading>
                <Text lineHeight={1.8} color="gray.600" fontSize="md">
                    At SparkleJewels, we believe every piece tells a story.
                    From timeless necklaces to elegant rings, we craft jewellery
                    that celebrates life’s precious moments.
                </Text>

                <Text lineHeight={1.8} color="gray.600" fontSize="md">
                    Our artisans use only the finest materials, ensuring each
                    design is as unique as you are. Visit us and find your next
                    treasure today.
                </Text>

                <Text lineHeight={1.8} color="gray.600" fontSize="md">
                    Whether you’re searching for the perfect gift or a statement
                    piece for yourself, our collection offers something special for
                    everyone. Experience elegance redefined.
                </Text>
            </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
