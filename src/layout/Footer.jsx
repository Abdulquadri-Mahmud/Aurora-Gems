import React from "react";
import {
  Box,
  Text,
  Link,
  SimpleGrid,
  Stack,
//   Divider,
  Icon,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.900" color="gray.200" pt={10} pb={20} px={{ base: 4, md: 12 }}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
        {/* Brand Info */}
        <Stack spacing={4}>
          <Text fontSize="xl" fontWeight="bold">
            SparkleJewels
          </Text>
          <Text fontSize="sm" color="gray.400">
            Premium jewellery pieces for every occasion. Crafted with love, delivered with care.
          </Text>
        </Stack>

        {/* Quick Links */}
        <Stack spacing={2}>
          <Text fontWeight="bold" mb={2}>
            Quick Links
          </Text>
          <Link href="#">Home</Link>
          <Link href="#">Shop</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </Stack>

        {/* Customer Service */}
        <Stack spacing={2}>
          <Text fontWeight="bold" mb={2}>
            Customer Service
          </Text>
          <Link href="#">FAQs</Link>
          <Link href="#">Shipping & Returns</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms & Conditions</Link>
        </Stack>

        {/* Follow Us */}
        <Stack spacing={2}>
          <Text fontWeight="bold" mb={2}>
            Follow Us
          </Text>
          <Stack direction="row" spacing={4}>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} boxSize={5} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaFacebook} boxSize={5} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} boxSize={5} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTiktok} boxSize={5} />
            </Link>
          </Stack>
        </Stack>
      </SimpleGrid>

      {/* <Divider my={8} borderColor="gray.600" /> */}

      <Text fontSize="sm" color="gray.500" textAlign="center" pt={5}>
        © {new Date().getFullYear()} SparkleJewels. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
