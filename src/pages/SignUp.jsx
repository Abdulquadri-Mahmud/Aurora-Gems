import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Stack,
  Link,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <Box>
      <Header />

      <Flex py={20} bg="gray.200" align="center" justify="center" px={4}>
        <Box bg="whiteAlpha.900" p={{ base: 6, md: 10 }} rounded="md" border="1px solid" borderColor="gray.300" maxW="lg" w="full">
          <Box textAlign="center" mb={8}>
            <Heading size="lg" color="teal.600">
              Aurora Gems
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Create your account and shine bright ✨
            </Text>
          </Box>

          <form>
            <Stack spacing={5}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Box>
                  <Box as="label" htmlFor="firstName" display="block" mb={1} fontSize="sm" fontWeight="bold" color="gray.700">
                    First Name
                  </Box>
                  <Input border="1px solid" borderColor="gray.300" id="firstName" name="firstName" placeholder="First Name" focusBorderColor="teal.500"/>
                </Box>

                <Box>
                  <Box as="label" htmlFor="lastName" display="block" mb={1} fontSize="sm" fontWeight="bold" color="gray.700"> 
                    Last Name
                  </Box>
                  <Input border="1px solid" borderColor="gray.300" id="lastName" name="lastName" placeholder="Last Name" focusBorderColor="teal.500"/>
                </Box>
              </SimpleGrid>

              <Box>
                <Box as="label" htmlFor="email" display="block" mb={1} fontSize="sm" fontWeight="bold" color="gray.700">
                    Email Address
                </Box>
                <Input border="1px solid" borderColor="gray.300" id="email" name="email" type="email" placeholder="Enter your email" focusBorderColor="teal.500"/>
              </Box>

              <Box>
                <Box as="label" htmlFor="phone" display="block" mb={1} fontSize="sm" fontWeight="bold" color="gray.700">
                     Phone Number
                </Box>
                <Input border="1px solid" borderColor="gray.300" id="phone" name="phone" type="tel" placeholder="Enter your phone number" focusBorderColor="teal.500"/>
              </Box>

              <Box>
                <Box as="label" htmlFor="password" display="block" mb={1} fontSize="sm" fontWeight="bold" color="gray.700"> 
                    Password
                </Box>
                <Box position="relative">
                  <Input border="1px solid" borderColor="gray.300" id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Create a password" focusBorderColor="teal.500" pr="40px"/>
                  <IconButton aria-label={   showPassword ? "Hide password" : "Show password" } icon={showPassword ? <FiEyeOff /> : <FiEye />} size="sm" variant="ghost" position="absolute" top="50%" right="10px" transform="translateY(-50%)" onClick={handleTogglePassword}/>
                </Box>
              </Box>

              <Button type="submit" w="full" color="white" bg="teal" size="lg" fontWeight="bold">
                Sign Up
              </Button>
            </Stack>
          </form>

          <Text mt={6} textAlign="center" fontSize="sm">
            Already have an account?{" "}
            <Link as={RouterLink} to="/signin" color="teal.600" fontWeight="bold">
              Sign in here
            </Link>
          </Text>
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
}
