import { getAnimeData } from "@/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import CollectionButton from "@/components/animelist/CollectionButton";
import { getSessionUser } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async ({ params: { id } }) => {
  const { data: animeById } = await getAnimeData(`/anime/${id}`);
  const user = await getSessionUser();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id }
  });

  return (
    <div className="container mx-auto">
      <div className="pt-7 px-4">
        <h3 className="text-2xl md:text-3xl text-color-primary text-center">{animeById.title} - {animeById.year}</h3>

        {
          (user && !collection) &&
          <div className="mt-4">
            <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={animeById.images.webp.image_url} anime_title={animeById.title} />
          </div>
        }
      </div>

      <div className="flex gap-3 pt-10 px-4 overflow-auto">
        <div className="p-1 font-semibold w-36 text-lg flex flex-col justify-center items-center rounded border border-color-primary text-color-primary">
          <h3>Rank</h3>
          <p>{animeById.rank}</p>
        </div>

        <div className="p-1 font-semibold w-36 text-lg flex flex-col justify-center items-center rounded border border-color-primary text-color-primary">
          <h3>Score</h3>
          <p>{animeById.score}</p>
        </div>

        <div className="p-1 font-semibold w-36 text-lg flex flex-col justify-center items-center rounded border border-color-primary text-color-primary">
          <h3>Episodes</h3>
          <p>{animeById.episodes}</p>
        </div>

        <div className="p-1 font-semibold w-36 text-lg flex flex-col justify-center items-center rounded border border-color-primary text-color-primary">
          <h3>Members</h3>
          <p>{animeById.members}</p>
        </div>
      </div>

      <div className="pt-6 px-4 flex sm:flex-nowrap flex-wrap gap-4 text-color-primary">
        <img className="w-full min-w-[200px] rounded object-cover" src={animeById.images.webp.image_url} alt={animeById.images.jpg.image_url} />
        <div>
          <p className="text-lg text-justify">{animeById.synopsis}</p>
        </div>
      </div>

      <div>
        <VideoPlayer youtubeId={animeById.trailer.youtube_id} />
      </div>
    </div>
  )
}

export default Page;