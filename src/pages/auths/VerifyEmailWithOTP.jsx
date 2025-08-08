import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Toaster, toaster } from "../../components/ui/toaster"
import { useNavigate, useLocation } from "react-router-dom";
import { PinInput } from "@chakra-ui/react";

const VerifyAccount = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const handleVerify = async () => {
    if (!otp || otp.length !== 4) {
      toaster.create({
        title: "Invalid OTP",
        description: "Please enter the full 4-digit OTP.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://aurora-gems-api.vercel.app/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        }
      );

      const data = await response.json();

      if (!response.ok || data.status === false) {
        toaster.create({
          title: "Verification Failed",
          description: data.message || "Invalid OTP or expired.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      toaster.create({
        title: "Account Verified",
        description: "Your account has been successfully verified!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/signin"); // or wherever your login page is
    } catch (err) {
      toaster.create({
        title: "Error",
        description: "Something went wrong. Try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50" px={4}>
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        shadow="md"
        maxW="sm"
        w="full"
        border="1px solid"
        borderColor="gray.200"
      >
        <Heading size="md" mb={4} color="teal.600">
          Verify Your Account
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={6}>
          Enter the 4-digit code sent to <strong>{email}</strong>
        </Text>

        <PinInput.Root
          onValueChange={setOtp}
          otp
          manageFocus
          placeholder="-"
          mask={false}
        >
          <PinInput.HiddenInput />
          <Flex justify="center" gap={3} mb={6}>
            <PinInput.Control>
              <PinInput.Input index={0} />
              <PinInput.Input index={1} />
              <PinInput.Input index={2} />
              <PinInput.Input index={3} />
            </PinInput.Control>
          </Flex>
        </PinInput.Root>

        <Button
          colorScheme="teal"
          w="full"
          onClick={handleVerify}
          isLoading={loading}
          loadingText="Verifying..."
        >
          Verify
        </Button>
      </Box>
      <Toaster />
    </Flex>
  );
};

export default VerifyAccount;
