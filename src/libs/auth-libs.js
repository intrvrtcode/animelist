import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

const getUserAuth = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export {getUserAuth}