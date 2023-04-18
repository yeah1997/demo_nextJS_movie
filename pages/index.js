import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Swiper, { loadSwiper } from "../components/Swiper";
import Movie, { loadMovie } from "../components/Movie";
import Layout from "../components/Layout";

export default function Home({ swiper, movie }) {

  return (
    <>
      <Layout >
        <Swiper data={swiper} />
        <Movie data={movie} title="电影" />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  // 获取轮播图数据
  let { data: swiper } = await loadSwiper()
  let { data: movie } = await loadMovie()
  return {
    props: {
      swiper,
      movie
    }
  }
}