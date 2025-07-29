import React from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  Input,
  HStack,
  // Avatar,
  useDisclosure,
  Heading,
  Drawer,
  RadioGroup,
  Flex,
} from "@chakra-ui/react";
import { FaOpencart, FaTruck } from "react-icons/fa";

export default function Checkout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cartItems = [
    { id: 1, name: "Necklace", price: 95, qty: 1 },
    { id: 1, name: "Necklace", price: 95, qty: 1 },
    { id: 2, name: "Diamond Ring", price: 120, qty: 2 },
  ];

  const cartTotal = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <Drawer.Root isOpen={isOpen} onClose={onClose}>
      <Drawer.Trigger asChild>
        <Flex>
          <Button bg={'teal.600'} color={'white'} px={6} onClick={onOpen}>Checkout Now</Button>
        </Flex>
      </Drawer.Trigger>

      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content maxW={{md:"30%", base: '90%'}} h="100vh" bg="white" placement="left">
          <Drawer.Header borderBottomWidth="1px" borderColor={'gray.200'}>
            <HStack spacing={3} color={'teal.600'} fontSize={'xl'} fontWeight={'600'}>
              <FaTruck />
              <Text>Checkout</Text>
            </HStack>
          </Drawer.Header>

          <Drawer.Body>
            <Stack spacing={6}>
              {/* Customer Info */}
              <Box>
                <Heading fontSize="md" mb={2}>🧍 Your Info</Heading>
                <Stack spacing={3}>
                  {/* <Avatar name="Adeyemi Abdulquadri" size="sm" /> */}
                  <Input border='1px solid' borderColor='gray.200' placeholder="Email" />
                  <Input border='1px solid' borderColor='gray.200' placeholder="Phone" />
                  <Input border='1px solid' borderColor='gray.200' placeholder="Delivery Address" />
                </Stack>
              </Box>

              {/* Cart Items */}
              <Box>
                <Heading color={'teal.600'} fontSize="md" mb={2} display={'flex'} alignItems={'center'}><FaOpencart /> Items</Heading>
                <Stack spacing={3}>
                  {cartItems.map((item) => (
                    <Box key={item.id} p={3} border='1px solid' borderColor='gray.200' color='gray.800' borderRadius="md">
                      <Text fontWeight="medium">{item.name}</Text>
                      <Text fontSize="sm">Qty: {item.qty} — ₦{item.qty * item.price}</Text>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Payment Methods using RadioGroup.Root */}
              <Box>
                <Heading fontSize="md" mb={2}>💳 Payment Method</Heading>
                <RadioGroup.Root defaultValue="card" name="paymentMethod" size="md">
                  <Stack spacing={3}>
                    <RadioGroup.Item value="card">
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>💳 Card Payment</RadioGroup.ItemText>
                    </RadioGroup.Item>

                    <RadioGroup.Item value="transfer">
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>🏦 Bank Transfer</RadioGroup.ItemText>
                    </RadioGroup.Item>

                    <RadioGroup.Item value="cod">
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>💵 Cash on Delivery</RadioGroup.ItemText>
                    </RadioGroup.Item>
                  </Stack>
                </RadioGroup.Root>
              </Box>
            </Stack>
          </Drawer.Body>

          <Drawer.Footer borderTopWidth="1px" flexDir="column" alignItems="stretch">
            <HStack justify="space-between" w="full" mb={3}>
              <Text fontWeight="semibold">Total</Text>
              <Text color="teal.600" fontWeight="bold">₦{cartTotal}</Text>
            </HStack>
            <Button bg="teal.600" color={'white'} w="full" onClick={onClose}>
              Complete Order
            </Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}
