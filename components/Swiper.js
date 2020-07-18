import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Box, Heading, Text, Button } from "@chakra-ui/core";

const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #fff;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 15px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img {
    filter: brightness(50%);
  }
`;

const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`;

export default function Swiper() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/carousel.min.css" />
      </Head>
      <Carousel
        css={swiperContainer}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <CarouselItem>
          <img src="/images/1.jpg" />
          <Box>
            <Heading as="h2" size="lg">
              KING IN BLACK
            </Heading>
            <Text>
              The next shocking chapter in Donny Cates and Ryan Stegman's Venom
              Saga is revealed!
            </Text>
            <Button colorScheme="red">CHECK DETAIL</Button>
          </Box>
        </CarouselItem>
        <CarouselItem>
          <img src="/images/2.jpg" />
        </CarouselItem>
        <CarouselItem>
          <img src="/images/3.jpg" />
        </CarouselItem>
      </Carousel>
    </>
  );
}
