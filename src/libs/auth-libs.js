import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const getSessionUser = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export {getSessionUser}