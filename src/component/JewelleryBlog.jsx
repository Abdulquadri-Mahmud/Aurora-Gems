import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";


// Example blog data (with image placeholders)
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Engagement Ring",
    excerpt:
      "Learn the essential tips for selecting a stunning engagement ring that suits your partner’s style and your budget.",
    image: "/img/blog/img.png",
  },
  {
    id: 2,
    title: "The Timeless Appeal of Gold Jewellery",
    excerpt:
      "Gold has been treasured for centuries. Discover why it remains a symbol of luxury and status today.",
    image: "/img/blog/img1.jpg",
  },
  {
    id: 3,
    title: "Caring for Your Precious Stones",
    excerpt:
      "Keep your gemstones sparkling for years. Here’s how to clean, store, and protect your valuable pieces.",
    image: "/img/blog/img3.jpeg",
  },
  {
    id: 4,
    title: "Trendy Necklace Styles for Every Season",
    excerpt:
      "From chokers to layered chains, explore the latest necklace trends and how to style them.",
    image: "/img/blog/img.png",
  },
//   {
//     id: 5,
//     title: "Birthstones and Their Meanings",
//     excerpt:
//       "Uncover the history and symbolism behind birthstones — perfect for gifting and personalizing your jewellery.",
//     image: "/img/blog/birthstones.jpg",
//   },
//   {
//     id: 6,
//     title: "Jewellery for Special Occasions",
//     excerpt:
//       "Whether it’s a wedding, anniversary, or milestone celebration, find the perfect piece for every event.",
//     image: "/img/blog/special-occasions.jpg",
//   },
];

export default function JewelleryBlog() {
  return (
    <Box py={16} px={{ base: 4, md: 12 }} bg={'gray.100'}>
      <Heading mb={8} textAlign="center">
        Latest from Our Jewellery Blog
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={3}>
        {blogPosts.map((post) => (
          <Box key={post.id} borderWidth="1px" borderColor={'gray.200'} borderRadius="md" overflow="hidden" bg={'white'} p={0}>
            <Image src={post.image} alt={post.title} w="100%" h="200px" objectFit="" fallbackSrc="https://via.placeholder.com/600x400?text=Jewellery+Blog"/>

            <Stack spacing={4} p={6}>
              <Heading size="md">{post.title}</Heading>
              <Text fontSize="sm" color="gray.600">
                {post.excerpt}
              </Text>
              <Button bg="gray.900" color={'white'} size="sm" alignSelf="flex-start" as="a" href={`/blog/${post.id}`}>
                Read More
              </Button>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
