import React from "react";
import Slider from "react-slick";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";

import { Avatar, AvatarGroup } from "@chakra-ui/react"

// Example testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    feedback: "Absolutely love my new necklace. Great quality and fast shipping!",
    image: "/img/user/user1.jpeg",
  },
  {
    id: 2,
    name: "Daniel Kate",
    feedback: "Amazing craftsmanship. My wife was thrilled with her new ring.",
    image: "/img/user/user2.jpeg",
  },
  {
    id: 3,
    name: "Emily Brown",
    feedback: "The bracelet is stunning — even better than I expected.",
    image: "/img/user/user3.jpeg",
  },
  {
    id: 4,
    name: "Michael Davis",
    feedback: "Exceptional service and beautiful jewellery. Highly recommend!",
    image: "/img/user/user4.jpeg",
  },
  {
    id: 5,
    name: "Olivia Wilson",
    feedback: "I’ve never seen such attention to detail. I’ll shop here again.",
    image: "/img/user/user5.jpg",
  },
  {
    id: 6,
    name: "James Anderson",
    feedback: "High-quality rings at great prices. Fast delivery too!",
    image: "/img/user/user6.jpg",
  },
  {
    id: 7,
    name: "Charlotte Thomas",
    feedback: "My earrings are gorgeous! Compliments every time I wear them.",
    image: "/img/user/user7.jpg",
  },
  {
    id: 8,
    name: "Benjamin Lee",
    feedback: "Customer service was so helpful with my custom order. Love it!",
    image: "/img/user/user8.jpg",
  },
  {
    id: 9,
    name: "Amelia Martin",
    feedback: "Beautiful jewellery pieces — they make perfect gifts.",
    image: "/img/user/user9.jpg",
  },
  {
    id: 10,
    name: "William Harris",
    feedback: "I ordered a necklace for my mom — she was so happy with it!",
    image: "/img/user/user10.jpg",
  },
];


const AvatarImg = ({src, name}) => {
  return (
    <Avatar.Root>
      <Avatar.Fallback name={name} />
      <Avatar.Image src={src} />
    </Avatar.Root>
  )
}

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4, // 4 per row
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // screens below 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // screens below 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // screens below 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box py={16} px={{ base: 4, md: 12 }}>
      <Heading mb={8} textAlign="center">
        What Our Customers Say
      </Heading>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Box key={testimonial.id} p={2}>
            <Box p={6} borderWidth="1px" borderColor={'gray.200'} borderRadius="md" textAlign="center" bg="white">
              
              <AvatarImg src={testimonial.image} name={testimonial.name}/>

              <Text fontWeight="bold" mb={2}>
                {testimonial.name}
              </Text>
              <Text fontSize="sm" color="gray.600">
                "{testimonial.feedback}"
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
