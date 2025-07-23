import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const categories = [
  { id: 2, name: 'Earrings', image: '/img/earring.jpg' },
  { id: 3, name: 'Necklace', image: '/img/necklace.jpg' },
  { id: 4, name: 'Rings', image: '/img/ring.jpg' },
  { id: 5, name: 'Bracelets', image: '/img/bracelet.jpeg' },
  { id: 6, name: 'Gifts', image: '/img/gift.jpg' },
  { id: 6, name: 'Anklets', image: '/img/anklets.webp' },
];

export default function JewelryGroup() {
  return (
    <Box py={10} px={4}>
      <SimpleGrid columns={{ base: 3, sm: 3, md: 4, xl: 6 }} gap={1}>
        {categories.map((item) => (
          <Box border={'2px solid'} borderColor={'gray.100'} key={item.id} bgImage={`url(${item.image})`} bgSize="cover" bgPosition="left" bgRepeat="no-repeat" height={{md:"300px", base:'200px'}} borderRadius="lg" position="relative" overflow="hidden" display="flex" alignItems="flex-end" _hover={{ transform: 'scale(1.02)', transition: '0.3s ease-in-out' }} className="bg">
            <Box w="100%" py={3} bg="rgba(0, 0, 0, 0.5)" textAlign="center">
              <Text color="white" fontWeight="bold" fontSize="lg">
                {item.name}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
