import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiHome, FiShoppingBag, FiHeart, FiShoppingCart } from "react-icons/fi";
import { GiBigDiamondRing, GiGemNecklace } from "react-icons/gi";

export default function BottomNav() {
  return (
    <Box display={{ md: "none" }} overflow={'hidden'} position="fixed" bottom="0" left="0" right="0" bg="white" borderTop="1px solid" borderColor="gray.200" zIndex="999">
      <Flex justify="space-around" align="center" py={3}>
        <NavItem to="/" icon={<FiHome size={24} />} label="Home" isActive />
        <NavItem to="/shop" icon={<FiShoppingBag size={24} />} label="Shop" />
        <NavItem to="/" icon={<GiGemNecklace size={24} />} label="Necklace" />
        <NavItem to="/" icon={<GiBigDiamondRing size={24} />} label="Ring" />
        <NavItem to="/cart" icon={<FiShoppingCart size={24} />} label="Cart" />
      </Flex>
    </Box>
  );
}

function NavItem({ to, icon, label, isActive }) {
  return (
    <Box as={RouterLink} to={to} textAlign="center" color={isActive ? "gray.200" : "black"} _hover={{ color: "teal.600" }} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
      <Box p={2} rounded="full" bg={isActive ? "teal.600" : ""} display="flex" alignItems="center" justifyContent="center">
        {icon}
      </Box>
      <Text fontSize="12px" mt={1}>
        {label}
      </Text>
    </Box>
  );
}
