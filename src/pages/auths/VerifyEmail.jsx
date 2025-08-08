import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Toaster, toaster } from "../../components/ui/toaster";
import { PinInput } from "@chakra-ui/react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleVerify = async () => {
    if (!otp || otp.length !== 6) {
      toaster.create({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP.",
        type: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://aurora-gems-api.vercel.app/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok || data.status === false) {
        toaster.create({
          title: "Verification Failed",
          description: data.message || "OTP verification failed",
          type: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      toaster.create({
        title: "Verified Successfully!",
        description: "You can now log in to your account.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/signin");
    } catch (error) {
      toaster.create({
        title: "Error",
        description: "Something went wrong. Try again later.",
        type: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) return;

    try {
      setResending(true);
      const res = await fetch("https://aurora-gems-api.vercel.app/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || data.status === false) {
        toaster.create({
          title: "Resend Failed",
          description: data.message || "Could not resend OTP.",
          type: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      toaster.create({
        title: "OTP Resent",
        description: "Check your email for a new OTP.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toaster.create({
        title: "Error",
        description: "Something went wrong while resending.",
        type: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setResending(false);
    }
  };

  return (
    <Box>
      <Header />
      <Flex py={16} align="center" justify="center" bg="gray.200" px={4}>
        <Box bg="white" p={{ md: 8, base: 3 }} rounded="md" w="full" maxW="sm" border="1px solid" borderColor="gray.300">
          <Heading size="2xl" textAlign={'center'} mb={2} color="teal.600">
            Email Verification
          </Heading>
          <Text textAlign={'center'} fontSize="sm" color="gray.600" mb={6}>
            Enter the 6-digit OTP sent to your email:{" "}
            <strong>{email || "example@example.com"}</strong>
          </Text>

          {/* OTP PIN INPUT */}
          <PinInput.Root otp manageFocus placeholder="-" onValueChange={setOtp}>
            <PinInput.HiddenInput />
            <Flex justify="center" gap={3} mb={6}>
              <PinInput.Control>
                <PinInput.Input index={0} border={'1px solid'} color={'black'} borderColor={'teal.500'} />
                <PinInput.Input index={1} border={'1px solid'} color={'black'} borderColor={'teal.500'} />
                <PinInput.Input index={2} border={'1px solid'} color={'black'} borderColor={'teal.500'} />
                <PinInput.Input index={3} border={'1px solid'} color={'black'} borderColor={'teal.500'} />
                <PinInput.Input index={4} border={'1px solid'} color={'black'} borderColor={'teal.500'} />
                <PinInput.Input index={5} border={'1px solid'} color={'black'} borderColor={'teal.500'} />
              </PinInput.Control>
            </Flex>
          </PinInput.Root>

          <Stack spacing={4}>
            <Button bg="teal.600" color="white" mt={4} onClick={handleVerify} isLoading={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </Button>

            <Button variant="link" color="teal.600" onClick={handleResend} isDisabled={resending}>
              {resending ? "Resending..." : "Didn't receive OTP? Resend"}
            </Button>
          </Stack>
        </Box>
      </Flex>
      <Toaster />
      <Footer />
    </Box>
  );
};

export default VerifyEmail;
