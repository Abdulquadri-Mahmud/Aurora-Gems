import React from "react";
import {
  Drawer,
  Portal,
  Box,
  Text,
  Stack,
  Heading,
  Button,
  CloseButton,
  Flex,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import WishlistDrawer from "../component/wishlists/WishlistDrawer";
import { MdMenuOpen } from "react-icons/md";
import ContactDialog from "../component/ContactUs";

export default function Sidebar() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Earings", path: "/shop" },
        { name: "Necklace", path: "/shop" },
        { name: "Rings", path: "/shop" },
        { name: "Bracelets", path: "/shop" },
        { name: "Gifts", path: "/shop" },
        // { name: "contact", path: "/contact" },
    ];
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
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Box bg="teal.600" p={1} fontSize={'x-large'} rounded={'full'} zIndex="overlay">
          <MdMenuOpen/>
        </Box>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content maxW={{md:"30%", base: '90%'}} h="100vh" bg="white" placement="left" borderRight="1px solid" borderColor="gray.200">
            <Drawer.Header>
              <Drawer.Title>
                <Box width="180px" bgImage={`url('/img/img.jpg')`} bgBlendMode="multiply" bgRepeat="no-repeat" bgSize="cover" bgPos={{ md: "left", base: "center" }} px={3} py={2} rounded="md" fontSize="2xl" fontWeight="bold" color="white">
                    <Text as={RouterLink} to="/">
                        Aurora Gems
                    </Text>
                </Box>
              </Drawer.Title>

              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" bg="red.600" color="white" mt={3} position="absolute" top="4" right="4" />
              </Drawer.CloseTrigger>
            </Drawer.Header>

            <Drawer.Body>
              <Stack spacing={6} mt={8} color={'black'}>

                {navLinks.map((link) => {
                    const isActive = currentCategory === link.name || (link.name === "Home" && location.pathname === "/");
                    return (
                    <Button _hover={{color: 'teal.600', bg: 'gray.200'}} borderColor="gray.300" borderWidth="1px" bg={'gray.100'} py={5} textAlign={'start'} display={'flex'} justifyContent={'start'}
                    fontSize={'md'}
                        key={link.name}
                        cursor="pointer"
                        color={isActive ? "teal.600" : "black"}
                        fontWeight={isActive ? "bold" : "medium"}
                        onClick={() => handleNavClick(link)}
                    >
                        {link.name}
                    </Button>
                    );
                })}

                <ContactDialog/>

                {/* Wishlists */}
                <WishlistDrawer />
              </Stack>
            </Drawer.Body>

            <Drawer.Footer>
              <Text fontSize="sm" color="gray.500" mt={4}>
                &copy; 2025 Aurora Gems
              </Text>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
