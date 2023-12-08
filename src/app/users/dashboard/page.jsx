import { getSessionUser } from "@/libs/auth-libs";
import Link from "next/link";

const Page = async () => {
  const dataUser = await getSessionUser();

  return(
    <div className="text-color-primary flex flex-col justify-center items-center m-6">
      <h3 className="text-3xl mb-4">Welcome, {dataUser.name}</h3>
      <img className="rounded-md" src={dataUser.image} alt="github_profile_picture" width={150} height={250} />

      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="px-4 py-3 text-lg bg-color-accent text-color-dark font-semibold rounded-sm" href="/users/dashboard/collection">
          My Collection
        </Link>

        <Link className="px-4 py-3 text-lg bg-color-accent text-color-dark font-semibold rounded-sm" href="/users/dashboard/comment">
          My Comment
        </Link>
      </div>
    </div>
  )
}

export default Page;