import Link from "next/link";

const AnimeList = ({ data }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {
        data?.map(item => (
          <div key={item.mal_id} className="shadow-xl rounded-sm bg-color-secondary">
            <Link className="cursor-pointer text-color-primary hover:text-color-accent transition-all" href={`/anime/${item.mal_id}`}>
              <img className="w-full max-h-72 object-cover" src={item.images.webp.image_url} alt="..." />
              <h3 className="font-semibold md:text-xl text-md p-4">{item.title}</h3>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default AnimeList;