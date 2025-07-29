import {
  Box,
  Flex,
  HStack,
  Text,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import AddToCartDrawer from "../component/carts/AddToCartDrawer";
import WishlistDrawer from "../component/wishlists/WishlistDrawer";
import Sidebar from "./Sidebar";
import ContactDialog from "../component/ContactUs";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Earings", path: "/shop" },
  { name: "Necklace", path: "/shop" },
  { name: "Rings", path: "/shop" },
  { name: "Bracelets", path: "/shop" },
  { name: "Gifts", path: "/shop" },
];

export default function Header({ cartCount = 0, wishlistCount = 0 }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const currentCategory = query.get("category");

  const handleNavClick = (item) => {
    if (item.name === "Home") {
      navigate(item.path);
    } else {
      navigate(`${item.path}?category=${item.name}`);
    }
  };

  return (
    <Box bg={"white"} position="sticky" top="0" zIndex="50">
      <Flex position={"relative"} justifyContent={"space-between"} alignItems={"center"} px={4} py={3} maxW={{ base: "100%", xl: "90%", "2xl": "80%" }} mx="auto">
        {/* Logo Section */}
        <Box width={{md:"180px", base: '160px'}} bgImage={`url('/img/img.jpg')`} bgBlendMode={"multiply"} bgRepeat="no-repeat" bgSize="cover" bgPos={{ md: "left", base: "center" }} px={{md:3, base: 1}} py={1} rounded={"md"} as={RouterLink} to="/" fontSize="2xl" fontWeight="bold" color="white">
          <Text>Aurora Gems</Text>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <Flex alignItems={'center'} gap={8} >
            {navLinks.map((link) => {
              const isActive = currentCategory === link.name || (link.name === "Home" && location.pathname === "/");
              return (
                <Text
                  key={link.name}
                  cursor="pointer"
                  color={isActive ? "teal.600" : "black"}
                  fontWeight={isActive ? "bold" : "medium"}
                  _hover={{ color: "blackAlpha.600" }}
                  onClick={() => handleNavClick(link)}
                >
                  {link.name}
                </Text>
              );
            })}
            <ContactDialog/>
          </Flex>
        </Box>
        {/* Right Icons */}
        <Flex color={"white"} gap={3} alignItems={'center'}>
          
          <AddToCartDrawer />
          <Flex as={RouterLink} to="/signin" color={"blue.600"} cursor={"pointer"} justifyContent={"center"} alignItems={"center"} bg={"gray.200"} p={2} rounded={"full"}>
            <FaUser />
          </Flex>

          <Box display={{md: 'non', base: 'block'}}>
            <Sidebar />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
