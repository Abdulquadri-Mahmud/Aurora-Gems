import React, { useState } from "react";
import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Box,
  Text,
  Stack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function AddToCartDrawer() {
  // Mock cart items — replace with context or props later
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gold Ring",
      qty: 1,
      price: 150,
    },
    {
      id: 2,
      name: "Silver Necklace",
      qty: 2,
      price: 300,
    },
  ]);

  // Calculate cart count & total
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Flex cursor="pointer" color={'teal.600'} position="relative" zIndex={1} justifyContent="center" alignItems="center" bg="gray.200" p={2} rounded="full">
          <FaShoppingCart />
          <Text pos="absolute"  top={-2} right={-2} bg="teal.500" color="white" px={2} fontSize="xs" rounded="full" minW="20px" textAlign="center">
            {cartCount}
          </Text>
        </Flex>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content maxW="400px" bg="white">
            <Drawer.Header>
              <Drawer.Title>
                {/* Logo Section */}
                <Box width="180px" bgImage={`url('/img/img.jpg')`} bgBlendMode="multiply" bgRepeat="no-repeat" bgSize="cover" bgPos={{ md: "left", base: "center" }} px={3} py={2} rounded="md" fontSize="2xl" fontWeight="bold" color="white" className="bg">
                  <Text as={RouterLink} to="/">
                    Aurora Gems
                  </Text>
                </Box>
              </Drawer.Title>
              <Drawer.CloseTrigger asChild >
                <CloseButton size="sm" position="absolute" top="4" right="4" />
              </Drawer.CloseTrigger>
            </Drawer.Header>

            <Drawer.Body>
              {cartItems.length > 0 ? (
                <Stack spacing={4}>
                  {cartItems.map((item) => (
                    <Box key={item.id} bg={'gray.200'} borderColor={'gray.300'} borderWidth="1px" borderRadius="md" p={4}>
                      <Heading size="sm">{item.name}</Heading>
                      <Text fontSize="sm">Qty: {item.qty}</Text>
                      <Text fontWeight="bold">
                        ${item.price * item.qty}
                      </Text>
                    </Box>
                  ))}

                  <Box  borderTopWidth="1px" mt={8} borderColor={'gray.300'}  pt={4}  textAlign="right"  fontWeight="bold">
                    Total: ${cartTotal}
                  </Box>
                </Stack>
              ) : (
                <Text>Your cart is empty.</Text>
              )}
            </Drawer.Body>

            <Drawer.Footer display="flex" justifyContent="space-between">
              <Drawer.CloseTrigger asChild>
                <Button bg="red.600" color={'white'} mt={3}>Close</Button>
              </Drawer.CloseTrigger>
              {cartItems.length > 0 && (
                <Button bg="teal" color={'white'}>Checkout</Button>
              )}
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
