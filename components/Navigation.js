import { Box, HStack } from "@chakra-ui/core"
import Link from "next/link"



export default function Navigation() {
    return (
        <Box h={52} bg="#202020" color="#FFF">
            <HStack h={52} justify="center" spacing={3} alignItems="center">
                <Link href="#"><a>影片</a></Link>
                <Link href="#"><a>漫画</a></Link>
                <Link href="#"><a>电影</a></Link>
                <Link href="#"><a>电视</a></Link>
                <Link href="#"><a>新闻</a></Link>
            </HStack>
        </Box>
    )
}