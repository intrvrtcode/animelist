import Link from "next/link";
import { getSessionUser } from "@/libs/auth-libs";

const UserAuthAction = async () => {
  const user = await getSessionUser();

  return(
    <div className="flex justify-between gap-x-8 gap-y-4">
      {
        user ? <Link className="py-1" href="/users/dashboard">Dasboard</Link> : null
      }

      {
        user ? <Link className="bg-color-dark text-color-accent py-1 px-8 inline-block" href="/api/auth/signout">Sign Out</Link> :
        <Link className="bg-color-dark text-color-accent py-1 px-8 inline-block" href="/api/auth/signin">Sign In</Link>
      }
    </div>
  )
}

export default UserAuthAction;