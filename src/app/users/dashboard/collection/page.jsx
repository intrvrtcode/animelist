import Link from "next/link";
import Header from "@/components/dashboard/Header";
import { getSessionUser } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await getSessionUser();

  const collections = await prisma.collection.findMany({
    where: { user_email: user.email }
  })

  return (
    <section className="p-4">
      <Header title="My Collections" />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {
          collections.map((item, index) => (
            <Link key={index} href={`/anime/${item.anime_mal_id}`} className="relative border-2 border-color-accent">
              <img src={item.anime_image} className="w-full h-72 object-cover" />

              <div className="absolute w-full bottom-0 h-16 bg-color-accent flex items-center justify-center">
                <h5 className="text-xl text-center">{item.anime_title}</h5>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default Page;