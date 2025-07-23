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
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <Box>
        <Header/>
        <Flex py={20} bg={'gray.200'} align="center" justify="center" px={4}>
            <Box bg="whiteAlpha.900" p={{ base: 6, md: 10 }} rounded="md" border={'1px solid'} borderColor={'gray.300'} maxW="md" w="full">
                <Box textAlign="center" mb={8}>
                    <Heading size="lg" color="teal.600">
                        Aurora Gems
                    </Heading>
                    <Text color="gray.600" fontSize="sm">
                        Sign in to your account and sparkle today ✨
                    </Text>
                </Box>

                <form>
                    <Stack spacing={5}>
                        <Box>
                            <Box as="label" htmlFor="email" display="block" mb={1} fontSize="sm" fontWeight="bold" color="gray.700">
                                Email Address
                            </Box>
                            <Input border={'1px solid'} borderColor={'gray.300'} id="email" name="email" type="email" placeholder="Enter your email" focusBorderColor="teal.500"/>
                        </Box>

                        <Box mt={2}>
                            <Box as="label" htmlFor="password" display="block" mb={1} fontSize="sm" fontWeight="bold" color="gray.700">
                                Password
                            </Box>
                            <Box position="relative">
                                <InputGroup>
                                    <Input border={'1px solid'} borderColor={'gray.300'} id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" focusBorderColor="teal.500" pr="40px"/>
                                </InputGroup>
                                <IconButton aria-label={showPassword ? "Hide password" : "Show password"} icon={showPassword ? <FiEyeOff /> : <FiEye />} size="sm" variant="ghost" position="absolute" top="50%" right="10px" transform="translateY(-50%)" onClick={handleTogglePassword} />
                            </Box>
                        </Box>

                        <Button type="submit" w="full" color={'white'} bg="teal" size="lg" fontWeight="bold" >
                            Sign In
                        </Button>
                    </Stack>
                </form>

                <Text mt={6} textAlign="center" fontSize="sm">
                    New here?{" "}
                    <Link as={RouterLink} to="/signup" color="teal.600" fontWeight="bold">
                        Create an account
                    </Link>
                </Text>
            </Box>
        </Flex>
        <Footer/>
    </Box>
  );
}
