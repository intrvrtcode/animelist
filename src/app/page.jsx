import AnimeList from "../components/animelist";
import HeaderAnimeList from "@/components/animelist/Header";
import { getAnimeData } from "./libs/api-libs";

const homePage = async () => {
  const topAnime = await getAnimeData('/top/anime', 'limit=8')

  return (
    <>
      {/* Anime Terpopuler */}
      <section className="mb-8">
        <HeaderAnimeList title="Popular Anime" linkHref="/popular" linkTitle="Lihat Semua" />
        <AnimeList data={topAnime.data} />
      </section>
    </>
  )
}

export default homePage;