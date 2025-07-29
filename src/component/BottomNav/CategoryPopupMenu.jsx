import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { Box, Button, VStack } from "@chakra-ui/react";

const MotionBox = motion(Box); // ✅ Create motion-enabled Box

const categories = [
  { name: "Earings", path: "/shop" },
  { name: "Necklace", path: "/shop" },
  { name: "Rings", path: "/shop" },
  { name: "Bracelets", path: "/shop" },
  { name: "Gifts", path: "/shop" },
];

const CategoryPopupMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef();

  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleClick = (item) => {
    window.location.href = `${item.path}?category=${item.name}`;
    setIsOpen(false);
  };

  return (
    <Box mt={20} display="flex" justifyContent="center">
      <Box position="relative" zIndex={1000}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          bg="teal.500"
          color="white"
          rounded="full"
          px={6}
          py={5}
          _hover={{ bg: "teal.600" }}
          shadow="lg"
        >
          <FiShoppingBag size={24} />
        </Button>

        <AnimatePresence>
          {isOpen && (
            <MotionBox
              ref={popupRef}
              position="absolute"
              bottom="60px"
              left="50%"
              transform="translateX(-50%)"
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              rounded="xl"
              shadow="xl"
              p={4}
              zIndex={2000} // ✅ Ensure this is above everything
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <VStack spacing={3} align="stretch">
                {categories.map((item) => (
                  <Box
                    key={item.name}
                    fontWeight="medium"
                    cursor="pointer"
                    _hover={{
                      color: "teal.500",
                      transform: "translateX(4px)",
                    }}
                    transition="all 0.2s ease"
                    onClick={() => handleClick(item)}
                  >
                    {item.name}
                  </Box>
                ))}
              </VStack>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default CategoryPopupMenu;
