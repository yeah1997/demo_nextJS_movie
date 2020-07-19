import Layout from "../../components/Layout";
import { Box, Heading, Divider, Text } from "@chakra-ui/core";
import { css } from '@emotion/core';

const DetailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    margin-bottom: 10px;
    display: block;
  }
`;

export default function Detail() {
  return (
    <Layout>
      <Box maxW={1200} mx="auto" mt="70px">
        <Heading as="h2" size="xl">
          Marvel Mission Recap: Captain Marvel’s Star of Hala
        </Heading>
        <Heading
          mt="10px"
          as="h4"
          size="lg"
          color="gray.500"
          fontWeight="light"
        >
          The results are out of this world!
        </Heading>
        <Divider mt="10px" />
        <Box overflow="hidden" mt="10px">
          <Text float="left">作者: Tomas</Text>
          <Text float="right">发布时间: 2045-05-25</Text>
        </Box>
        <Divider mt="10px" />
        <Box css={DetailContainer}>
          <p>
            Congrats agents — it appears that many of you successfully completed
            the latest Marvel Mission!
          </p>
          <p>
            Congrats agents — it appears that many of you successfully completed
            the latest Marvel Mission!
          </p>
          <p>
            Congrats agents — it appears that many of you successfully completed
            the latest Marvel Mission!
          </p>
        </Box>
      </Box>
    </Layout>
  );
}
