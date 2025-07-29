import React from "react";
import {
  Dialog,
  Button,
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function ContactDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Dialog.Root open={isOpen} onOpenChange={(v) => (v ? onOpen() : onClose())}>
      <Dialog.Trigger asChild>
        <Button _hover={{color: 'teal.600', bg: 'gray.200'}} borderColor={{md: "white", base: "gray.300"}} borderWidth={{base: "1px"}} bg={{bade:'gray.100'}} py={{base: 5}} textAlign={'start'} display={'flex'} justifyContent={'start'}>Contact Us</Button>
      </Dialog.Trigger>

      <Dialog.Backdrop />

      <Dialog.Positioner>
        <Dialog.Content borderRadius="md"  maxW="500px" w={'97%'} bg="white">
          <Dialog.CloseTrigger
            position="absolute"
            top={4}
            right={4}
            cursor="pointer"
          >
            ❌
          </Dialog.CloseTrigger>

          <Dialog.Header mb={4}>
            <Dialog.Title fontSize="xl" fontWeight="bold" textAlign={'center'}>
              Reach Out to Aurora Gems
            </Dialog.Title>
          </Dialog.Header>

          <Dialog.Body as="form">
            <Box display="flex" flexDirection="column" gap={4}>
              <Box>
                <Text mb={1}>Name</Text>
                <input
                  type="text"
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "6px",
                    background: '#dde1e7',
                    border: "1px solid #ccc",
                  }}
                />
              </Box>

              <Box>
                <Text mb={1}>Email</Text>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "6px",
                    background: '#dde1e7',
                    border: "1px solid #ccc",
                  }}
                />
              </Box>

              <Box>
                <Text mb={1}>Message</Text>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    background: '#dde1e7',
                    resize: "none",
                  }}
                ></textarea>
              </Box>
            </Box>
          </Dialog.Body>

          <Dialog.Footer mt={5}>
            <Button bg="teal.600" color={'white'} onClick={onClose}>
              Send Message
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
