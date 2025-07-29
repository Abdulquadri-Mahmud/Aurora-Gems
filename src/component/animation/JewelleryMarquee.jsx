import React from "react";
import Marquee from "react-fast-marquee";
import { Box, Text } from "@chakra-ui/react";

const JewelleryMarquee = ({ bgColor = "gray.900", textColor = "white" }) => {
  return (
    <Box bg={bgColor} py={3} color={textColor}>
      <Marquee gradient={true} speed={80} direction="left" gradientWidth={100} pauseOnHover={true}>
        <Text mx={8} fontSize="lg" fontWeight="bold">
          ✨ Welcome to SparkleJewels — Your trusted jewellery store for rings,
          necklaces, bracelets & more! 💍 | Free Shipping on orders over $100! |
          Shop Premium Quality, Shop with Confidence. ✨
        </Text>
      </Marquee>
    </Box>
  );
};

export default JewelleryMarquee;
