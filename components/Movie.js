import { Box, Heading, HStack, Image, Text } from '@chakra-ui/core';
import { MdMovie } from "react-icons/md";

export default function Movie () {
  return <Box maxW={1200} mx="auto" mt="20px">
    <HStack fontSize="24px">
      <MdMovie />
      <Heading as="h3" fontSize="24px">电影</Heading>
    </HStack>
    <HStack mt="20px" spacing={3}>
      <Box w={290}>
        <Image src="/images/item_1.jpg"/>
        <Text mt="10px">Marvel Mission Recap: Captain Marvel’s Star of Hala</Text>
      </Box>
      <Box w={290}>
        <Image src="/images/item_1.jpg"/>
        <Text mt="10px">Marvel Mission Recap: Captain Marvel’s Star of Hala</Text>
      </Box>
    </HStack>
  </Box>
}