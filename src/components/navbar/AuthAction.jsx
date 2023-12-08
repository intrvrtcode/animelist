import Link from "next/link"
import { getUserAuth } from "@/libs/auth-libs"

const AuthAction = async () => {
  const user = getUserAuth()
  // console.log(user)

  return (
    <Link href="/api/auth/signin">Sign In</Link>
  )
}

export default AuthAction