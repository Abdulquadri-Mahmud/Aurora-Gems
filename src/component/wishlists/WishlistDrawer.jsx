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
import { FaHeart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function WishlistDrawer() {
  // 📝 Mock wishlist items — replace with context later
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Diamond Earrings",
    },
    {
      id: 2,
      name: "Gold Pendant",
    },
    {
      id: 3,
      name: "Silver Bracelet",
    },
  ]);

  const wishlistCount = wishlistItems.length;

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Flex position="relative" zIndex={1} fontWeight={'600'} color={'teal.600'} cursor={'pointer'} justifyContent={'space-between'} alignItems={'center'} bg={'gray.200'} _hover={{color: 'teal.800', bg: 'gray.300'}} rounded={'md'}>
            <Text display={'flex'} alignItems={'center'} gap={2} py={3} px={3} fontSize="md" >
              <FaHeart /> My Wishlist
            </Text>
            <Text bg="teal.500" color="white" px={4} py={'3'} roundedRight={'md'} fontSize="lg" minW="20px" textAlign="center">
                {wishlistCount}
            </Text>
        </Flex>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content maxW="400px" bg="white">
            <Drawer.Header>
              <Drawer.Title>
                <Box width="180px" bgImage={`url('/img/img.jpg')`} bgBlendMode="multiply" bgRepeat="no-repeat" bgSize="cover" bgPos={{ md: "left", base: "center" }} px={3} py={2} rounded="md" fontSize="2xl" fontWeight="bold" color="white">
                  <Text as={RouterLink} to="/">
                    Aurora Gems
                  </Text>
                </Box>
              </Drawer.Title>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" position="absolute" top="4" right="4" />
              </Drawer.CloseTrigger>
            </Drawer.Header>

            <Drawer.Body>
              {wishlistItems.length > 0 ? (
                <Stack spacing={4}>
                  {wishlistItems.map((item) => (
                    <Box key={item.id} bg="gray.100" borderColor="gray.300" borderWidth="1px" borderRadius="md" p={4}>
                      <Heading size="sm">{item.name}</Heading>
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Text>Your wishlist is empty.</Text>
              )}
            </Drawer.Body>

            <Drawer.Footer display="flex" justifyContent="space-between">
              <Drawer.CloseTrigger asChild>
                <Button bg="red.600" color="white" mt={3}>
                  Close
                </Button>
              </Drawer.CloseTrigger>
              {/* {wishlistItems.length > 0 && (
                <Button as={RouterLink} to="/wishlist" bg="red.500" color="white" mt={3}>
                  Go to Wishlist
                </Button>
              )} */}
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
