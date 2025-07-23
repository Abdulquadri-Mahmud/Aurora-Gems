// components/Header.jsx
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
  Spacer,
  Badge,
  Link,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import AddToCartDrawer from "../component/carts/AddToCartDrawer";
import WishlistDrawer from "../component/wishlists/WishlistDrawer";

    const navLinks = [
      { name: "Home", path: "/" },
      { name: "Earings", path: "/shop" },
      { name: "Necklace", path: "/about" },
      { name: "Rings", path: "/contact" },
      { name: "Bracelets", path: "/contact" },
      { name: "Gifts", path: "/contact" },
    ];

export default function Header({ cartCount = 0, wishlistCount = 0 }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={{md:"whiteAlpha.600", base: 'whiteAlpha.600'}} position="sticky" top="0" zIndex="50">
      <Flex position={'relative'} justifyContent={'space-between'} alignItems={'center'} px={4} py={3} align="center" maxW={{ base: '100%', xl: '90%', '2xl': '80%' }} mx="auto">
        {/* Logo Section */}
        <Box bgImage={`url('/img/img.jpg')`} bgBlendMode={'multiply'} bgRepeat="no-repeat" bgSize="cover" bgPos={{md:"left", base: 'center'}} px={3} py={1} rounded={'md'} as={RouterLink} to="/" fontSize="2xl" fontWeight="bold" color="white" className="bg">
          <Text>Aurora Gems</Text>
        </Box>

        <Box display={{ base: "none", md: "block" }} maxWidth={'100%'} mx={'auto'} py={3} px={5} roundedBottom={'xl'} bg={'whiteAlpha.600'} pos={'absolute'} bottom={'-10'} transform={'translateX(-50%)'} left={'50%'}>
          <HStack display={{ base: "none", md: "flex" }} gap={7} fontWeight="medium">
            {navLinks.map((link) => (
              <Link as={RouterLink} to={link.path} key={link.name}  color={'black'} _hover={{ textDecoration: "none", color: "teal.600" }}>
                  {link.name}
              </Link>
            ))}
          </HStack>
        </Box>

        {/* <Spacer /> */}

        {/* Icons */}
        <Flex spaceX={4} color={'black'}>
           <AddToCartDrawer/>
           <WishlistDrawer/>
            <Flex as={RouterLink} to="/signin" color={'blue.600'} cursor={'pointer'} justifyContent={'center'} alignItems={'center'} bg={'gray.200'} p={2} rounded={'full'}>
                <FaUser />
            </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
