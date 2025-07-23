import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";

const JewelleryImportanceSection = () => {
  return (
    <Box py={16} px={{ base: 4, md: 16 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{md: 8, base: 4}} alignItems="center">
        {/* Left: Image */}
        <Image src="/img/img2.jpg" alt="Beautiful jewellery display" borderRadius="md" objectFit="cover" w="100%" h={{ base: "250px", md: "400px" }} fallbackSrc="https://via.placeholder.com/600x400?text=Jewellery"/>

        {/* Right: Heading + Content */}
        <Stack spacing={8}>
          <Heading size="xl">
            The Timeless Beauty of Jewellery
          </Heading>
          <Text fontSize="md" color="gray.600" lineHeight="tall">
            Jewellery has always been more than just an accessory — it’s a symbol
            of love, culture, heritage, and personal style. From sparkling rings
            to elegant necklaces, these precious pieces carry deep sentimental
            value and are passed down through generations.
          </Text>
          <Text fontSize="md" color="gray.600" lineHeight="tall">
            Wearing jewellery enhances your confidence and allows you to express
            your unique personality. Whether it’s a simple bracelet or a luxurious
            diamond pendant, each piece tells a story and makes every moment
            unforgettable.
          </Text>
          <Text fontSize="md" color="gray.600" lineHeight="tall">
            At SparkleJewels, we believe everyone deserves to shine — explore our
            carefully crafted collections and celebrate life’s special moments
            with jewellery that lasts forever.
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default JewelleryImportanceSection;
