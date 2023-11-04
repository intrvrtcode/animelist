"use client"
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import AnimeList from "@/components/animelist";
import { useEffect, useState } from "react";
import { getAnimeData } from "../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const getDataAnime = async () => {
    try {

      const data = await getAnimeData('/top/anime', `page=${page}`)
      setTopAnime(data);

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getDataAnime()
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList data={topAnime.data} />
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
    </>
  )
}

export default Page;