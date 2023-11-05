import AnimeList from "../components/animelist";
import HeaderAnimeList from "@/components/animelist/Header";
import { getAnimeData, getNestedAnimeData, generateRandomData } from "../libs/api-libs";

const homePage = async () => {
  const topAnime = await getAnimeData('/top/anime', 'limit=8');
  const recomendedAnime = await getNestedAnimeData('/recommendations/anime', 'entry');

  return (
    <>
      {/* Anime Terpopuler */}
      <section className="mb-8">
        <HeaderAnimeList title="Popular Anime" linkHref="/popular" linkTitle="Lihat Semua" />
        <AnimeList data={topAnime.data} />
      </section>

      {/* Anime Rekomendasi */}
      <section className="mb-8">
        <HeaderAnimeList title="Rekomendasi Anime" />
        <AnimeList data={generateRandomData(recomendedAnime, 8)} />
      </section>
    </>
  )
}

export default homePage;