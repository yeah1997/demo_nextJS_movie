import { Box, HStack, Heading, Image, Text } from "@chakra-ui/core";
import { MdMovie } from "react-icons/md"
import axios from "axios"
import { baseURL } from "../axiosConfig"

export default function Movie({ data, title }) {
    return (
        <Box maxW={1200} mx="auto" marginTop="20px">
            <HStack>
                <MdMovie size="12px" />
                <Heading as="h3" fontSize="24px">{title}</Heading>
            </HStack>
            <HStack mt="20px" spacing={3}>
                {data.map(moive =>
                    <Box w={290} key={moive.id}>
                        <Image src={moive.url} />
                        <Text mt="10px">{moive.title}</Text>
                    </Box>)}
            </HStack>
        </Box >
    )
}

export function loadMovie() {
    return axios.get("/api/movie", { baseURL })
}