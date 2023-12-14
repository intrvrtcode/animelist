import Link from "next/link";
import prisma from "@/libs/prisma";
import { getSessionUser } from "@/libs/auth-libs";
import Header from "@/components/dashboard/Header";

const Page = async () => {
  const user = await getSessionUser();
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } });

  return (
    <section className="px-4 py-7">
      <Header title="My Comments" />

      <div className="grid grid-cols-1 gap-4 mt-6">
        {
          comments.map((item, index) => (
            <Link key={index} href={`/anime/${item.anime_mal_id}`} className="bg-color-primary px-4 py-3">
              <h4 className="mb-1">{item.anime_title}</h4>
              <p className="text-color-dark">{item.comment}</p>
            </Link>
          ))
        }

        {
          comments.length === 0 &&
          <p className="text-lg text-color-primary">No comments yet..</p>
        }
      </div>
    </section>
  )
}

export default Page;