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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { Toaster, toaster } from "../../components/ui/toaster"

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate =  useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    const isEmpty = Object.values(formData).some((val) => val.trim() === "");
    if (isEmpty) {
      toaster.create({
        title: "All fields are required.",
        type: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`https://aurora-gems-api.vercel.app/api/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.status === false) {
        toaster.create({
          title: "Sign Up Failed",
          description: data.message || "Failed to create account",
          type: "error",
          duration: 3000,
          isClosable: true,
        });
        // return setError(data.message || "Failed to submit form");
      } else {
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          password: "",
        });
        setError(null);
        // navigate("/verify-email", {
        //   state: { email: formData.email },
        // });
        console.log("Form submitted successfully:", data);
        
      }
      // Navigate to the verification page with email state
    } catch (error) {
      setError("An error occurred while submitting the form.");
      console.error("Form submission error:", error);
      return;
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <Box>
      <Header />

      <Flex py={16} bg="gray.200" align="center" justify="center" px={4}>
        <Box bg="whiteAlpha.900" p={{ base: 6, md: 10 }} rounded="md" border="1px solid" borderColor="gray.300" maxW="lg" w="full">
          <Box textAlign="center" mb={6}>
            <Heading size="lg" color="teal.600">
              Aurora Gems
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Create your account and shine bright ✨
            </Text>
          </Box>

          <form onSubmit={handleSubmit}>
            <Stack spacing={7}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Box>
                  <Box as="label" htmlFor="firstname" fontSize="sm" fontWeight="500" color="gray.700" mb={1} display="block">
                    First Name
                  </Box>
                  <Input id="firstname" name="firstname" placeholder="First Name" border="1px solid" borderColor="gray.300" focusBorderColor="teal.500" onChange={handleChange} value={formData.firstname}/>
                </Box>

                <Box>
                  <Box as="label" htmlFor="lastname" fontSize="sm" fontWeight="500" color="gray.700" mb={1} display="block">
                    Last Name
                  </Box>
                  <Input id="lastname" name="lastname" placeholder="Last Name" border="1px solid" borderColor="gray.300" focusBorderColor="teal.500" onChange={handleChange} value={formData.lastname}/>
                </Box>
              </SimpleGrid>

              <Box>
                <Box as="label" htmlFor="email" fontSize="sm" fontWeight="500" color="gray.700" mb={1} display="block">
                  Email Address
                </Box>
                <Input id="email" name="email" type="email" placeholder="Enter your email" border="1px solid" borderColor="gray.300" focusBorderColor="teal.500" onChange={handleChange} value={formData.email}/>
              </Box>

              <Box>
                <Box as="label" htmlFor="phone" fontSize="sm" fontWeight="500" color="gray.700" mb={1} display="block">
                  Phone Number
                </Box>
                <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" border="1px solid" borderColor="gray.300" focusBorderColor="teal.500" onChange={handleChange} value={formData.phone}/>
              </Box>

              <Box>
                <Box as="label" htmlFor="password" fontSize="sm" fontWeight="500" color="gray.700" mb={1} display="block">
                  Password
                </Box>
                <Box position="relative">
                  <Input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Create a password" border="1px solid" borderColor="gray.300" focusBorderColor="teal.500" pr="40px" onChange={handleChange} value={formData.password}/>
                  <IconButton aria-label={showPassword ? "Hide password" : "Show password"} icon={showPassword ? <FiEyeOff /> : <FiEye />} size="sm" variant="ghost" position="absolute" top="50%" right="10px" transform="translateY(-50%)" onClick={handleTogglePassword}/>
                </Box>
              </Box>

              <Button type="submit" mt={3} w="full" color="white" bg="teal" size="lg" fontWeight="500" isLoading={loading}>
                {
                  loading ? "Creating Account..." : "Create Account"
                }
              </Button>
            </Stack>
          </form>

          <Text mt={6} textAlign="center" fontSize="sm">
            Already have an account?{" "}
            <Link as={RouterLink} to="/signin" color="teal.600" fontWeight="500">
              Sign in here
            </Link>
          </Text>
        </Box>
      </Flex>
      <Toaster />
      <Footer />
    </Box>
  );
}
