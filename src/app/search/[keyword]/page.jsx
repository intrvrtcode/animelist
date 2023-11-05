import HeaderAnimeList from "@/components/animelist/Header";
import AnimeList from "@/components/animelist";
import { getAnimeData } from "@/libs/api-libs";

const PageSearch = async ({ params }) => {
  const {keyword} = params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeData('/anime', `q=${decodedKeyword}`)

  return (
    <>
      {/* Anime Terpopuler */}
      <section className="mb-8">
        <HeaderAnimeList title={`Pencarian untuk ${decodedKeyword}...`} />
        <AnimeList data={searchAnime.data} />
      </section>
    </>
  )
}

export default PageSearch